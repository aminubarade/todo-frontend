import {Link} from "react-router-dom";

function Sidebar() {




  return (
    <div>
    <span className="navbar p-4">
    <Link to='/' className="navbar-brand p=4 text-white">TodoApp</Link> 
    </span>
    <ul class="list-group bg-dark">
    <li class="list-group-item bg-dark text-white">Dashboard</li>
    <li class="list-group-item active bg-dark border-radius-0"><Link to="/tasks" className="navbar-brand">Tasks</Link> </li>
    <li class="list-group-item bg-dark text-white"><Link to="/users" className="navbar-brand">Users</Link> </li>
    <li class="list-group-item bg-dark text-white">Settings</li>
    </ul>5

    </div>
  );
}

export default Sidebar;
