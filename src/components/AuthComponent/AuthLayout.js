//import logo from './logo.svg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


function AuthLayout({children}) {
  return (
    <div className='row p-5'>
     <div className='col-4'></div>
     <div className='col-4'>
        {children}
     </div>
     <div className='col-4'></div>
      
      <Outlet />
    </div>
  );
}

export default AuthLayout;
