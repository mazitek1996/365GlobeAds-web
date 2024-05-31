

import React from "react";
import ServiceCard from "./serviceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Service {
  title: string;
  description: string;
  link: string;
}

const ServicesPage: React.FC = () => {
  const digitalMarketingServices: Service[] = [
    {
      title: "SEO Optimization",
      description: "Improve your search engine visibility and drive organic traffic.",
      link: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
    },
    {
      title: "Social Media Marketing",
      description: "Promote your brand and engage with your audience on social platforms.",
      link: "https://www.investopedia.com/terms/s/social-media-marketing-smm.asp",
    },
    {
      title: "Content Marketing",
      description: "Create and distribute valuable, relevant content to attract and retain customers.",
      link: "https://contentmarketinginstitute.com/what-is-content-marketing/",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic to your website with paid search ads.",
      link: "https://www.wordstream.com/ppc",
    },
    {
      title: "Email Marketing",
      description: "Reach your audience directly with personalized email campaigns.",
      link: "https://mailchimp.com/email-marketing/",
    },
    {
      title: "Influencer Marketing",
      description: "Partner with influencers to expand your brand's reach and credibility.",
      link: "https://influencermarketinghub.com/what-is-influencer-marketing/",
    },
  ];

  const webDevelopmentServices: Service[] = [
    {
      title: "Custom Web Development",
      description: "Create tailored web solutions to meet your business needs.",
      link: "https://en.wikipedia.org/wiki/Web_development",
    },
    {
      title: "E-commerce Development",
      description: "Build robust e-commerce platforms for online businesses.",
      link: "https://www.webfx.com/web-development/glossary/what-is-ecommerce-web-development/#:~:text=Ecommerce%20web%20development%20is%20the%20process%20of%20building%20and%20designing,and%20revenue%20for%20your%20business.",
    },
  ];

  const webDesignServices: Service[] = [
    {
      title: "Responsive Web Design",
      description: "Design visually appealing and user-friendly websites.",
      link: "https://en.wikipedia.org/wiki/Web_design",
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive and engaging user interfaces and experiences.",
      link: "https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/",
    },
  ];

  const technologyServices: Service[] = [
    {
      title: "Artificial Intelligence (AI) Integration & Training",
      description: "Integrate AI technologies into your systems for automation and insights.",
      link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    },
    {
      title: "Machine Learning Solutions (ML)",
      description: "Implement machine learning algorithms to analyze data and make predictions.",
      link: "https://www.arm.com/glossary/machine-learning-solutions#:~:text=A%20machine%20learning%20(ML)%20solution,a%20vast%20array%20of%20devices",
    },
    {
      title: "Virtual Reality (VR) Development",
      description: "Create immersive virtual reality experiences for various applications.",
      link: "https://forbytes.com/blog/vr-development-overview/",
    },
    {
      title: "Augmented Reality (AR) Development",
      description: "Develop augmented reality applications to overlay digital content onto the real world.",
      link: "https://en.wikipedia.org/wiki/Augmented_reality",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Digital Marketing Services</h2>
        <Slider {...settings}>
          {digitalMarketingServices.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} link={service.link} />
          ))}
        </Slider>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Web Development Services</h2>
        <Slider {...settings}>
          {webDevelopmentServices.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} link={service.link} />
          ))}
        </Slider>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Web Design Services</h2>
        <Slider {...settings}>
          {webDesignServices.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} link={service.link} />
          ))}
        </Slider>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Technology Services</h2>
        <Slider {...settings}>
          {technologyServices.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} link={service.link} />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ServicesPage;
