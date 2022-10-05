import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = () => {
  const coinDetails = useSelector((state) => state.details.details.coin);
  const loading = useSelector((state) => state.details.loading);
  const price = parseInt(coinDetails.price, 10).toFixed(4).toString();
  const {
    name: __,
    sparkline: ___,
    iconUrl: ____,
    color: _____,
    uuid: ______,
    coinrankingUrl: _______,
    ...rest
  } = coinDetails;
  return (
    <>
      <Link to="./" className="btn">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z" /></svg>
      </Link>
      <section className="Details">
        {loading && <p>Loading...</p>}
        <img className="icon" src={coinDetails.iconUrl} alt={coinDetails.name} />
        <div>
          <h1>{coinDetails.name}</h1>
          <p>{price}</p>
        </div>
      </section>

      <ul className="detailsList">
        {Object.entries(rest).map(([key, value]) => (
          <li key={key}>
            <span className="entry">
              {key}
              {' '}
              :
            </span>
            {'    '}
            {' '}
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Details;
