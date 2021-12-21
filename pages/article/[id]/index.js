import { useRouter } from 'next/router'
import Link from 'next/link'

const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query;  //article id

    return <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/" >Go back</Link>
    </div>
}

// Server-Side-Rendering ---------------------------------------

// export const getServerSideProps = async (context) => {  //fetch data on each request !
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }


// Static Generation  -----------------------------------------------

export const getStaticProps = async (context) => {   
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();

    let paths = data.map(article => {
        return {
            params: {
                id: article.id.toString()
            }
        };
    });

    return {
        paths,
        fallback: false
    }
}

export default article