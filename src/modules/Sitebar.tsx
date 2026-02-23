import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import PATH from '../components/Path';
import {
  HomeOutlined,
  AppstoreOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { key: PATH.dashboard, icon: <HomeOutlined />, label: 'Home' },
    {
      key: `${PATH.dashboard}/${PATH.stacks}`,
      icon: <AppstoreOutlined />,
      label: 'Stacks',
    },
    {
      key: `${PATH.dashboard}/${PATH.groups}`,
      icon: <DesktopOutlined />,
      label: 'Groups',
    },
    {
      key: `${PATH.dashboard}/${PATH.teachers}`,
      icon: <ContainerOutlined />,
      label: 'Teachers',
    },
    {
      key: `${PATH.dashboard}/${PATH.students}`,
      icon: <MailOutlined />,
      label: 'Students',
    },
    {
      key: `${PATH.dashboard}/${PATH.rooms}`,
      icon: <PieChartOutlined />,
      label: 'Rooms',
    },
  ];

  return (
    <Menu
      style={{ width: '22%', height: '100vh' }}
      selectedKeys={[location.pathname]}
      mode="inline"
      theme="dark"
      onClick={(e) => navigate(e.key)}
      items={items}
    />
  );
};

export default SideBar;
