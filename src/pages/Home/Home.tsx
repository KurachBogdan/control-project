import Container from '@mui/material/Container/Container'
import HomeLeft from 'components/HomeLeft/HomeLeft'
import HomeRight from 'components/HomeRight/HomeRight'
import NiceSwiper from 'components/Swiper/NiceSwiper'
import Vehicle from 'components/Vehicle/Vehicle'
import './Home.scss'
import ScrollToTopOnMount from 'utils/scrollToTopOnMount'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <ScrollToTopOnMount />
            <Vehicle />
            <NiceSwiper />
            <Container maxWidth="lg" className="home_container">
                <HomeLeft />
                <HomeRight />
            </Container>
        </>
    )
}

export default Home
