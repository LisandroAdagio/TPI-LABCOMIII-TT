import { useState } from "react";
import DateRead from "../DateRead/DateRead";
import Cards from "../Cards/Cards";

const Tasks = ({taskTitle, taskDate, taskState}) => {
  const [state, setState] = useState(false);

  const changeStateHandler = () => {
    setState(true)
    console.log(state);
  }
  return (
    <Cards>
      <h2>{taskTitle}</h2>
      <DateRead taskDate={taskDate}/>
      <button onClick={changeStateHandler}>!</button>
    </Cards>
  )
}

export default Tasks