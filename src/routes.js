import React from 'react';
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const UserManagerment = React.lazy(() => import('./views/pages/userManagerment'));
const OrgManagerment = React.lazy(() => import('./views/pages/orgManagerment'));
const RegisterMember = React.lazy(() => import('./views/pages/RegisterMember'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/quan-ly-user', exact: true, name: 'Quản Lý Người Dùng', component: UserManagerment },
  { path: '/quan-ly-org', exact: true, name: 'Quản Lý Tổ Chức', component: OrgManagerment },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/register-member', exact: true, name: 'Register member', component: RegisterMember }
];

export default routes;
