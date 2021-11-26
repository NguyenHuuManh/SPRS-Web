import {
  CCreateElement,
  CSidebar,
  CSidebarBrand, CSidebarMinimizer, CSidebarNav,
  CSidebarNavDivider, CSidebarNavDropdown,
  CSidebarNavItem, CSidebarNavTitle
} from "@coreui/react";
import { isEmpty } from "lodash-es";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarShow } from "src/redux/modules/sidebar";
import { isNull } from 'lodash'


const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sideBarReducer.status);
  const menu = JSON.parse(localStorage.getItem('menu'));
  const mapObj = (arr) =>
    arr.map((e) => {
      if (isEmpty(e.children)) {
        return {
          to: e.to,
          icon: e.icon,
          name: e.name,
          _tag: 'CSidebarNavItem',
        }
      } else {
        return {
          to: e.to,
          icon: e.icon,
          name: e.name,
          _children: mapObj(e.children),
          _tag: 'CSidebarNavDropdown',
        }
      }
    })
  const navi_menu = isNull(menu) ? [] : mapObj(menu);

  return (
    <CSidebar show={show} onShowChange={(val) => dispatch(sidebarShow(val))}>
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
        <h4>SPRS</h4>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navi_menu}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
