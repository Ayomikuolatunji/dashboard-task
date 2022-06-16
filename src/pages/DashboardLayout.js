import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const DashboardLayouts = () => {
  return (
    <div className='w-[100%] h-[100vh] flex'>
      <div className='w-[20%]'>
        <Sidebar />
      </div>
       <main className='w-[100%] h-[100vh]'>
         <Header/>
          <div>
            <Outlet />
          </div>
       </main>
    </div>
  )
}

export default DashboardLayouts