import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { absoluteURL } from './../../config/index';
import Layout from '../../components/Layout';

const Article = ({article}) => {
  //** 1st method to get params
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <Layout className={styles.container}>
      <div className={styles.card}>
        <h1>Article {article.id} :</h1>
        <p>{article.title}</p>
        <p>{article.body}</p>
        <Link href="/">
          &#9754; back
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticProps = async (ctx) => {
  const res = await fetch(`${absoluteURL}/api/articles/${ctx.params.id}`);
  const article = await res.json();
  console.log("article", article);

  return { props: {article} }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${absoluteURL}/api/articles`);
  const articles = await res.json();
  const paths = articles.map((article) => ({ params: {id: article.id.toString()} }));

  return {
    paths,
    fallback: false // returns 404 page if not exits
  }
}

// export const getStaticProps = async (ctx) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`);
//   const article = await res.json();
//   console.log("article", article);

//   return { props: {article} }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const paths = articles.map((article) => ({ params: {id: article.id.toString()} }));

//   return {
//     paths,
//     fallback: false // returns 404 page if not exits
//   }
// }

export default Article
