import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";

import PropTypes from 'prop-types';


const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(images.noImage);
  }

  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
})

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.node,
}

export default Image;