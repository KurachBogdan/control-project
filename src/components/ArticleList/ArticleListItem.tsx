import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './ArticleListItem.scss'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    id: number
    title: string
    image: string
    article: string
}

const ArticleListItem = ({ id, title, image, article }: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()

    return (
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
                    {article}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className="icon_button {this.state.color}"
                    aria-label="add to favorites"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <Button
                    onClick={() => alert('Working')}
                    className="learn_more"
                    size="medium"
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default ArticleListItem
