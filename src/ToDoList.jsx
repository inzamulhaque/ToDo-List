import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from "./List";

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewItem( (preVal) => {
            return [...preVal, item];
        } );
        setItem("");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1> ToDo List </h1>
                    <br/>
                    <input
                        type="text"
                        value={item}
                        placeholder="Add Item"
                        onChange={itemEvent}
                    />
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        { newItem.map( (val, index) => {
                            return <List key={index} text={val}/>;
                        } ) }
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default ToDoList;