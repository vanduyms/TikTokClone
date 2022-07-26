import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

const data = [
  {
    nickname: "theanh28entertainment",
    full_name: "Theanh28 Entertainment",
    avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1658721600&x-signature=ke3oxi%2FltFPtC%2Fx3vPaDhiv52NM%3D",
    tick: true,
  },
  {
    nickname: "tiin.vn",
    full_name: "Tiin.vn",
    avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1658721600&x-signature=49mo7DAcDPwM3nzdZ9avRNIpFPw%3D",
    tick: true,
  },
  {
    nickname: "vtv24news",
    full_name: "VTV24",
    avatar: "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1658718000&x-signature=oqx5DtWz0ivmxRp89uhBrS%2BuQhQ%3D",
    tick: true,
  },
  {
    nickname: "hat590",
    full_name: "HAT Snow",
    avatar: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/46105758ab0606521f48fb6e8e88f027.jpeg?x-expires=1658718000&x-signature=wB2Q83o7CTCR%2FpdbBYNRlfPIyUU%3D",
    tick: false,
  },
  {
    nickname: "duythamchannel",
    full_name: "Duy Thẩm",
    avatar: "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1665757201241090.jpeg?x-expires=1658718000&x-signature=zkGO8Sjhquwag4xDgMfM3guWbh4%3D",
    tick: false,
  },
]

const dataFoll = [data[0], data[1], data[2]]

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

      <div className={cx("accounts", "suggest-account")}>
        <h4 className={cx("title", "suggest-title")}>Suggested accounts</h4>
        {data.map((item, index) => {
          return <AccountItem className={cx("account-item")} key={index} data={item} />
        })}
      </div>

      <div className={cx("accounts", "following-account")}>
        <h4 className={cx("title", "following-title")}>Following accounts</h4>
        {dataFoll.map((item, index) => {
          return <AccountItem className={cx("account-item")} key={index} data={item} />
        })}
      </div>
    </aside>
  );
}

export default Sidebar;