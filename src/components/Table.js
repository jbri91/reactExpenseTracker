import React from 'react'

class Table extends React.Component {
    
    
     DeleteExpense = () => {
        console.log('Deleted!')
    }
    
    
    render() {
        return ( <div> 
            <table className="table table-bordered table-hover">
                <thead className="thead-dark thead-border">
                <tr>
                    <th>Date Of Expense</th>
                    <th>Description of Expense</th>
                    <th>Amount</th>
                    <th>Where was purchase made?</th>
                    <th>Delete Expense</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10/20/2020</td>
                        <td>Computer</td>
                        <td>$999</td>
                        <td>Apple</td>
                        <td type="btn"  onClick={this.DeleteExpense}  className="btn-danger">X</td>
                    </tr>
                    <tr>
                        <td>10/30/2020</td>
                        <td>Coffee</td>
                        <td>$5</td>
                        <td>Starbucks</td>
                        <td type="btn" onClick={this.DeleteExpense} className="btn-danger">X</td>
                    </tr>
                </tbody>
            </table>
               </div>
        )    
}
}


export default Table