import React from 'react'
import PortfolioSection from '../../../components/Portfolio/PortfolioSection'
import UnderMaintenance from '../../../components/Utils/UnderMaintenance'

const Portfolio = () => {
  return (
    <>
    {/* <UnderMaintenance /> */}
    <PortfolioSection />
    </>
  )
}

export default Portfolio

export async function getStaticProps(context) {
  try {
    const portfolio_d = await fetch(`${process.env.API_URL}/portfolio/`);
    const portfolio = await blog_d.json();

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

