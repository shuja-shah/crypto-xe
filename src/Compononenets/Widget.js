/* eslint-disable react/destructuring-assignment */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { sendDetails } from '../Redux/details/details';

const Widget = (props) => {
  Widget.propTypes = {
    coin: propTypes.shape({
      name: propTypes.string.isRequired,
      symbol: propTypes.string,
      price: propTypes.string,
      iconUrl: propTypes.string.isRequired,
    }).isRequired,

  };
  const dispatch = useDispatch();

  const handleDetails = () => {
    dispatch(sendDetails(props));
  };

  return (
    <artcile className="Widget">
      <Link to="/details" className="btn" onClick={handleDetails}>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
      </Link>
      <div className="widgetDetails">
        <h3>{props.coin.name}</h3>
      </div>
      <img src={props.coin.iconUrl} alt={props.coin.name} width="12px" height="auto" />
    </artcile>
  );
};

export default Widget;
