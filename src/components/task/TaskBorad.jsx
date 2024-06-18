import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";


export default function TaskBorad() {
  return (
    <div>
        <SearchTask/>
        <div className="mt-[25px] rounded-xl border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-[30px]">
        <TaskAction/>
        <TaskList/>
        </div>
 
    </div>
  )
}
