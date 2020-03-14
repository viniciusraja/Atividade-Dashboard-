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
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";



class ExpandingRow extends React.Component {
    state = { open: false };
  
    render() {
      const { row } = this.props;
      const { open } = this.state;
  
      return (
        <>
          <TableRow key={row.id} style ={row.id % 2?
           { boxShadow:"inset 1px 1px 2px #b0b0b0, inset -1px -1px 2px #ffffff", borderRadius:30,backgroundColor:"#F8F8F8", padding:0,  borderWidth:2, borderColor:"#F7F7F7"}:
           { boxShadow: "inset 1px 1px 2px #b0b0b0, inset -1px -1px 2px #ffffff",borderRadius:30, padding:0,  borderWidth:1 }}>
            
            <TableCell  className=" w-25 p-0 pl-4" ><p className="font-weight-bold m-0">{row.name}</p></TableCell>
            <TableCell  className="p-0 ">{row.joinDate}<p className="text-muted m-0">Joined</p></TableCell>
            <TableCell  className="p-0 ">{row.phone}<p className="text-muted m-0">Phone-Number</p></TableCell>
            <TableCell  className="p-0 ">{row.adress}<p className="text-muted m-0">Location</p></TableCell>
            <TableCell align="right" className="p-0">
            <div className="buttons d-flex row">
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
          <Collapse className="w-100"in={open} component="tr" style={{ display: "block"}}>
            <TableHead >
                 <div className="dropDownDetails text-muted" style={open?{margin:7}:{margin:0}}>The client {row.name} bought a/an {row.product} in the value of ${row.price} and payed {row.methodOfPay}</div>
            </TableHead>
          </Collapse>
        </>
      );
    }
  }
  
  const styles = theme => ({
    root: {
     
      width:"100%",
      marginTop: 0,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
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
        <Table className={classes.table}>
        <TableHead><div className="costumersHeader">RECENT COSTUMERS</div></TableHead>
          <TableBody> 
            {rows.map(row => (
              <ExpandingRow row={row} />
            ))}
          </TableBody>
        </Table>
    );
  }
  
  SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(SimpleTable);
  