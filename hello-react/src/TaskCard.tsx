import React from "react";
import "./TaskCard.css";

interface TaskCardInterface {
    title: string,
    completedAtDate?: string,
    dueDate?: string,
    assigneeName: string
}

const TaskCard = (props: TaskCardInterface) => {
    return (
        <div className='task-card border-black rounded-md border-2 my-2 py-2 px-4'>
            <p className="text-xl font-bold">{props.title}</p>
            {props.dueDate && <p>Due on: {props.dueDate}</p>}
            {props.completedAtDate && <p>Completed on: {props.completedAtDate}</p>}
            <p>Assignee: {props.assigneeName}</p>
        </div>
    );
}

export default TaskCard;