import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";

import Tippy from "@tippyjs/react/headless";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Wrapper as PopperWrapper } from "~/components/Popper";

import AccountItem from "~/components/AccountItem";

import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  }
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3])
  //   }, 0)
  // }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to="/" className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={attr => (
            <div className={cx("search-result")} tabIndex="-1" {...attr}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>
                  Accounts
                </h4>

                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input className={cx("input")} placeholder="Search accounts and videos" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Tippy>


        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>

          <Menu items={MENU_ITEMS}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div >
    </header >
  );
}

export default Header;