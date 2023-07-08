import React from 'react'
import SingleBlogSection from '../../../components/Blogs/SingleBlogSection'
import { useRouter } from 'next/router'
import MetaHead from '../../../components/Meta/MetaTagHeader';

const BlogSlug = ({ blog }) => {

  const router = useRouter();

  const { slug } = router.query;

  console.log(blog.meta.title)
  return (
    <>
      <MetaHead
        title={blog.title}
        meta_author={"CodeVerse"}
        meta_keyword={blog.meta && blog.meta.keywords}
        meta_title={blog.title}
        meta_description={blog.meta.description}
        meta_image={'/code.jpg'}
      />
      <SingleBlogSection blog={blog} />
    </>
  )
}

export default BlogSlug

export async function getServerSideProps(context) {

  const { slug } = context.params;

  console.log(slug)

  try {
    const blog_d = await fetch(`${process.env.API_URL}/blog/${slug}/`);
    const blog = await blog_d.json();

    return {
      props: {
        blog: blog,
      },
      notFound: false,
    };

  }
  catch (error) {
    return {
      props: {
        blog: [],
      }
    }
  }
}
