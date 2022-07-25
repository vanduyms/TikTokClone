import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import classNames from "classnames";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Header from "./Header";

import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

const defaultFn = () => { };

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return <MenuItem
        key={index}
        data={item}
        onClick={() => {
          if (isParent) {
            setHistory((prev) => [...prev, item.children])
          } else {
            onChange(item)
          }
        }}
      />
    })
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      offset={[12, 8]}
      delay={[0, 700]}
      render={attr => (
        <div className={cx("menu-list")} tabIndex="-1" {...attr}>
          <PopperWrapper>
            {history.length > 1 && <Header title="Languague" onBack={() => {
              setHistory(prev => prev.slice(0, prev.length - 1))
            }} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => { setHistory(prev => prev.slice(0, 1)) }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;