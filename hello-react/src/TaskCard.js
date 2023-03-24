import "./TaskCard.css"

const TaskCard = (props) => {
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