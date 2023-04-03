import MainArticle from 'components/MainArticle/MainArticle'
import Reviews from 'components/Reviews/Reviews'
import Container from '@mui/material/Container/Container'
import './Categories.scss'
import ReviewsForm from 'components/Reviews/ReviewsForm'

type Props = {}

const Categories = (props: Props) => {
    return (
        <>
            <Container maxWidth="lg" className="article_with_comments">
                <MainArticle category="Summer" />
                <Reviews />
            </Container>
            <Container>
                <ReviewsForm />
            </Container>
        </>
    )
}

export default Categories

// import ArticleListItem from 'components/ArticleList/ArticleListItem'
// import { useParams } from 'react-router-dom'
// import articleArray from 'utils/articleArray'

// type RouteParams = {
//     category: string
// }

// type Article = {
//     id: number
//     category: string
//     image: string
//     title: string
//     article: string
// }

// const filterArticlesByCategory = (category: string): Article[] => {
//     return articleArray.filter((item) => item.category === category)
// }

// const Categories = () => {
//     const { category } = useParams<RouteParams>()

//     const filteredArticles = filterArticlesByCategory(category)

//     return (
//         <div>
//             {filteredArticles.map((item) => (
//                 <div key={item.id}>
//                     <ArticleListItem />
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Categories
