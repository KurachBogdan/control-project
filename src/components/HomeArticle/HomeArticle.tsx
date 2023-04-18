import Button from '@mui/material/Button/Button'
import { Link } from 'react-router-dom'
import './HomeArticle.scss'

type Props = {
    category: string
    title: string
    date: string
    author: string
    commentsCount?: number
    comments?: string
    content: string
}

const HomeArticle = ({
    category,
    title,
    date,
    author,
    commentsCount,
    comments,
    content,
}: Props) => {
    return (
        <div className="main_article">
            <div className="main_article_background"></div>
            <div className="main_article_container">
                {/* <p className="main_article_category">{category}</p> */}
                <p className="main_article_title">{title}</p>
                <p className="date_row">
                    <span className="by">{date}</span>
                    <span className="by_color">By </span>
                    <span className="rickie_baroch">{author}</span>
                    <Button className="main_article_button">
                        <Link className="comment_link" to="/comment_page">
                            {commentsCount} {comments}
                        </Link>
                    </Button>
                </p>
                <article className="article_main">{content}</article>
            </div>
        </div>
    )
}

export default HomeArticle
