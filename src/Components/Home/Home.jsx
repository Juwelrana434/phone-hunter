
import Banner from './Banner/Banner';
import Search from './../Search/Search';


const Home = () => {
    return (
        <div className="max-w-7xl mx-6">
           <Banner></Banner>
           <Search></Search>
        </div>
    );
};

export default Home;