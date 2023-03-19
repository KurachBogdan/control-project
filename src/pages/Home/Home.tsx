import Container from '@mui/material/Container/Container'
import HomeLeft from 'components/HomeLeft/HomeLeft'
import HomeRight from 'components/HomeRight/HomeRight'
import Vehicle from 'components/Vehicle/Vehicle'
import './Home.scss'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Vehicle />
            {/* There should be a slider here */}
            <Container maxWidth="xl" className="home_container">
                <HomeLeft />
                <HomeRight />
            </Container>
        </>
    )
}

export default Home
