import Reviews from 'components/Reviews/Reviews'
import Container from '@mui/material/Container/Container'
import './CommentPage.scss'
import HomeArticle from 'components/HomeArticle/HomeArticle'
import React from 'react'
import commentPageArticleArray from 'utils/commentPageArticleArray'
import ScrollToTopOnMount from 'utils/scrollToTopOnMount'

type Props = {}

const CommentPage = (props: Props) => {
    return (
        <React.Fragment>
            <ScrollToTopOnMount />
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
        </React.Fragment>
    )
}

export default CommentPage
