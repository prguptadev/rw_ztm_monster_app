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
          id: "asci1",
          name: "Frankenstein",
        },
        {
          id: "asci2",
          name: "Dracula",
        },
        {
          id: "asci3",
          name: "Zombie",
        },
        {
          id: "asci4",
          name: "Alien",
        },
      ],
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
          monsters: users,
        })
      );

    console.log(this.state.monsters);
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
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
