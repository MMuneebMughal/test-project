import { Outlet } from 'react-router-dom';
import { Navbar } from '@src/layout/Navbar/Navbar';
export const FrontEndLayout = () => {
  return (
    <div className='app'>
      <Navbar />
      <main className='client_content'>
        <Outlet />
      </main>
    </div>
  );
};
