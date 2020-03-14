import './CostumersComponent.css'

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { AiOutlineSetting } from "react-icons/ai";



class ExpandingRow extends React.Component {
    state = { open: false };
  
    render() {
      const { row } = this.props;
      const { open } = this.state;
  
      return (
        <>
          <TableRow className="w-100 " className={row.id % 2?"oddRow":"evenRow"} key={row.id}> 
            
            <TableCell style ={{width:"20%"}}  className="p-0 pl-4 border-bottom-0 firstCell" ><p className=" font-weight-bold m-0 ">{row.name}</p></TableCell>
            <TableCell style ={{width:"20%"}} className="p-0 border-bottom-0 joinDate"><p className="  m-0 ">{row.joinDate}</p><p className=" text-muted m-0">Joined</p></TableCell>
            <TableCell style ={{width:"20%"}} className="p-0 border-bottom-0 "><p className="  m-0" >{row.phone}</p><p className=" text-muted m-0">Phone-Number</p></TableCell>
            <TableCell style ={{width:"20%"}} className="p-0 border-bottom-0 location"><p className="  m-0 ">{row.adress}</p><p className=" text-muted m-0">Location</p></TableCell>
            <TableCell style ={{width:"20%"}} align="right" className="pr-md-5 p-0 border-bottom-0  lastCell ">
            <div className="buttons  flex-md-row flex-column  w-100">
              <div className="buttonItem buttonOptions">
               <h2>Options</h2> 
              </div>
              <div className="buttonItem m-1 buttonDetails"
                onClick={() => this.setState(({ open }) => ({ open: !open }))}
              >
               <h2>Details</h2> 
              </div>

            </div>
            </TableCell>
          </TableRow>
          <Collapse className="detailsContainer"in={open} component="tr" style={{ display: "block"}}>
            <TableRow className="border-bottom-0 rounded-circle">
                 <div className="dropDownDetails text-muted" style={open?{margin:7}:{margin:0}}>The client {row.name} bought a/an {row.product} in the value of ${row.price} and payed {row.methodOfPay}</div>
            </TableRow>
          </Collapse>
        </>
      );
    }
  }
  
  const styles = theme => ({
    root: {
     
      width:"100%",
      marginTop: 0,
      overflowX: "auto",
      overflowY:"auto"
    },
    table: {
      minWidth: 450
    },
  
});
  
  let id = 0;
  function createData(name, joinDate, phone, adress ,product, price,methodOfPay) {
    id += 1;
    return { id, name, joinDate, phone, adress,product, price,methodOfPay};
  }
  
  const rows = [
    createData("Jerry Mattedi", "13 aug 2018", "251-611-5362", "New York", "TV", 2451.60, "Debit"),
    createData("Elianora Vasilov", "13 aug 2018", "351-611-3252", "Ontario", "Cellphone", 251.60, "Credit"),
    createData("Marcos Anguiano", "13 aug 2018", "251-611-5362", "Milan", "TV", 2451.60, "Debit"),
    createData("Alvis Daen", "13 aug 2018", "351-611-3252", "Las Vegas", "AirFryer", 111.60, "Credit"),
    createData("Lissa Shipsey", "13 aug 2018", "251-611-5362", "San Francisco", "TV", 2451.60, "Debit"),
  ];
  
  function SimpleTable(props) {
    const { classes } = props;
  
    return (
        <>
        <div className="costumersHeader row col-12">
            RECENT COSTUMERS 
            <div className="settingsButton">
                <AiOutlineSetting size={35}/>
             </div>
        </div>
        <Table className={classes.table}>
          <TableBody> 
            {rows.map(row => (
              <ExpandingRow row={row} />
            ))}
          </TableBody>
        </Table>
    </>
    );
  }
  
  SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(SimpleTable);
  