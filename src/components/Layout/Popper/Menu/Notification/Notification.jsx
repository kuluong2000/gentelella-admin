import React from "react";
import classNames from "classnames/bind";
import styles from "../menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

export default function Notification() {
  return (
    <ul className={cx("noti-list")}>
      <li className={cx("noti-item")}>
        <span className={cx("noti-image")}>
          <img src={require("../../../../../assets/images/avatar.jpg")} alt="" />
        </span>
        <span className={cx("noti-info")}>
          <span className={cx("noti-name")}>John Smith</span>
          <span className={cx("noti-time")}>3 minutes ago</span>
        </span>
        <span className={cx("noti-message")}>Film festivals used to be do-or-die moments for movie makers. They were where...</span>
      </li>
      <li className={cx("noti-item")}>
        <span className={cx("noti-image")}>
          <img src={require("../../../../../assets/images/avatar.jpg")} alt="" />
        </span>
        <span className={cx("noti-info")}>
          <span className={cx("noti-name")}>John Smith</span>
          <span className={cx("noti-time")}>3 minutes ago</span>
        </span>
        <span className={cx("noti-message")}>Film festivals used to be do-or-die moments for movie makers. They were where...</span>
      </li>
      <li className={cx("noti-item")}>
        <span className={cx("noti-image")}>
          <img src={require("../../../../../assets/images/avatar.jpg")} alt="" />
        </span>
        <span className={cx("noti-info")}>
          <span className={cx("noti-name")}>John Smith</span>
          <span className={cx("noti-time")}>3 minutes ago</span>
        </span>
        <span className={cx("noti-message")}>Film festivals used to be do-or-die moments for movie makers. They were where...</span>
      </li>
      <li className={cx("noti-item")}>
        <span className={cx("noti-image")}>
          <img src={require("../../../../../assets/images/avatar.jpg")} alt="" />
        </span>
        <span className={cx("noti-info")}>
          <span className={cx("noti-name")}>John Smith</span>
          <span className={cx("noti-time")}>3 minutes ago</span>
        </span>
        <span className={cx("noti-message")}>Film festivals used to be do-or-die moments for movie makers. They were where...</span>
      </li>
      <li className={cx("noti-item")}>
        <button className={cx("btn-all")}>
          See All Alerts <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </button>
      </li>
    </ul>
  );
}
