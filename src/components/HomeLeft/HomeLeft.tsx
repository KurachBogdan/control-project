import ArticleList from 'components/ArticleList/ArticleList'
import HomeArticle from 'components/HomeArticle/HomeArticle'
import './HomeLeft.scss'

type Props = {}

const HomeLeft = (props: Props) => {
    return (
        <div className="home_left">
            <HomeArticle
                category="Summer"
                title="One of Saturn`s largest rings may be newer than anyone"
                date="June 6, 2019"
                author="Rickie Baroch"
                commentsCount={4}
                comments="comments"
                article="Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem."
            />
            <ArticleList />
        </div>
    )
}

export default HomeLeft
