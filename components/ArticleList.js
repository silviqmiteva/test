import ArticleItem from "./ArticleItem";
import styles from "../styles/Layout.module.css"

const ArticleList = ({ articles }) => {
    return (
        < div className={styles.grid}>
            {articles.map((article, i) => (
                <ArticleItem key={i} article={article}></ArticleItem>
            ))}
        </div >
    )
}

export default ArticleList;