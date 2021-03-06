import React from "react";
import classNames from "classnames/bind";
import styles from "../menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
export default function Menu() {
  return (
    <ul className={cx("menu-list")}>
      <li className={cx("menu-item")}>
        <a href="#">Profile</a>
      </li>
      <li className={cx("menu-item")}>
        <a href="#">
          <span>setting</span>
          <span className={cx("badge")}>50%</span>
        </a>
      </li>
      <li className={cx("menu-item")}>
        <a href="#">Help</a>
      </li>
      <li className={cx("menu-item")}>
        <Link to="/login" className={cx("menu-item-link")}>
          <span>Log out</span>
          <span className={cx("back")}>
            <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
          </span>
        </Link>
      </li>
    </ul>
  );
}
