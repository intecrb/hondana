import React, { Component } from "react";

class App extends Component {
  /**
   * APIでBooksの一覧を取得する
   */
  fetchBooks = () => {
    return [
      {
        id: 4253879753,
        name: "日和の書"
      },
      {
        id: 5283530853,
        name: "ドラゴンクエスト外伝"
      },
      {
        id: 4567898502,
        name: "JavaScript Good Parts"
      }
    ];
  };

  componentDidMount() {
    return fetch("http://localhost:3333")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          books: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  state = {
    books: []
  };

  render() {
    const items = this.state.books.map(d => (
      <li key={d.id}>
        {d.id} {d.name}
      </li>
    ));
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default App;
