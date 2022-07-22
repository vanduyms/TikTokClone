import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://static1.bestie.vn/Mlog/ImageContent/202112/cau-be-chau-phi-gay-sot-khi-hat-con-co-be-be-noi-tieng-viet-cuc-soi-9a34c4.jpg"
        alt="Avatar"
      />
      <div className={cx("info")}>
        <p className={cx("name")} >
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("icon-check")} icon={faCheckCircle} />
        </p>
        <p className={cx("username")}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;