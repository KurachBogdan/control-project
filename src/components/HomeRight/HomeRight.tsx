import { Button, Grid } from '@mui/material'
import AboutTheAuthor from 'components/AboutTheAuthor/AboutTheAuthor'
import './HomeRight.scss'
import Categories from 'components/Categories/Categories'
import anotherArticleArray from 'utils/anotherArticleArray'
import ArticleListItemRight from 'components/ArticleList/ArticleListItemRight'

type Props = {}

const HomeRight = (props: Props) => {
    return (
        <div className="home_right">
            <Button className="wide_btn">Categories</Button>
            <Categories />
            <Button
                className="wide_btn"
            >
                About the author
            </Button>
            <AboutTheAuthor />
            <Button className="wide_btn">Featured posts</Button>
            <div className="right_article_list_container">
                {anotherArticleArray.map(({ id, title, image, content }) => (
                    <Grid item md={5.7} key={id}>
                        {' '}
                        <ArticleListItemRight
                            title={title}
                            image={image}
                            content={content}
                        />
                    </Grid>
                ))}
            </div>
        </div>
    )
}

export default HomeRight
