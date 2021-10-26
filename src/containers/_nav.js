import React from 'react'
import CIcon from '@coreui/icons-react'
import { FaEye, FaChartBar } from 'react-icons/fa';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Tổng quan',
    to: '/',
    icon: <FaChartBar style={{ marginRight: 10 }} />,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý tài khoản',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý người dùng',
        to: '/quan-ly-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý tổ chức',
        to: '/quan-ly-org',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Thêm tài khoản thành viên',
        to: '/register-member',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý Điểm',
    icon: 'cil-map',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý Store',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý điểm cứu trợ',
        to: '/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý tổ chức',
        to: '/',
      },
    ],
  },
]

export default _nav
