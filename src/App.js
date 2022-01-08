import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./component/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: "11",
          name: "Frankenstein",
        },
        {
          id: "12",
          name: "Dracula",
        },
        {
          id: "13",
          name: "Zombie",
        },
        {
          id: "14",
          name: "Alien",
        },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          ...this.state,
          monsters: this.state.monsters.concat(users),
        })
      );

    //  console.log(this.state.monsters);
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search for monster"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <button onClick={() => {}}>asfasf</button>
//         <p>
//           Edit <>src/App.js</> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
