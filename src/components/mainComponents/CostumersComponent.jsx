import './CostumersComponent.css'

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { AiOutlineSetting } from "react-icons/ai";



class ExpandingRow extends React.Component {
    state = { open: false };
  
    render() {
      const { row } = this.props;
      const { open } = this.state;
  
      return (
        <>
          <TableRow className="w-100 " className={row.id % 2?"color1Row":"color2Row"} key={row.id} style ={row.id % 2?
           { boxShadow:" 4px 4px 4px #b0b0b0,  -4px -4px 4px #ffffff", borderRadius:30,backgroundColor:"#F9F9F9", padding:0}:
           { boxShadow: " -3px 3px 4px #b0b0b0, 3px -3px 4px #ffffff",borderRadius:30, padding:0 }}>
            
            <TableCell style ={{width:"20%"}}  className="p-0 pl-4 border-bottom-0 firstCell" ><p className="text-white font-weight-bold m-0 ">{row.name}</p></TableCell>
            <TableCell style ={{width:"20%"}} className="p-0 border-bottom-0"><p className="text-white  m-0 ">{row.joinDate}</p><p className="text-white text-muted m-0">Joined</p></TableCell>
            <TableCell style ={{width:"20%"}} className="p-0 border-bottom-0 "><p className="text-white  m-0" >{row.phone}</p><p className="text-white text-muted m-0">Phone-Number</p></TableCell>
            <TableCell style ={{width:"20%"}} className="p-0 border-bottom-0 "><p className="text-white  m-0 ">{row.adress}</p><p className="text-white text-muted m-0">Location</p></TableCell>
            <TableCell style ={{width:"20%"}} align="right" className="p-0 pr-5 border-bottom-0  lastCell ">
            <div className="buttons d-flex w-100">
              <div className="buttonItem buttonOptions">
               <h2>Options</h2> 
              </div>
              <div className="buttonItem buttonDetails"
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
            RECENT COSTUMERS <span className="settingsIcon">
                <AiOutlineSetting size={35}/></span>
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
  