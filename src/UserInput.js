import React from 'react'
import ReactDOM from 'react-dom'

class UserInput extends React.Component {
    render() {
        return (
            <form>
                <input class="col-sm-6 col-md-3" type="date" placeHolder="Date of Expense" ></input>
                <input class="col-sm-6 col-md-3" placeHolder="Description of Expense" ></input>
                <input class="col-sm-6 col-md-3" type="number" placeHolder="Amount" ></input>
                <input class="col-sm-6 col-md-3" placeHolder="Where?" ></input>
                <button class="col-sm-6 col-md-3" >Submit</button>
            </form>
        )
    }
}

ReactDOM.render(<UserInput />, document.getElementById('root'))

export default UserInput