import Button from '@mui/material/Button'
import './Categories.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import articleArray from 'utils/articleArray'
import { useEffect, useState } from 'react'

type Props = {}

type Category = {
    name: string
    amount: number
}

const Categories = (props: Props) => {
    const [categories, setCategories] = useState<Category[] | []>([])
    const navigate = useNavigate()
    const location = useLocation()
    const onNavigate = (route?: string) => {
        navigate(route ? `/${route.toLowerCase()}` : '/')
    }

    const getListOfCategories = () => {
        const setOfCategories = new Set(
            articleArray.map((article) => article.category)
        )
        const categories: Category[] = []
        Array.from(setOfCategories).forEach((category) => {
            const f = articleArray.filter(
                (article) =>
                    article.category.toLowerCase() === category.toLowerCase()
            )
            categories.push({ name: category, amount: f.length })
        })
        setCategories(categories)
    }

    const isCategorySelected = (category: string) => {
        const pathname = location.pathname.slice(1)
        return category.toLowerCase() === pathname
    }

    useEffect(() => {
        getListOfCategories()
    }, [])

    return (
        <div className="categories_container">
            {location.pathname !== '/' && (
                <Button className="first_category" onClick={() => onNavigate()}>
                    <p>Show all categories</p>
                </Button>
            )}
            {categories.map(({ name, amount }, index) => (
                <Button
                    className="first_category"
                    key={`category_${index}`}
                    onClick={() => onNavigate(name)}
                    disabled={isCategorySelected(name)}
                >
                    <p>{name}</p>
                    <p>({amount})</p>
                </Button>
            ))}
        </div>
    )
}

export default Categories
