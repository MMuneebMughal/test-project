import { Routes, Route } from 'react-router-dom';
import { FrontEndLayout } from '@src/layout/FrontEndLayout';
import { Login } from '@src/pages/auth/Login';
import { Signup } from '@src/pages/auth/Signup';
import { Password } from '@src/pages/auth/Password';
import { Home } from '@src/pages/Home';
import { Shop } from '@src/pages/Shop';
export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontEndLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forget-password' element={<Password />} />
        <Route path='home' element={<Home />} />
        <Route path='/forget-password' element={<Shop />} />
      </Route>
    </Routes>
  );
};
