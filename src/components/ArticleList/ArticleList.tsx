import ArticleListItem from './ArticleListItem'
import './ArticleList.scss'
import { Grid } from '@mui/material'

type Props = {}

const ArticleList = (props: Props) => {
    return (
        <Grid container className="article_list">
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Tourism" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Sport" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Fashion" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Clothes" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Clothes" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Fashion" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Autumn" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Clothes" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Summer" />
            </Grid>
            <Grid item md={5.7}>
                {' '}
                <ArticleListItem category="Summer" />
            </Grid>
        </Grid>
    )
}

export default ArticleList
