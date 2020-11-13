import React from 'react'
import ReactDOM from 'react-dom'

class UserInput extends React.Component {
    render() {
        return (
            <form>
                <input type="date" placeHolder="Date of Expense" ></input>
                <input placeHolder="Description of Expense" ></input>
                <input type="number" placeHolder="Amount" ></input>
                <input placeHolder="Where?" ></input>
            </form>
        )
    }
}

ReactDOM.render(<UserInput />, document.getElementById('root'))

export default UserInput