import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.png";
import CountdownTimer from "./CountdownTimer";
import "./App.css";

const App = () => {
  //task related drafting
  const [task, setTask] = useState({
    id: new Date().toLocaleString() + "",
    text: "",
  });
  //allTasks, setAllTasks
  const [allTasks, setAllTasks] = useState([]);
  // use handleChange
  const handleChange = (event) => {
    setTask((prev) => ({ ...prev, text: event.target.value }));
  };
  //usehandleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllTasks((prev) => [...prev, task]);
    setTask({ id: new Date().toLocaleString() + "", text: "" });
  };

  //completedTasks, setCompletedTasks - setCompletedTasks is triggered when the timer runs out
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateCompletedTasks = (currTask) => {
    setCompletedTasks((prev) => [...prev, { text: task }]);
  };

  //massage the tasksLIst rendering function
  let taskItems = allTasks.map((allTasks) => (
    <table>
      <tr>
        <td>{allTasks.id}</td>
        <td>{allTasks.text}</td>
        <td>
          <div>
            <CountdownTimer updateCompletedTasks={updateCompletedTasks} />
          </div>
        </td>
      </tr>
    </table>
  ));
  // massage the completed tasks rendering function

  let completedTaskItems = JSON.stringify(completedTasks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header>
          <h3>Ongoing Tasks</h3>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="New task"
            value={task.text}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <tr>
          <th>Date and Time </th>
          <th>Task </th>
          <th>Timer </th>
        </tr>
        <div>{taskItems}</div>
        <p></p>
        <header>
          <h3>Completed Tasks</h3>
        </header>
        <tr>
          <th>Date and Time </th>
          <th>Task </th>
          <th>Time spent </th>
        </tr>
        <div> {completedTaskItems}</div>
      </header>
    </div>
  );
};

export default App;
