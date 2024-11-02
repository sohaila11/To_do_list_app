import React, { Component } from 'react';
import TodoItems from './components/Todoitems/Todoitems';
import AddItem from './components/Additems/Additems';
class App extends Component{
  state={
    items:[
      {id:1, title:'Studying',duration:8},
      {id:2, title:'Go shopping',duration:12},
      {id:3, title:'Making Lunch',duration:15},
    ]
  }

  deleteItem = (id) => {
    let items=this.state.items.filter(i=>{
        return i.id !== id
    })
    this.setState({items})
  }
addItem=(item)=>{
  item.id = Math.random();
  let items =this.state.items;
  items.push(item);
  this.setState({items})
}

  render(){
    return(
      <div className="App container">
        <h1 className='text-center'>To do List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem  addItem={this.addItem}/>
      </div>
    );
  }
}



export default App;
