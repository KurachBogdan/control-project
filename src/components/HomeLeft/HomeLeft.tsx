import ArticleList from 'components/ArticleList/ArticleList'
import HomeArticle from 'components/HomeArticle/HomeArticle'
import './HomeLeft'

type Props = {}

const HomeLeft = (props: Props) => {
    return (
        <div className='home_left'>
            <HomeArticle />
            <ArticleList />
        </div>
    )
}

export default HomeLeft
