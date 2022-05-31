import React, { useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function SidebarItem({ className, icon, title, to, pathChildren, onClick }) {
  return (
    <li className={cx("sidebar-item", className)} onClick={onClick}>
      {to ? (
        <Link to={to}>{title}</Link>
      ) : (
        <>
          <div style={{ userSelect: "none" }} className={cx("sidebar-item__parent")}>
            <span>{icon}</span>
            <p>{title}</p>
            {pathChildren && <FontAwesomeIcon icon={faChevronDown} className={cx("sidebar-item-chevron")}></FontAwesomeIcon>}
          </div>
          {pathChildren ? (
            <ul className={cx("sidebar-menu__child")}>
              {pathChildren.map((child, idx) => {
                return <SidebarItem key={idx} className={"sidebar-item__child"} title={child.title}></SidebarItem>;
              })}
            </ul>
          ) : null}
        </>
      )}
    </li>
  );
}
export default forwardRef(SidebarItem);
