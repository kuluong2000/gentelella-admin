import React from "react";
import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";
import SideBar from "../SideBar/SideBar";
import Header from "../../common/Header/Header";

const cx = classNames.bind(styles);

export default function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <SideBar></SideBar>
      <div className={cx("container")}>
        <Header></Header>
      </div>
    </div>
  );
}
