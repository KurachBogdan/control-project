import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
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
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'menu-item-active' : 'menu-item'
                        }
                        to={path}
                    >
                        {title}
                    </NavLink>
                </Button>
            ))}
        </div>
    )
}

export default Menu
