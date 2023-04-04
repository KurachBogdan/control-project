type Props = {}

const ThisCategory = (props: Props) => {
    return <div>ThisCategory</div>
}

export default ThisCategory

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
//     return articleArray.filter((id) => id.category === category)
// }

// const ThisCategory = () => {
//     const { category } = useParams<RouteParams>()

//     const filteredArticles = filterArticlesByCategory('fashion')

//     return (
//         <div>
//             {filteredArticles.map((item) => (
//                 <div key={item.id}>
//                     <ArticleListItem
//                         id={id}
//                         title={title}
//                         article={article}
//                         image={image}
//                     />
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default ThisCategory
