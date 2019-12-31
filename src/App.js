import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
//import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    //constructor fucntion to create a object
    super(); //function to call the construction of parent class
    this.state = {
      //this is our state object
      //inside this we write our state properties
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    //render the code written inside it
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(respons => respons.json())
      .then(users => this.setState({ monsters: users })); //this.setState method modify our state property
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        {
          //from here we pass properties through component like cardlist component
          //below monsters pass all the list of monster through cardlist component
        }
        <h1>Monster Roldex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
