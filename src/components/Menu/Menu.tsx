import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { MenuItem } from 'common/types'
import './Menu.scss'

type Props = {
    links: MenuItem[]
}

const Menu = ({ links }: Props) => {
    return (
        <div className="menu_width">
            {links.map(({ path, title }, index) => (
                <Button className="nav" id={`link_${index}`} key={index}>
                    <Link to={path}>{title}</Link>
                </Button>
            ))}
        </div>
    )
}

export default Menu
