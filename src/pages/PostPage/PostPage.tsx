import { useParams } from 'react-router-dom'
import articleArray from 'utils/articleArray'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import './PostPage.scss'
import ScrollToTopOnMount from 'utils/scrollToTopOnMount'
import React from 'react'
import Container from '@mui/material/Container/Container'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const PostPage = () => {
    const { id } = useParams<{ id: string }>()
    const article = articleArray.find((a) => a.id === parseInt(id))

    if (!article) {
        return <div>Post not found</div>
    }

    return (
        <React.Fragment>
            <ScrollToTopOnMount />
            <Container maxWidth="lg" className="article_with_comments">
                <Card variant="outlined" className="card">
                    <CardMedia sx={{ height: 280 }} image={article.image} />
                    <CardContent>
                        <Typography
                            className="article_list_item_category"
                            gutterBottom
                            component="div"
                        >
                            {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.contentExtended}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {location.pathname !== '/*' && (
                            <Button size="medium">
                                <Link className="learn_more" to="/*">
                                    <p>..to home</p>
                                </Link>
                            </Button>
                        )}
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default PostPage
