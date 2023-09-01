import React from 'react'
import PortfolioSection from '../../../components/Portfolio/PortfolioSection'
import UnderMaintenance from '../../../components/Utils/UnderMaintenance'
import MetaHead from '../../../components/Meta/MetaTagHeader'

const Portfolio = ({ portfolios }) => {
  // console.log(portfolios)
  return (
    <>
      <MetaHead
        title={"Portfolio - CodeVerse | Your Website Development Partner"}
        meta_author={"CodeVerse"}
        meta_keyword={"Website Development, Web Design, Web Development, Portfolio, Website Design, Responsive Design, Custom Web Development, Mobile-Friendly Websites, E-commerce Websites, CMS Websites, WordPress Development, Joomla Development, Drupal Development, Website Redesign, UI/UX Design, Front-End Development, Back-End Development, PHP Development, HTML/CSS, JavaScript, User Interface, User Experience, Web App Development, Mobile App Development, SEO-Friendly Websites, Graphic Design, Logo Design, Branding, Corporate Identity, Landing Pages, Blog Design, Social Media Integration, Website Maintenance, Website Security, Hosting Services, Domain Registration, Online Marketing, Content Management, E-commerce Solutions, Payment Gateway Integration, Online Booking Systems, Membership Websites, Non-Profit Websites, Educational Websites, Healthcare Websites, Government Websites, Restaurant Websites, Portfolio Websites, Photography Websites, Artist Portfolios, Event Websites, Real Estate Websites, Travel Websites, Fashion Websites, Technology Websites, Financial Websites, News Websites, E-learning Platforms, Video Streaming, Podcast Integration, Responsive Testing, Cross-Browser Compatibility, Speed Optimization, Website Analytics, Code Optimization, Security Audits, Website Consultation, Custom Features, Web Forms, Contact Forms, User Registration, Data Encryption, SSL Certificates, Content Delivery, API Integration, CRM Integration, Newsletter Signup, Testimonials, Case Studies, Client Projects, Creative Designs, Award-Winning Websites, Innovative Solutions, Client Satisfaction, High-Quality Work, Web Development Services, Professional Web Design, Digital Marketing, Online Presence, Dynamic Websites, Static Websites, Interactive Web Design, Modern Website Trends, SEO Strategies, Social Media Marketing, Digital Advertising, Search Engine Optimization, Blog Integration, Portfolio Showcases, Web Development Agency, Creative Web Solutions, Responsive Web Design, Mobile Optimization"}
        meta_title={"Home - CodeVerse | Your Website Development Partner"}
        meta_description={"Explore CodeVerse Nepal's portfolio of stunning web development and design projects. Our diverse range of work includes custom web development, responsive design, e-commerce solutions, and more, showcasing our commitment to innovation and excellence."}
        meta_image={'/code.jpg'}
      />
      {/* <UnderMaintenance /> */}
      <PortfolioSection portfolios={portfolios} />
    </>
  )
}

export default Portfolio

export async function getStaticProps(context) {
  try {
    const portfolio_d = await fetch(`${process.env.API_URL}/account/portfolio/`);
    const portfolios = await portfolio_d.json();

    return {
      props: {
        portfolios: portfolios,
      },
    };

  }
  catch (error) {
    return {
      props: {
        portfolios: [],
      }
    }
  }
}

