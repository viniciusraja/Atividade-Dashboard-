import "./CostumersComponent.css";

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
        <TableRow className={row.id % 2 ? "oddRow " : "evenRow"} key={row.id}>
          <div className="col-12 justify-content-around d-flex flex-row align-items-center">
            <TableCell
              style={{ width: "20%" }}
              className="p-0 pl-4 border-bottom-0 justify-content-center d-flex align-items-center  justify-content-center align-items-center"
            >
              <div className=" font-weight-bold m-0 p-0 ">{row.name}</div>
            </TableCell>
            <TableCell
              style={{ width: "20%" }}
              className="p-0 m-0 border-bottom-0 joinDate justify-content-center d-md-flex d-none align-items-center"
            >
              <div>
                <p className="  m-0 ">{row.joinDate}</p>
                <p className=" font-italic text-justify m-0">Joined</p>
              </div>
            </TableCell>
            <TableCell
              style={{ width: "20%" }}
              className="p-0 m-0 border-bottom-0 justify-content-center d-flex align-items-center"
            >
              <div>
                <p className="  m-0">{row.phone}</p>
                <p className=" font-italic text-justify m-0">Phone-Number</p>
              </div>
            </TableCell>
            <TableCell
              style={{ width: "20%" }}
              className="p-0 m-0 border-bottom-0 location justify-content-center d-md-flex d-none align-items-center"
            >
              <div>
                <p className="  m-0 ">{row.adress}</p>
                <p className=" font-italic text-justify m-0">Location</p>
              </div>
            </TableCell>
            <TableCell
              style={{ width: "20%" }}
              className=" p-0 m-0 border-bottom-0 justify-content-center d-flex align-items-center"
            >
              <div className="buttons  d-flex mr-4  w-100">
                <div className="buttonItem buttonOptions">
                  <h2>Options</h2>
                </div>
                <div
                  style={
                    open
                      ? { backgroundColor: "#38a1b1" }
                      : { backgroundColor: "#FFF" }
                  }
                  className="buttonItem ml-3 buttonDetails"
                  onClick={() => this.setState(({ open }) => ({ open: !open }))}
                >
                  <h2 style={open ? { color: "#FFF" } : { color: "#000" }}>
                    Details
                  </h2>
                </div>
              </div>
            </TableCell>
          </div>
        </TableRow>
        <Collapse
          className="detailsContainer"
          in={open}
          component="tr"
          style={{ display: "block" }}
        >
          <div className="dropDownDetails font-italic text-justify mt-1">
            The client {row.name} bought a/an {row.product} in the value of $
            {row.price} and payed {row.methodOfPay}
          </div>
        </Collapse>
      </>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: 0,
    overflowX: "auto",
    overflowY: "auto"
  },
  table: {
    minWidth: 450
  }
});

let id = 0;
function createData(
  name,
  joinDate,
  phone,
  adress,
  product,
  price,
  methodOfPay
) {
  id += 1;
  return { id, name, joinDate, phone, adress, product, price, methodOfPay };
}

const rows = [
  createData(
    "Jerry Mattedi",
    "13 aug 2018",
    "251-611-5362",
    "New York",
    "TV",
    2451.6,
    "Debit"
  ),
  createData(
    "Elianora Vasilov",
    "13 aug 2018",
    "351-611-3252",
    "Ontario",
    "Cellphone",
    251.6,
    "Credit"
  ),
  createData(
    "Marcos Anguiano",
    "13 aug 2018",
    "251-611-5362",
    "Milan",
    "TV",
    2451.6,
    "Debit"
  ),
  createData(
    "Alvis Daen",
    "13 aug 2018",
    "351-611-3252",
    "Las Vegas",
    "AirFryer",
    111.6,
    "Credit"
  ),
  createData(
    "Lissa Shipsey",
    "13 aug 2018",
    "251-611-5362",
    "San Francisco",
    "TV",
    2451.6,
    "Debit"
  )
];

function SimpleTable(props) {
  const { classes } = props;
  return (
    <>
      <div className="col-12 row lg-col justify-content-lg-between justify-content-center p-0 m-0">
        <div className="costumersHeader  row col-12">
          RECENT COSTUMERS
          <div className="settingsButton">
            <AiOutlineSetting size={35} />
          </div>
        </div>
        <Table className={classes.table}>
          <TableBody>
            {rows.map(row => (
              <ExpandingRow row={row} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
