import React from 'react'
import Login from './component/login/Login'
import Register from './component/register/Register'
import Dashboard from './component/dashboard/Dashboard'
import Sidebar from'./component/sidebar/Sidebar'
import AddNewTask from './component/task/AddNewTask'
import ExistingTask from './component/task/ExistingTask'
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

function App() {
  return (
    <Router>
     <Route path="/" component={Login} exact strict/>
     <Route path="/register" component={Register} exact strict/>
     <Route path="/dashboard" component={Dashboard} exact strict/>
     <Route path="/sidebar" component={Sidebar} exact strict/>
     <Route path="/addnewtask" component={AddNewTask} exact strict/>
     <Route path="/existingTask" component={ExistingTask} exact strict/>
    {/*<Sidebar /> */}
    
    </Router>
  );
}

export default App;
