import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './SpecificCategory.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import articleArray, { Article } from 'utils/articleArray'
import ScrollToTopOnMount from 'utils/scrollToTopOnMount'
import React from 'react'
import Container from '@mui/material/Container/Container'

type Props = {
    title: string
    image: string
    contentExtended: string
}

const SpecificCategory = ({ title, image, contentExtended }: Props) => {
    const [currentArticle, setArticles] = useState<Article[] | []>([])
    const navigate = useNavigate()
    const location = useLocation()
    const onNavigate = (route?: string) => {
        navigate(route ? `/${route.toLowerCase()}` : '/')
    }

    const getCurrentArticle = () => {
        const setOfArticles = new Set(articleArray.map((article) => article.id))
        const currentArticle: Article[] = []
        Array.from(setOfArticles).forEach((id) => {
            const f = articleArray.filter((article) => article.id === id)
            currentArticle.push(articleArray.id)
        })
        setArticles(currentArticle)
    }

    const isArticleSelected = (id: number) => {
        const pathname = location.pathname.slice(1)
        return id === id
    }

    useEffect(() => {
        getCurrentArticle()
    }, [])

    return (
        <React.Fragment>
            <ScrollToTopOnMount />
            <Container maxWidth="lg" className="article_with_comments">
                <Card variant="outlined" className="card">
                    <CardMedia sx={{ height: 280 }} image={image} />
                    <CardContent>
                        <Typography
                            className="article_list_item_category"
                            gutterBottom
                            component="div"
                        >
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {contentExtended}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {location.pathname !== '/' && (
                            <Button onClick={() => onNavigate()} size="medium">
                                <Link className="learn_more" to="/*">
                                    <p>..to home</p>
                                </Link>
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default SpecificCategory
