import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class App extends Component {
  /**
   * APIでBooksの一覧を取得する
   */
  fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:3333");
      this.setState({
        books: await response.json()
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    return this.fetchBooks();
  }

  state = {
    books: []
  };

  render() {
    const items = this.state.books.map(d => (
      <ListItem button key={d.id}>
        <ListItemText primary={d.name} />
      </ListItem>
    ));

    return (
      <div>
        <List component="nav" aria-label="secondary mailbox folders">
          {items}
        </List>

        <Button variant="contained" color="primary">
          Add Item
        </Button>
      </div>
    );
  }
}

export default App;
