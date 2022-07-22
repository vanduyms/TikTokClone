import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames";


function Image({ src, alt, className, ...props }, ref) {
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
}

export default forwardRef(Image);