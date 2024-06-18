/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";


export default function TaskBorad() {
 const [show, setShow] = useState(false)
 const defaultTask = {
    'id':crypto.randomUUID(), // eta amk random Id dey 
    'ititle': "Learn Reacat",
    "description" : "I want to learn react as much as I can. Then  I will try to learn the other things ",
    "tags":["web", "react","js"],
    "priority":"High",
    "isFavourite":true
 }
 const [tasks,setTasks] = useState([defaultTask])
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
