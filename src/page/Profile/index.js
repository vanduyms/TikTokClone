import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "~/components/Images";
import styles from "./Profile.module.scss";

import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Profile({ data }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("header")}>
          <div className={cx("headerInfo")}>
            <Image
              className={cx("avatar")}
              src={data.avatar}
              alt={data.full_name}
            />
            <div className={cx("headerContainer")}>
              <h2 className={cx("user-title")}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
              </h2>
              <p className={cx("user-id")}>{data.nickname}</p>
              <Button primary>Follow</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;