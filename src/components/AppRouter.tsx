import React from "react";
import {
  Route, Routes,
} from 'react-router-dom';
import Home from "../pages/Home";
import TaskList from "../pages/TaskList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" 
          element={<Home />} />
      <Route path="/task-list" 
          element={<TaskList />}/>
      <Route path="/" 
          element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
