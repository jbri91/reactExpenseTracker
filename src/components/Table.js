import React from "react";
import Expense from "./Expense";
import TableHead from './TableHead'

class Table extends React.Component {

  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark thead-border">
           <TableHead />
          </thead>
          <tbody>
            <Expense />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
