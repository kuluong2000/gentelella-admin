import React from "react";
import classNames from "classnames/bind";
import style from "./sidebar.module.scss";
import SidebarItem from "./SidebarItem";
const cx = classNames.bind(style);

export default function SideMenu({ data, onClick }) {
  return (
    <ul>
      {data.map((item, idx) => {
        return <SidebarItem key={idx} title={item.title} icon={item.icon} pathChildren={item.children} onClick={onClick}></SidebarItem>;
      })}
    </ul>
  );
}
