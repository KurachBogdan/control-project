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

// type State = {
//     likeCount: number
//     color: string
// }

// class ArticleListItem extends Component<Props> {
// state = {
//     likeCount: 0,
//     color: 'inherit',
// }

// likePost = () => {
//     this.setState((prevState: State) => {
//         return {
//             likeCount: prevState.likeCount + 1,
//         }
//     })
// }

// changeColor = () => {
//     this.setState((prevState: State) => ({
//         color: prevState.color === 'inherit' ? 'tomato' : 'tomato',
//     }))
// }

// combine = () => {
//     this.changeColor()
//     this.likePost()
// }

const ArticleListItem = ({ id, title, image, article }: Props) => {
    const isLiked = useAppSelector((state) => state.articlesLikeState[id])
    const dispatch = useAppDispatch()

    // render() {
    //     const { title, image, article } = this.props
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
                    onClick={() => isLiked ? dispatch (removeLike(id)) : dispatch(addLike(id))}
                    // onClick={this.combine}
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    {/* <FavoriteIcon className={this.state.color} /> */}
                </IconButton>
                {/* {this.state.likeCount} */}
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
