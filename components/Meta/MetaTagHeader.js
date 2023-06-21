import Head from 'next/head'

export default function MetaHead(props) {
    const { title, meta_title, meta_author, meta_keyword, meta_description, meta_image } = props

    return (
        <Head>

            <title>{title}</title>

            <meta name="description" content={meta_description} />
            <meta name="author" content={meta_author} />
            <meta name="keywords" content={meta_keyword} />

            {/* {
                props?.course?.data?.meta?.map((meta) => {
                    return <meta key={meta?.id} name={meta?.name} content={meta?.content} detail={meta?.detail} property={meta?.property}
                    />
                })
            } */}

            {/* facebook og tags */}
            <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta_title} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:image" content={meta_image} />

            {/* twitter og tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@sumit" />
            <meta name="twitter:creator" content="@sumit" />
            <meta property="twitter:title" content={meta_title} />
            <meta property="twitter:description" content={meta_description} />
            <meta name="twitter:image" content={meta_image} />
        </Head>

    )
}