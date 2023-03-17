import { Button, Grid } from '@mui/material'
import AboutTheAuthor from 'components/AboutTheAuthor/AboutTheAuthor'
import ArticleListItem from 'components/ArticleList/ArticleListItem'
import './HomeRight.scss'
import Categories from 'components/Categories/Categories'

type Props = {}

const HomeRight = (props: Props) => {
    return (
        <div className="home_right">
            <Button className="wide_btn">About the author</Button>
            <AboutTheAuthor />
            <Button className="wide_btn">Featured posts</Button>
            <div className="right_article_list_container">
                <Grid item md={5.7}>
                    {' '}
                    <ArticleListItem />
                </Grid>
                <Grid item md={5.7}>
                    {' '}
                    <ArticleListItem />
                </Grid>
                <Grid item md={5.7}>
                    {' '}
                    <ArticleListItem />
                </Grid>
            </div>
            <Button className="wide_btn">Categories</Button>
            <Categories />
        </div>
    )
}

export default HomeRight
