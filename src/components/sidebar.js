import {Link} from "react-router-dom";

function Sidebar() {




  return (
    <div className="">
    <span className="navbar p-4">
    <Link to='/' className="navbar-brand p=4 text-white">TodoApp</Link> 
    </span>
    <ul class="list-group bg-dark">
    <li class="list-group-item bg-black text-white">Dashboard</li>
    <li class="list-group-item bg-black text-white"><Link to="/tasks" className="navbar-brand">Tasks</Link> </li>
    <li class="list-group-item bg-black text-white"><Link to="/users" className="navbar-brand">Users</Link> </li>
    <li class="list-group-item bg-black text-white">Settings</li>
    </ul>

    </div>
  );
}

export default Sidebar;
