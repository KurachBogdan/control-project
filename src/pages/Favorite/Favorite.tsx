import ArticleListItem from 'components/ArticleList/ArticleListItem'
import { Grid } from '@mui/material'
import { useAppSelector } from 'redux/hooks'
import articleArray from 'utils/articleArray'
import Container from '@mui/material/Container/Container'
import './Favorite.scss'

type Props = {}

type Article = {
    id: number
    category: string
    image: string
    title: string
    content: string
}

const Favorite = (props: Props) => {
    const likedArticleIds = useAppSelector((state) =>
        Object.keys(state.articlesLikeState)
            .filter((key) => state.articlesLikeState[+key])
            .map((key) => parseInt(key))
    )

    const likedArticles: Article[] = articleArray.filter((article) =>
        likedArticleIds.includes(article.id)
    )

    return (
        <Container maxWidth="lg" className="favorite_container">
            <Grid container className="article_list">
                {likedArticles.map(({ id, title, image, content }) => (
                    <Grid item md={2.8} key={id}>
                        {' '}
                        <ArticleListItem
                            id={id}
                            title={title}
                            content={content}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Favorite
