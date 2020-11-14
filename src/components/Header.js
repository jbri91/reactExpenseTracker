import React from "react";

class Header extends React.Component {
  render() {
    const styles = {
      color: "#dc3545",
      backgroundColor: "#343a40",
    };
    return <h1 style={styles}> React Expense Tracker</h1>;
  }
}

export default Header;
