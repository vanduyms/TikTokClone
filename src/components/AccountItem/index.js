import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Image from "~/components/Images";

import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link className={cx("wrapper")} to={`@${data.nickname}`} >
      <Image
        className={cx("avatar")}
        src={data.avatar}
        alt={data.full_name}
      />
      <div className={cx("info")}>
        <p className={cx("name")} >
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx("icon-check")} icon={faCheckCircle} />}
        </p>
        <p className={cx("username")}>{`@${data.nickname}`}</p>
      </div>
    </Link >
  );
}

AccountItem.propTypes = {
  data: PropTypes.object,
}

export default AccountItem;