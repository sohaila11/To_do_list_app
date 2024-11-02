import React from 'react'
import './Todoitems.css'
const Todoitems = (props)=>{
    const {items, deleteItem} = props;
    let length = items.length;
    const ListItem = length ? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    <span className="title">{item.title}</span>
                    <span className="duration">{item.duration}</span>
                    <span className="action-icon" onClick={()=>deleteItem(item.id)}>&#9745;</span>
                </div>
            )
        })
    ) : (
        <p>There is no item to show</p>
    )
    return(
        <div className="ListItems">
            <div className="Main-title">
                <span className='title'>Title</span>
                <span className="duration">Duration</span>
                <span className="action-title">Done</span>
            </div>
            {ListItem}
        </div>
    )
}
export default Todoitems;