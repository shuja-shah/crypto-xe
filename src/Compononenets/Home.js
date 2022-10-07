import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from '../Redux/coins/coins';
import Widget from './Widget';

const Home = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coins);
  const loading = useSelector((state) => state.coins.loading);
  const error = useSelector((state) => state.coins.error);

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const filteredCoins = coins.filter((coin) => coin.price > 100);
  const topTenCoins = coins.filter((coin) => coin.rank < 11);
  const RisingStars = coins.filter((coin) => coin.rank > 10 && coin.rank < 21);
  const topGainers = coins.filter((coin) => coin.marketCap >= 1000000000);
  const finalTopGainer = topGainers.slice(0, 4);

  return (
    <>
      <section className="Intro">
        <h1>Crypto Exchange</h1>
        <p>Get the latest crypto prices and Details of over 50 Coins!</p>
        <form className="form">
          <select name="category" id="category">
            <option value="all">All</option>
            <option value="topTenCoins">Top 10 Coins</option>
            <option value="RisingStars">Rising Stars</option>
            <option value="finalTopGainer">Top Gainers</option>
          </select>
          <a className="lesGo btn" href="coins">Go</a>
        </form>
      </section>
      <h2 className="title">Most Popular Coins</h2>
      <section className="MostPopular coinCatogory">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {filteredCoins.map((coin) => (
          <Widget key={coin.id} coin={coin} />
        ))}

      </section>
      <h2 className="title">Top 10 Coins</h2>
      <section className="TopTen coinCatogory">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {topTenCoins.map((coin) => (
          <Widget key={coin.id} coin={coin} />
        ))}
      </section>
      <h2 className="title">Rising Stars</h2>
      <section className="RisingStars coinCatogory">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {RisingStars.map((coin) => (
          <Widget key={coin.id} coin={coin} />
        ))}
      </section>
      <h2 className="title">Top Gainers</h2>
      <section className="TopGainers coinCatogory">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {finalTopGainer.map((coin) => (
          <Widget key={coin.id} coin={coin} />
        ))}
      </section>
      <h2 className="title">All Coins</h2>
      <section className="AllCoins coinCatogory">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {coins.map((coin) => (
          <Widget key={coin.id} coin={coin} />
        ))}
      </section>
    </>
  );
};

export default Home;
