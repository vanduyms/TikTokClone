import classNames from "classnames/bind";
import AccountItem from "../AccountItem";
import styles from "./UserContainer.module.scss";

const cx = classNames.bind(styles);

function UserContainer({ title, data }) {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>{title}</h4>
      {
        data.map((item, index) => {
          return (<AccountItem key={index} data={item} />);
        })
      }

      <div className={cx("seeAll-btn")}>
        <a href="/seeAll" className={cx("all-user")}>See all</a>
      </div>
    </div>
  );
}

export default UserContainer;