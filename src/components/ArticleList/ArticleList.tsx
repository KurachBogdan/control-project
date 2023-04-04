import ArticleListItem from './ArticleListItem'
import './ArticleList.scss'
import { Grid } from '@mui/material'
import articleArray from 'utils/articleArray'
import { useState } from 'react'

type Props = {}

const ArticleList = (props: Props) => {
    const [filterData, setData] = useState(articleArray)

    const chooseThisCategory = (category: string) => {
        const newDataSet = filterData.filter((e) => e.category === category)
        setData(newDataSet)
    }

    return (
        <Grid container className="article_list">
            {filterData.map(({ id, title, image, article }) => (
                <Grid item md={5.7} key={id}>
                    {' '}
                    <ArticleListItem
                        id={id}
                        title={title}
                        article={article}
                        image={image}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default ArticleList
