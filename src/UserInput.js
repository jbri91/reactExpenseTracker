import React from 'react'
import ReactDOM from 'react-dom'

class UserInput extends React.Component {
    
    
    SubmitExpense(event) {
        event.preventDefault();
        console.log('I submitted this')
    }
    
    
    
    render() {
        return (
            <form>
                <div>
                <input className="col-sm-6 col-md-3" type="date" placeholder="Date of Expense" ></input>
                <input className="col-sm-6 col-md-3" placeholder="Description of Expense" ></input>
                <input className="col-sm-6 col-md-3" type="number" placeholder="Amount" ></input>
                <input className="col-sm-6 col-md-3" placeholder="Where?" ></input>
                <button type="submit" className="btn btn-secondary" onClick={this.SubmitExpense}>Submit</button>
                </div>
            </form>
        )
    }
}

ReactDOM.render(<UserInput />, document.getElementById('root'))

export default UserInput