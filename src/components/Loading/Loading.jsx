import React from "react";

import classNames from "classnames/bind";
import styles from "./loading.module.scss";

const cx = classNames.bind(styles);
export default function Loading({ classes }) {
  return (
    <div className={cx("wrapper")}>
      {/* <div className={cx("dashed-loading")}></div>;
     
       */}
      <div className={cx(classes)}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
