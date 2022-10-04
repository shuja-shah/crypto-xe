import { getCoins } from "../Redux/coins/coins";

const Home = () => {
    const dispatch = useDispatch();
    const coins = useSelector((state) => state.coins.coins);
    const loading = useSelector((state) => state.coins.loading);
    const error = useSelector((state) => state.coins.error);

    useEffect(() => {
        dispatch(getCoins());
    }, [dispatch]);

    return (
        <div>
            <h1>Home</h1>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {coins.map((coin) => (
                <div key={coin.id}>
                    <h2>{coin.name}</h2>
                    <p>{coin.symbol}</p>
                    <p>{coin.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;