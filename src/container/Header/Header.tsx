import './Header.scss'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <Logo />
                    <Menu />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
