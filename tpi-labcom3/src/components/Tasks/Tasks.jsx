import { useState } from "react";
import DateRead from "../DateRead/DateRead";
import Cards from "../Cards/Cards";

const Tasks = ({taskTitle, taskDate, taskState, taskInfo}) => {
  const [state, setState] = useState(taskState);

  const changeStateHandler = () => {
    setState("Completada")
    console.log(state);
  }
  return (
    <Cards>
      <h2>{taskTitle}</h2>
      <h3>{taskState}</h3>
      <DateRead taskDate={taskDate}/>
      <button onClick={changeStateHandler}>!</button>
    </Cards>
  )
}

export default Tasks