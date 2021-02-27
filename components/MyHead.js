import React from 'react'
import Head from 'next/head';

const MyHead = ({title, description, keywords}) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="lassfar" />
      <title>{title}</title>
    </Head>
  )
}

MyHead.defaultProps = {
  title: "Next.js, React.js",
  description: "Next.js crash course tutorial",
  keywords: "next.js, frontend, next apis"
}

export default MyHead
