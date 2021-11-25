import React from 'react';
import { RouteBase } from './constrants/routeBaseUrl';
import WithBoundary from './views/components/WithBoundary';
const UserManagerment = React.lazy(() => import('./views/pages/userManagerment'));
const OrgManagerment = React.lazy(() => import('./views/pages/orgManagerment'));
const RegisterMember = React.lazy(() => import('./views/pages/RegisterMember'));
const Profile = React.lazy(() => import('./views/pages/Profile'));
const UpdatePassword = React.lazy(() => import('./views/pages/UpdatePassword'));
const Dashboard = React.lazy(() => import('./views/pages/Dashboard'));
const NotificationManagement = React.lazy(() => import('./views/pages/NotificationManagement'));
const CreateNotificaiton = React.lazy(() => import('./views/pages/CreateNotificaiton'));
const GrantAccess = React.lazy(() => import('./views/pages/GrantAccess'));

const routes = [
  { path: RouteBase.Home, exact: true, name: 'Trang chủ' },
  { path: RouteBase.UserManager, exact: true, name: 'Quản Lý Người Dùng', component: WithBoundary(UserManagerment) },
  { path: RouteBase.OrgManager, exact: true, name: 'Quản Lý Tổ Chức', component: OrgManagerment },
  { path: RouteBase.RegisterMember, exact: true, name: 'đăng ký thành viên', component: RegisterMember },
  { path: RouteBase.Profile, exact: true, name: 'Tài khoản', component: Profile },
  { path: RouteBase.UpdatePassword, exact: true, name: 'Cập nhật mật khẩu', component: UpdatePassword },
  { path: RouteBase.Dashboard, exact: true, name: 'Tổng quan', component: Dashboard },
  { path: RouteBase.NotificationManager, exact: true, name: 'Quản lý thông báo', component: NotificationManagement },
  { path: RouteBase.NotificationSending, exact: true, name: 'Gửi thông báo thông báo', component: CreateNotificaiton },
  { path: RouteBase.GrantAccess, exact: true, name: 'Phân quyền chức năng', component: GrantAccess }
];

export default routes;
