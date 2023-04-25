import './Header.scss'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import { MenuItem } from 'common/types'

type Props = {
    links: MenuItem[]
    cartData: {
        totalCount: number
        totalPrice: number
    }
}

const Header = ({ links, cartData }: Props) => {
    return (
        <>
            <AppBar position="sticky" className="app-bar">
                <Toolbar>
                    <Logo />
                    <div style={{ lineHeight: 0.5 }}>
                        <p style={{ color: 'black', paddingRight: 30 }}>
                            Total count: {cartData.totalCount}
                        </p>
                        <p style={{ color: 'black', paddingRight: 30 }}>
                            Total price: {cartData.totalPrice}
                        </p>
                    </div>
                    <Menu links={links} />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
