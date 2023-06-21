import Head from 'next/head'

export default function MetaHead(props) {
    const { title, meta_title, meta_author, meta_keyword, meta_description, meta_image } = props

    return (
        <Head>

            <title>{title} - CodeVerse | Your Website Development Partner</title>

            <meta name="title" content={`${title} - CodeVerse | Your Website Development Partner`} />
            <meta name="description" content={meta_description} />
            <meta name="author" content={meta_author} />
            <meta name="keywords" content={meta_keyword} />

            {/* facebook og tags */}
            <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta_title + "- CodeVerse | Your Website Development Partner"} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:image" content={meta_image} />

            {/* twitter og tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@sumit" />
            <meta name="twitter:creator" content="@sumit" />
            <meta property="twitter:title" content={meta_title + "- CodeVerse | Your Website Development Partner"} />
            <meta property="twitter:description" content={meta_description} />
            <meta name="twitter:image" content={meta_image} />
        </Head>

    )
}