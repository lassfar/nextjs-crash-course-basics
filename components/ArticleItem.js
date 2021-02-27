import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const ArticleItem = ({ article }) => {
  return (
    <div className={styles.card}>
      <Link href="/article/[id]" as={`/article/${article.id}`} style={{cursor: 'pointer'}}>
        <h3>{article.title} &rarr;</h3>
      </Link>
      <p>{article.body}</p>
    </div>
  )
}

export default ArticleItem
