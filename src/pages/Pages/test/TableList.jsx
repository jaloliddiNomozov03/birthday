import React from "react";
import TableIHeader from "./TableHeader";
import TableIteam from './TableIteam';

const TableList = ({posts, onDelete}) => {

    return (
        
        <table className="table table-striped  ">
            <TableIHeader  onDelete={onDelete} />
            <tbody>
                {
                    posts.map((value, index) => {
                        return (
                            < TableIteam  onDelete={onDelete} key={value.id} data={value} index={index} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default TableList;