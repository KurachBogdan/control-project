import ArticleList from 'components/ArticleList/ArticleList'
import HomeArticle from 'components/HomeArticle/HomeArticle'
import './HomeLeft.scss'

type Props = {}

const HomeLeft = (props: Props) => {
    return (
        <div className="home_left">
            <HomeArticle category="Summer" />
            <ArticleList />
        </div>
    )
}

export default HomeLeft
