import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './ArticleListItem.scss'
import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Component } from 'react'

type Props = {
    category: string
    image: string
    article: string
}

class ArticleListItemRight extends Component<Props> {
    render() {
        const { category, image, article } = this.props
        return (
            <Card variant="outlined" className="card">
                <CardMedia sx={{ height: 180 }} image={image} />
                <CardContent>
                    <Typography
                        className="article_list_item_category"
                        gutterBottom
                        component="div"
                    >
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className="icon_button"
                        aria-label="add to favorites"
                    >
                        <FavoriteIcon />
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
}

export default ArticleListItemRight
