import React from 'react'
import NoContent from '../../../components/Utils/NoContent'
import BlogSection from '../../../components/Blogs/BlogSection'
import MetaHead from '../../../components/Meta/MetaTagHeader'
import { blogList } from '../../../Data/blogList'

const Blog = () => {
  return (
    <>
      <MetaHead
        title={"Blogs"}
        meta_author={"CodeVerse"}
        meta_keyword={"tech blogs, programming tutorials, web development, software engineering, coding tips, technology news, IT industry, software development, coding resources, programming guides, tech trends, coding community, software updates, coding blog, programming articles, web development tutorials, tech industry news, coding knowledge, coding best practices, programming news, software tips, technology tutorials, coding resources, IT blogs, coding community, software engineering, technology insights, programming updates, web development trends, coding tutorials, software industry, programming resources, IT news, technology community, software insights, coding techniques, programming hacks, technology tips, coding tricks, web development insights, software tutorials, programming community, coding news, technology updates, coding examples, programming knowledge, coding strategies, web development tips, software trends, programming community, coding resources, IT insights, technology tutorials, coding news, software updates, programming techniques, web development best practices, coding tips and tricks, technology insights, programming tutorials, coding best practices, web development news, software industry updates, programming trends, coding resources, IT tips, technology tutorials, coding community, software engineering news, programming knowledge, web development strategies, coding techniques, technology updates, coding examples, programming resources, coding community, software development insights, programming tips, web development tutorials, coding trends, technology news, coding resources, IT industry updates, software engineering insights, programming tutorials, web development tips, coding best practices, technology updates, coding examples, programming community, software development news, coding strategies, technology tutorials, coding resources, IT trends, programming insights, web development updates, coding tips, software industry trends, technology community, programming tutorials, coding resources, web development news, software updates, coding knowledge, technology insights, programming trends, coding techniques, software industry news, programming examples, web development resources, coding community, IT news, technology tips"}
        meta_title={"Blogs"}
        meta_description={"Discover captivating insights, expert tutorials, and the latest tech trends at CodeVerse's vibrant blog. Unleash your coding potential, stay ahead in the ever-evolving world of technology, and fuel your passion for innovation. Explore a wealth of programming knowledge, industry updates, and cutting-edge resources, empowering you to thrive in the digital landscape. Elevate your skills, unleash your creativity, and embark on an extraordinary journey with CodeVerse's engaging and informative articles."}
        meta_image={'/code.jpg'}
      />
      {/* <NoContent /> */}
      <BlogSection blogList={blogList} />
    </>
  )
}

export default Blog
