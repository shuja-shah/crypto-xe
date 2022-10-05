/* eslint-disable react/destructuring-assignment */
import propTypes from 'prop-types';

const Widget = (props) => (
  <artcile className="Widget">
    <div className="widgetDetails">
      <h3>{props.coin.name}</h3>
    </div>
    <img src={props.coin.iconUrl} alt={props.coin.name} width="12px" height="auto" />
  </artcile>
);
Widget.propTypes = {
  coin: propTypes.shape({
    name: propTypes.string.isRequired,
    symbol: propTypes.string,
    price: propTypes.string,
    iconUrl: propTypes.string.isRequired,
  }).isRequired,
};

export default Widget;
