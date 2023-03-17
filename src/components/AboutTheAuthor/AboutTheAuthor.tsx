import './AboutTheAuthor.scss'
import { Button } from '@mui/material'

type Props = {}

const AboutTheAuthor = (props: Props) => {
    return (
        <div className="about_the_author">
            <div className="about_the_author_bg"></div>
            <div className="about_the_author_article_container">
                <h1 className="author-name">Kate Willems</h1>
                <p className="author-speciality">Food & cooking bloger</p>
                <p className="about_the_author_content">
                    Hi, I'm Sonia. Cooking is the way I express my creative side
                    to the world. Welcome to my Kitchen Corner on…
                </p>
                <div className="about_the_author_border-post"></div>
                <Button className="about_the_author_btn">Continue reading</Button>
            </div>
        </div>
    )
}

export default AboutTheAuthor
