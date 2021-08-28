import React, { useState } from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const List = (props) => {
    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    }

    return(
        <>
         <div className="todo_style">
            <span onClick={cutIt}>
                <HighlightOffIcon className="deleteIcon"/>
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
         </div>
        </>
    );
}

export default List;