import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

const DashboardLayouts = () => {
  return (
    <div className='w-[100%] h-[100vh] flex'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayouts