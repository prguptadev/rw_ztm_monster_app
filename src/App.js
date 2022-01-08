import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box-component.jsx";

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

    this.handleChnage = this.handleChnage.bind(this);
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

  handleChnage = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search for monsters"
          // handlerChange={(e) => {
          //   this.setState({ searchField: e.target.value });
          // }}
          handlerChange={this.handleChnage}
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
