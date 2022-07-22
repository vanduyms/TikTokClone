import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("menu")}>
        < Link to="/foryou" className={cx("menu-item", "active")}>
          <FontAwesomeIcon className={cx("menu-item__icon")} icon={faHouse} />
          <span className={cx("menu-item__title")}>For you</span>
        </Link>

        < Link to="/following" className={cx("menu-item")}>
          <FontAwesomeIcon className={cx("menu-item__icon")} icon={faUserGroup} />
          <span className={cx("menu-item__title")}>Following</span>
        </Link>
        < Link to="/live" className={cx("menu-item")}>
          <FontAwesomeIcon className={cx("menu-item__icon")} icon={faVideo} />
          <span className={cx("menu-item__title")}>Live</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;