import ArticleListItem from './ArticleListItem'
import './ArticleList.scss'
import { Grid } from '@mui/material'
import articleArray from 'utils/articleArray'

type Props = {}

const ArticleList = (props: Props) => {
    return (
        <Grid container className="article_list">
            {articleArray.map(({ id, category, image }) => (
                <Grid item md={5.7} key={id}>
                    {' '}
                    <ArticleListItem category={category} image={image} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ArticleList
