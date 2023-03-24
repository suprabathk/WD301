import TaskCard from "./TaskCard"

function App() {
  return (
    <div className="px-10 lg:px-40">
      <h2 className="my-4 text-3xl font-extrabold">Smarter Tasks</h2>
      <p className="my-4 text-xl"><span className="font-bold">Project:</span> Graduation Final Year Project (Revamp College Website)</p>
      <div className="py-4 lg:flex justify-between">
        <div className="border-4 border-black rounded-2xl lg:w-[40%] px-5 py-5 my-5">
          <h1 className="text-2xl font-bold text-center mb-4">Pending</h1>
          <TaskCard title="Build The Website With Static Content" dueDate='10th April' assigneeName='Rohit S' />
          <TaskCard title="Add a blog" dueDate='22nd March' assigneeName='Rohit M' />
          <button className="hover:border-black border bg-gray-200 rounded-md w-full text-left font-semibold py-1 px-2">+ New Task</button>
        </div>
        <div className="border-4 border-black rounded-2xl lg:w-[40%] px-5 py-5 my-5">
          <h1 className="text-2xl font-bold text-center mb-4">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate='10th April' assigneeName='Rohit M' />
          <TaskCard title="Get the approval from principal" completedAtDate='20th April' assigneeName='Ajay S' />
        </div>
      </div>
    </div>
  );
}

export default App;
