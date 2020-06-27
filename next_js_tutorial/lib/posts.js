import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // /posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, '')

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents)

    // データを id と合わせる
    return {
      id,
      ...matterResult.data
    }
  })
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
  
    // 以下のような配列を返します:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents)
  
      // マークダウンを HTML 文字列に変換するために remark を使う
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // データを id と組み合わせる
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }




// 外部 API を取得する あるいは データベースに問い合わせる
// 我々が作ったアプリの lib/posts.js では、getSortedPostsData を実装して
// ファイルシステムからデータを取得しました。しかし、外部の API エンドポイントと
// いった他のデータソースからもデータを取得することができますし、そのようにしても問題なく動作します。

// import fetch from 'node-fetch'

// export async function getSortedPostsData() {
//   // ファイルシステムのかわりに、
//   // 外部の API エンドポイントから投稿データを取得する
//   const res = await fetch('..')
//   return res.json()
// }
// 直接データベースにクエリを発行することもできます。

// import someDatabaseSDK from 'someDatabaseSDK'

// const databaseClient = someDatabaseSDK.createClient(...)

// export async function getSortedPostsData() {
//   // ファイルシステムのかわりに
//   // データベースから投稿データを取得する
//   return databaseClient.query('SELECT posts...')
// }
// これは、getStaticProps は サーバサイドでのみ 実行されるから可能なことです。
// getStaticProps がクライアントサイドで実行されることは決してありません。
// ブラウザ用の JS バンドルに含まれることもありません。つまり、直接データベースに
// クエリを投げるようなコードを書くことができて、ブラウザにそのコードが送られることは
// 無いということです。


