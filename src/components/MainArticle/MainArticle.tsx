import './MainArticle.scss'

type Props = { category: string }

const MainArticle = ({ category }: Props) => {
    return (
        <div>
            <div className="main_article">
                <div className="main_article_background"></div>
                <div className="main_article_container">
                    <p className="main_article_category">{category}</p>
                    <p className="main_article_title">
                        One of Saturn`s largest rings may be newer than anyone
                    </p>
                    <p className="date_row">
                        <span className="by">June 6, 2019</span>
                        <span className="by_color">By </span>
                        <span className="rickie_baroch">Rickie Baroch</span>
                    </p>
                    <article className="article_main">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                    </article>
                </div>
            </div>
        </div>
    )
}

export default MainArticle
