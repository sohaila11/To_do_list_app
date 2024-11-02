import React , { Component } from 'react'
import './Additems.css'
class AddItem extends Component {
    state={
        name:'',
        age:'',
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(e.target.title.value !=='' && e.target.duration.value !==''){
            this.props.addItem(this.state)
            this.setState({
                title:'',
                duration:''
            })
        }else{
            return false;
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="New Title" id="title" onChange={this.handleChange} value={this.state.title}></input>
                    <input type="number" placeholder="New Duration" id="duration" onChange={this.handleChange} value={this.state.duration}></input>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}
export default AddItem