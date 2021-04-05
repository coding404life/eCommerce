import Slider from './Parts/Slider';
import Cards from './Parts/Cards';
import { Box } from '@material-ui/core';
import NewsLetter from './Parts/NewsLetter';

const Home = () => {
    return (
        <>
            <Slider />
            <Box my={4}>
                <Cards />
            </Box>
            <NewsLetter />
        </>
    )
}

export default Home
