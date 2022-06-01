import React from "react";
import classNames from "classnames/bind";

//import css

import styles from "./onlyContent.module.scss";

const cx = classNames.bind(styles);
export default function OnlyContent({ children }) {
  return <div className={cx("container")}>{children}</div>;
}
