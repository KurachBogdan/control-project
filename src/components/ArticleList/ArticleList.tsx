import ArticleListItem from './ArticleListItem'
import './ArticleList.scss'
import { Grid } from '@mui/material'

type Props = {}

const ArticleList = (props: Props) => {
    return (
        <Grid container className="article_list">
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
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem />
            </Grid>
        </Grid>
    )
}

export default ArticleList
