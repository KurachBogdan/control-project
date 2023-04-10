import React, { useState, useEffect } from 'react'
import ArticleList from 'components/ArticleList/ArticleList'
import HomeArticle from 'components/HomeArticle/HomeArticle'
import './HomeLeft.scss'
import articleArray, { Article } from 'utils/articleArray'
import { Routes, Route, useLocation } from 'react-router-dom'

type Props = {}

type CurrentViewProps = {
    articles: Article[]
}

type AdditionalProps = {
    category: string
}

const DefaultHomeView: React.FC<CurrentViewProps> = ({ articles }) => {
    return (
        <div className="home_left">
            <HomeArticle
                category="Summer"
                title="One of Saturn`s largest rings may be newer than anyone"
                date="June 6, 2019"
                author="Rickie Baroch"
                commentsCount={4}
                comments="comments"
                content="Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem sed
                ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem."
            />
            <ArticleList articles={articles} />
        </div>
    )
}

const SortedHomeView: React.FC<CurrentViewProps & AdditionalProps> = ({
    articles,
    category,
}) => {
    return (
        <div className="home_left">
            <ArticleList articles={articles} category={category} />
        </div>
    )
}

const HomeLeft = (props: Props) => {
    const location = useLocation()
    const [articles, setArticles] = useState<Article[] | []>([])

    const setCategoryItems = () => {
        const pathname = location.pathname.slice(1)
        if (!pathname) {
            setArticles(articleArray)
            return
        }
        const filteredArr = articleArray.filter(
            (article) =>
                article.category.toLowerCase() === pathname.toLowerCase()
        )
        setArticles(filteredArr)
    }

    useEffect(() => {
        setCategoryItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    return (
        <Routes>
            <Route
                path="/"
                element={<DefaultHomeView articles={articleArray} />}
            />
            <Route
                path=":categoryId"
                element={
                    <SortedHomeView
                        articles={articles}
                        category={location.pathname.slice(1)}
                    />
                }
            />
        </Routes>
    )
}

export default HomeLeft
