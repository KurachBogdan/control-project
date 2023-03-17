import Button from '@mui/material/Button'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
    return (
        <div className="categories_container">
            <Button className="first_category">
                <p className="category_name">Fashion</p>
                <p className="value">(23)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="second_category">
                <p className="category_name">Style & clothes</p>
                <p className="value">(7)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="third_category">
                <p className="category_name">Minimalism</p>
                <p className="value">(16)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="fourth_category">
                <p className="category_name">Black & White</p>
                <p className="value">(5)</p>
            </Button>
            <div className="category_border"></div>
            <Button className="fifth_category">
                <p className="category_name">Modern clothes</p>
                <p className="value">(12)</p>
            </Button>
        </div>
    )
}

export default Categories
