import HeadlessTippy from "@tippyjs/react/headless";

import { useEffect, useState, useRef } from "react";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";

import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { useDebounce } from "~/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

import * as searchServices from "~/apiServices/searchServices";

const cx = classNames.bind(styles);


function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true)

      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    }

    fetchApi();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  }

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={attr => (
        <div className={cx("search-result")} tabIndex="-1" {...attr}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>
              Accounts
            </h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}

          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          className={cx("input")}
          placeholder="Search accounts and videos"
          onChange={e => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loading &&
          <button
            className={cx("clear")}
            onClick={
              () => {
                setSearchValue("");
                inputRef.current.focus();
                setSearchResult([]);
              }
            }
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        }
        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;