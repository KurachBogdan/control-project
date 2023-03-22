import Button from '@mui/material/Button'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
    return (
        <div className="categories_container">
            <Button className="first_category">
                <p>Fashion</p>
                <p>(23)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="second_category">
                <p>Autumn</p>
                <p>(7)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="third_category">
                <p>Summer</p>
                <p>(16)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="fourth_category">
                <p>Tourism</p>
                <p>(5)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="fifth_category">
                <p>Sport</p>
                <p>(12)</p>
            </Button>
        </div>
    )
}

export default Categories
