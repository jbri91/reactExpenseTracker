import React from 'react'
import ReactDOM from 'react-dom'


class Table extends React.Component {
    render() {
        return ( <div> 
            <table>
                <thead>
                <tr>
                    <th>Date Of Expense</th>
                    <th>Description of Expense</th>
                    <th>Amount</th>
                    <th>Where was purchase made?</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </tbody>
            </table>
               </div>
        )    
}
}

// class Header extends React.Component {
//     render() {
//         return <h1> React Expense Tracker</h1>
//     }
// }

ReactDOM.render(<Table />, document.getElementById('root'))
export default Table