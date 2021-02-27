import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Home.module.css'
import { absoluteURL } from './../config/index';
import Layout from './../components/Layout';

export default function Home({ articles }) {
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Next.js Crash Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <ArticleList articles={articles} />

      </main>
    </Layout>
  )
}

// NEXT.JS API ROUTES
export const getStaticProps = async () => {
  const res = await fetch(`${absoluteURL}/api/articles`);
  const articles = await res.json();

  console.log("articles", articles);

  return { props: {articles} }
}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   console.log("articles", articles);

//   return { props: {articles} }
// }
