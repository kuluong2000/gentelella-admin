import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import classNames from "classnames/bind";
import styles from "./defaultLayout.module.scss";
import SideBar from "../SideBar/SideBar";
import Header from "../../common/Header/Header";
import Loading from "../../Loading/Loading";

const cx = classNames.bind(styles);

export default function DefaultLayout() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <>
      {!show ? (
        <Loading classes={"circle-loading2"}></Loading>
      ) : (
        <div className={cx("wrapper")}>
          <SideBar></SideBar>
          <div className={cx("container")}>
            <Header></Header>
          </div>
        </div>
      )}
    </>
  );
}
