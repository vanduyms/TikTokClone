// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from "./Home.module.scss";

import ItemContainer from '~/components/ItemContainer';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <ItemContainer />
      <ItemContainer />
      <ItemContainer />
    </div>
  );
}

export default Home;