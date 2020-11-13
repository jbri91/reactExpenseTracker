import React from 'react'
import ReactDOM from 'react-dom'

class UserInput extends React.Component {
    render() {
        return (
            <form>
                <input placeHolder="Date of Expense" ></input>
                <input placeHolder="Description of Expense" ></input>
                <input placeHolder="Amount" ></input>
                <input placeHolder="Where was purchase made?" ></input>
            </form>
        )
    }
}

ReactDOM.render(<UserInput />, document.getElementById('root'))

export default UserInput