import Head from 'next/head'
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Welcome to next FROM MEEE</title>
        <meta name='keywords' content='web development, programming'></meta>
      </Head>
      <h1>News</h1>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}