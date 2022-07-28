import classNames from "classnames/bind";
import styles from "./ItemContainer.module.scss";

import Image from "~/components/Images";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faMusic, faPlay, faShare, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function ItemContainer() {
  return (
    <div className={cx("wrapper")}>
      <Image src="../../assets/images/sidebar_account/kienreview.jpg" alt="avatar" className={cx("avatar")} />
      <div className={cx("content")}>
        <div className={cx("text-info")}>
          <div className={cx("author-info")}>
            <h3 className={cx("author-name")}>Tuan Anh</h3>
            <h4 className={cx("author-id")}>tuananh</h4>
          </div>

          <div className={cx("video-desc")}>
            Tổng hợp các vị khách không mời mà đến" xin lỗi nhà hàng chúng tôi tiếp đón không tốt lắm! Mèo Saddd🐈
          </div>
          <div className={cx("video-music")}>
            <a href="music" className={cx("link-music")}>
              <FontAwesomeIcon icon={faMusic} />
              nhạc nền - Tuấn Anh DNT
            </a>
          </div>
        </div>

        <div className={cx("video-wrapper")}>
          <div className={cx("video-container")}>
            <Image className={cx("video")} src="~/assets/images/sidebar_account/kienreview.jpg" alt="Video" />
            <div className={cx("video-button")}>
              <FontAwesomeIcon icon={faPlay} className={cx("play-btn", "video-btn")} />
              <FontAwesomeIcon icon={faVolumeMute} className={cx("mute-btn", "video-btn")} />
            </div>
          </div>

          <div className={cx("action-container")}>
            <button className={cx("button-action")}>
              <FontAwesomeIcon className={cx("icon")} icon={faHeart} />
              <strong>527.4K</strong>
            </button>

            <button className={cx("button-action")}>
              <FontAwesomeIcon className={cx("icon")} icon={faComment} />
              <strong>527.4K</strong>
            </button>

            <button className={cx("button-action")}>
              <FontAwesomeIcon className={cx("icon")} icon={faShare} />
              <strong>527.4K</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;