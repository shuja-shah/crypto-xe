import { useSelector } from 'react-redux';

const Details = () => {
  const coinDetails = useSelector((state) => state.details.details.coin);
  const loading = useSelector((state) => state.details.loading);
  const price = parseInt(coinDetails.price, 10).toFixed(4).toString();
  const {
    price: _,
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
