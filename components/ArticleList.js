import React from 'react'
import ArticleItem from './ArticleItem'
import styles from '../styles/Home.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => <ArticleItem article={article} /> )}
    </div>
  )
}

export default ArticleList
