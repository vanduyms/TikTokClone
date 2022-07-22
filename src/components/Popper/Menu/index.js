import Tippy from "@tippyjs/react/headless";

import classNames from "classnames";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />)
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={attr => (
        <div className={cx("menu-list")} tabIndex="-1" {...attr}>
          <PopperWrapper>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;