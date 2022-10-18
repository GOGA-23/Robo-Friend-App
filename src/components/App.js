import React from "react";
import "../index.css";
import SearchBox from "../containers/SearchBox";
import CardList from "../containers/CardList";
import { robots } from "../containers/Robots";
import Scroll from "../containers/Scroll"
import "tachyons";
import "../components/App.css"

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      SearchFiled : "",
      robots : robots
    }
  }
  
  OnSearchChange = (e) =>{ 
    this.setState({SearchFiled : e.target.value})
     
  }

  render() {
    const FilterRobots = robots.filter((robot) =>{
      return  robot.name.toLowerCase().includes(this.state.SearchFiled.toLowerCase());
     })
    return (
      <div className="tc" >
        <h1 className="f2">Robot Friends</h1>
        <SearchBox SearchChange={this.OnSearchChange}/>
        <Scroll>
        <CardList robots={FilterRobots}/>
        </Scroll>
      </div>
    );
  }
}

// const styles = {
//   header : {
//     backgroundImage: "linear-gradient(to bottom right, #00ed28, #0a38e1)"
//   }
// }

export default App;
// background-image: linear-gradient(to bottom right, #00ed28, #0a38e1);