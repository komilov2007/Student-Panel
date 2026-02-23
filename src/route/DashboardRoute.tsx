import { Routes, Route } from 'react-router-dom';
import { Header, SideBar } from '../modules';
import {
  DashboardHome,
  Groups,
  Rooms,
  Stacks,
  Students,
  Teachers,
} from '../path';
import PATH from '../components/Path'; // default import

const DashboardRoute = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-[78%] h-screen overflow-y-auto">
        <Header />
        <Routes>
          {/* index route /dashboard */}
          <Route index element={<DashboardHome />} />

          {/* relative routes, parent /dashboard/* bo'lishi kerak App.tsx da */}
          <Route path={PATH.stacks} element={<Stacks />} />
          <Route path={PATH.groups} element={<Groups />} />
          <Route path={PATH.teachers} element={<Teachers />} />
          <Route path={PATH.students} element={<Students />} />
          <Route path={PATH.rooms} element={<Rooms />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoute;
