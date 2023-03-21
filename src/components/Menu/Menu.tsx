import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Menu.scss'

type Props = {
    home: string
    recipes: string
    categories: string
    favorite: string
    featured_posts: string
}

const Menu = ({
    home,
    recipes,
    categories,
    favorite,
    featured_posts,
}: Props) => {
    return (
        <div className="menu_width">
            <Button className="nav">
                <Link to={home}>{home}</Link>
            </Button>
            <Button className="nav">
                <Link to={recipes}>{recipes}</Link>
            </Button>
            <Button className="nav">
                <Link to={categories}>{categories}</Link>
            </Button>
            <Button className="nav">
                <Link to={favorite}>{favorite}</Link>
            </Button>
            <Button className="nav">
                <Link to={featured_posts}>{featured_posts}</Link>
            </Button>
        </div>
    )
}

export default Menu
