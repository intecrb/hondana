import React, { Component } from "react";

class App extends Component {
  state = {
    books: [
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
    ]
  };

  render() {
    const items = this.state.books.map(d => (
      <li>
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
