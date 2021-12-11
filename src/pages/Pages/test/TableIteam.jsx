import React from "react";


const TableIteam = (props) => {
    return (
        <tr>
            <td>{props.index+1} </td>
            <td> {props.data.title} </td>
            <td> {props.data.stack} </td>
            <td>
                <button
                 className="btn d-flex mx-auto me-1 btn-outline-danger" 
                 onClick={()=>props.onDelete(props.data)}
                 >Delete</button>
            </td>
        </tr>
    )
}
export default TableIteam;