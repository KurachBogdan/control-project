import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import './ArticleListItem.scss'

type Props = {
    title: string
    image: string
    content: string
}
const ArticleListItemRight = ({ title, image, content }: Props) => {
    return (
        <Card variant="outlined" className="card">
            <CardMedia sx={{ height: 180 }} image={image} />
            <CardContent>
                <Typography
                    className="article_list_item_category"
                    gutterBottom
                    component="div"
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    )
}

export default ArticleListItemRight
