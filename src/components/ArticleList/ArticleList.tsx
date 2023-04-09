import ArticleListItem from './ArticleListItem'
import './ArticleList.scss'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Article } from 'utils/articleArray'

type Props = {
    articles: Article[]
    category?: string
}

const ArticleList: React.FC<Props> = ({ articles, category }) => {
    return (
        <Grid container className="article_list">
            {articles.length ? (
                articles.map(({ id, title, image, content }, index) => (
                    <Grid item md={5.7} key={`article_item_${index}`}>
                        <ArticleListItem
                            id={id}
                            title={title}
                            content={content}
                            image={image}
                        />
                    </Grid>
                ))
            ) : (
                <Typography
                    className="article_list_item_category"
                    component="div"
                >
                    No matches with category "{category}"
                </Typography>
            )}
        </Grid>
    )
}

export default ArticleList
