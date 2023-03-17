import { Button } from '@mui/material'
import AboutTheAuthor from 'components/AboutTheAuthor/AboutTheAuthor'
import './HomeRight.scss'

type Props = {}

const HomeRight = (props: Props) => {
    return (
        <div className="home_right">
            <Button className="wide_btn">About the author</Button>
            <AboutTheAuthor />
            
        </div>
    )
}

export default HomeRight
