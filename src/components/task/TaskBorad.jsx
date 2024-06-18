/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBorad() {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const defaultTask = {
    id: crypto.randomUUID(), // eta amk random Id dey
    title: "Learn Reacat",
    description:
      "I want to learn react as much as I can. Then  I will try to learn the other things ",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavourite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);

  // function executing when the open button is clicked in TaskAction
  const handleAddTask = (task) => {
    // setTasks(...tasks, task)
    console.log("The task is", task)
    setTasks([...tasks, task])
    setShowModal(false)
  };
  return (
    <div>
      <SearchTask />
      <div className="mt-[25px] rounded-xl border-[rgba(206,206,206,0.12)] bg-[#1D212B] p-[30px]">
        <TaskAction onAddClick ={()=> setShowModal(true)} />
        <TaskList tasks={tasks} />

        {showModal && <AddTaskModal onSave ={handleAddTask} closeModal={()=>setShowModal(false)} />}
      </div>
    </div>
  );
}
