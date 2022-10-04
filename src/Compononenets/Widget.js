/* eslint-disable react/destructuring-assignment */
import propTypes from 'prop-types';

const Widget = (props) => (
  <artcile className="Widget">
    <div className="widgetDetails">
      <h3>{props.coin.name}</h3>
      <p>{props.coin.symbol}</p>
      <p>{props.coin.price}</p>
    </div>
    <img src={props.coin.iconUrl} alt={props.coin.name} width="12px" height="auto" />
  </artcile>
);
Widget.propTypes = {
  coin: propTypes.shape({
    name: propTypes.string.isRequired,
    symbol: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    iconUrl: propTypes.string.isRequired,
  }).isRequired,
};

export default Widget;
