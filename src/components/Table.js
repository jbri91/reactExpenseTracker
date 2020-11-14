import React from 'react'
import ReactDOM from 'react-dom'

class Table extends React.Component {
    render() {
        return ( <div> 
            <table class="table table-bordered table-hover">
                <thead class="thead-dark thead-border">
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
                        <td>10/20/1991</td>
                        <td>Computer</td>
                        <td>$999</td>
                        <td>Apple</td>
                        <td type="btn" class="btn-danger">X</td>
                    </tr>
                    <tr>
                        <td>10/20/1991</td>
                        <td>Computer</td>
                        <td>$999</td>
                        <td>Apple</td>
                        <td type="btn" class="btn-danger">X</td>
                    </tr>
                </tbody>
            </table>
               </div>
        )    
}
}

ReactDOM.render(<Table />, document.getElementById('root'))
export default Table