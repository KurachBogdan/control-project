import './Header.scss'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { MenuItem } from 'common/types'

type Props = {
    links: MenuItem[]
}

const Header = ({links}: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Logo />
                    <Menu links={links} />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header