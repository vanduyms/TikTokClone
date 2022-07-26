import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  to,
  href,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button;