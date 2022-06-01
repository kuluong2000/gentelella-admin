//import lib
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { hideSidebar, showSidebar } from "../../../redux/action";
import { Routes, Route, Link } from "react-router-dom";
//import comp

import { Wrapper } from "../../Layout/Popper";
import Notification from "../../Layout/Popper/Menu/Notification/Notification";
import Menu from "../../Layout/Popper/Menu/Menu/Menu";
import routerPublic from "../../../router";

//import css

import styles from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);
export default function Header() {
  const dispatch = useDispatch();
  const toggleSidebar = useSelector((state) => state.sidebarToggle.classes);
  const [sidebarToggle, setSidebarToggle] = useState();

  useEffect(() => {
    setSidebarToggle(toggleSidebar);
  }, [toggleSidebar]);

  const handleClick = () => {
    if (sidebarToggle === "") {
      dispatch(showSidebar("open"));
    }
    if (sidebarToggle === "open") {
      dispatch(hideSidebar(""));
    }
  };
  return (
    <header className={cx("header")}>
      <div className={cx("nav-toggle")}>
        <button className={cx("menu-toggle")} onClick={handleClick}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
      <nav className={cx("navbar")}>
        <ul className={cx("navbar-list")}>
          <li className={cx("navbar-item", "navbar-envelope")}>
            <Tippy
              trigger="click"
              placement="top"
              offset={[-5, -5]}
              interactive
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  <Wrapper>
                    <Notification></Notification>
                  </Wrapper>
                </div>
              )}
            >
              <button>
                <FontAwesomeIcon icon={faEnvelope} className={cx("icon-envelope")}></FontAwesomeIcon>
                <span className={cx("navbar-badge")}>6</span>
              </button>
            </Tippy>
          </li>
          <li className={cx("navbar-item", " navbar-dropdrow")}>
            <Tippy
              trigger="click"
              offset={[0, -5]}
              interactive
              render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                  <Wrapper>
                    <Menu></Menu>
                  </Wrapper>
                </div>
              )}
            >
              <div className={cx("navbar-item", "navbar-dropdrow")}>
                <img src={require("../../../assets/images/avatar.jpg")} alt="" className={cx("avatar")} />
                <p className={cx("user-name")}>John Doe</p>
                <button>
                  <FontAwesomeIcon icon={faCaretDown} className={cx("icon-angle-down")}></FontAwesomeIcon>
                </button>
              </div>
            </Tippy>
          </li>
        </ul>
      </nav>
    </header>
  );
}
