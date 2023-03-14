import { Button } from '@mui/material'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <div>
            <Button className='nav'>Home</Button>
            <Button className='nav'>Recipes</Button>
            <Button className='nav'>Article</Button>
            <Button className='nav'>Contact</Button>
            <Button className='nav'>Purchase</Button>
        </div>
    )
}

export default Menu
