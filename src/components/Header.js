import React from 'react'
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render() {
        return (<h1> React Expense Tracker</h1>
        )
        }
}

ReactDOM.render(<Header />, document.getElementById('root'))

export default Header