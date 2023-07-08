import React from 'react'
import SingleBlogSection from '../../../components/Blogs/SingleBlogSection'
import { useRouter } from 'next/router'
import MetaHead from '../../../components/Meta/MetaTagHeader';
import RecentBlogs from '../../../components/Blogs/RecentBlogs';

const BlogSlug = ({ blog, blogs, slug }) => {
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
      <RecentBlogs blogs={blogs} slug = {slug} />
    </>
  )
}

export default BlogSlug

export async function getServerSideProps(context) {

  const { slug } = context.params;

  // console.log(slug)

  try {
    const blog_d = await fetch(`${process.env.API_URL}/blog/${slug}/`);
    const blog = await blog_d.json();
    const blogs_d = await fetch(`${process.env.API_URL}/blog/`);
    const blogs = await blogs_d.json();

    return {
      props: {
        blog: blog,
        blogs: blogs,
        slug: slug,
      },
      notFound: false,
    };

  }
  catch (error) {
    return {
      props: {
        blog: {},
        blogs: [],
      }
    }
  }
}
