import { Route, Routes } from 'react-router-dom';
import { PATH } from '../components';
import Login from '../path/Auth/Login';
import LoginHome from '../path/Auth/LoginHome';

const AuthRoute = () => {
  const list = [
    { id: 1, path: PATH.home, element: <LoginHome /> },
    { id: 2, path: PATH.login, element: <Login /> },
  ];

  return (
    <Routes>
      {list.map((item) => (
        <Route key={item.id} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default AuthRoute;
