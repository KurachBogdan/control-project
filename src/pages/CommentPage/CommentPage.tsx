import Reviews from 'components/Reviews/Reviews'
import Container from '@mui/material/Container/Container'
import './CommentPage.scss'
import ReviewsForm from 'components/Reviews/ReviewsForm'
import HomeArticle from 'components/HomeArticle/HomeArticle'
import React from 'react'
import commentPageArticleArray from 'utils/commentPageArticleArray'

type Props = {}

const CommentPage = (props: Props) => {
    return (
        <React.Fragment>
            <Container maxWidth="lg" className="article_with_comments">
                {commentPageArticleArray.map(
                    ({ category, title, date, author, content, id }) => (
                        <HomeArticle
                            category={category}
                            title={title}
                            date={date}
                            author={author}
                            content={content}
                            key={id}
                        />
                    )
                )}
                <Reviews />
            </Container>
            <Container>
                <ReviewsForm />
            </Container>
        </React.Fragment>
    )
}

export default CommentPage
