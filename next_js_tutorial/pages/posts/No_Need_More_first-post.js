import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <>
        <Layout>
            <Head>
                <title>first post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {/* Linkを使うことでクライアントサイドで遷移できる。<a>タグを使うとページ遷移してしまう */}
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
        </>
    )
}