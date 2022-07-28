import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import config from "~/config";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import UserContainer from "./UserContainer";
import { data } from "./data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Menu>
          <MenuItem title="For You" to={config.routes.home} icon={<FontAwesomeIcon icon={faHouse} />} activeIcon={<FontAwesomeIcon icon={faHouse} />} />

          <MenuItem title="Following" to={config.routes.following} icon={<FontAwesomeIcon icon={faUserGroup} />} activeIcon={<FontAwesomeIcon icon={faUserGroup} />} />

          <MenuItem title="LIVE" to={config.routes.live} icon={<FontAwesomeIcon icon={faVideoCamera} />} activeIcon={<FontAwesomeIcon icon={faVideoCamera} />} />
        </Menu>

        <UserContainer title="Suggest account" data={data.suggest} />
        <UserContainer title="Following account" data={data.following} />
      </div>
    </div>
  );
}

export default Sidebar;