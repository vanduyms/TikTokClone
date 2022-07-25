import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCircleQuestion,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMessage,
  faPaperPlane,
  faUser,
  faVideoCamera
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import Search from "../Search";

import config from "~/config";

import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

import Image from "~/components/Images";
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Vietnamese",
        },
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
]

function Header() {
  const currentUser = false;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  }

  const USER_MENU = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@vvanduyms",
    },
    {
      icon: <FontAwesomeIcon icon={faTiktok} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faVideoCamera} />,
      title: "LIVE Studios",
      to: "/live",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Logout",
      separate: true,
    }
  ]

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <div className={cx("current-user")}>
              <Tippy content="Upload videos" placement="bottom">
                <button className={cx("action-btn")} >
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>

              <Tippy content="Messages" placement="bottom">
                <button className={cx("action-btn")} >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>

              <Tippy content="Inbox" placement="bottom">
                <button className={cx("action-btn")} >
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </div>) :
            (
              <>
                <Button text>Upload</Button>
                <Button primary>Login</Button>
              </>
            )
          }

          <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange} >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://www.sports-king.com/images/nicknames/lionel-messi.jpg"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div >
    </header >
  );
}

export default Header;