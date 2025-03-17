import Work from './partials/Work';
import Intro from './partials/Intro';
import Navbar from './partials/Navbar';
import Portfolio from './partials/Portfolio';
import Contact from './partials/Contact';

const Home = () => {

    return (
        <>
            <Navbar />
            <Intro />
            <Portfolio />
            <Work />
            <Contact />
        </>
    )
}

export default Home;