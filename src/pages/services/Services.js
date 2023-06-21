import React from 'react';

const ServicesPage = () => {
  const services = [
    { 
      title: 'Web Development', 
      description: 'Our experienced team of web developers specializes in creating custom websites that are tailored to your unique business needs. From responsive designs to seamless user experiences, we ensure that your website stands out from the competition and engages your target audience effectively.' 
    },
    { 
      title: 'E-commerce Solutions', 
      description: 'Boost your online sales with our comprehensive e-commerce solutions. We provide end-to-end services including secure payment gateways, product catalog management, shopping cart integration, and intuitive user interfaces. Our e-commerce websites are designed to optimize conversions and provide a seamless shopping experience for your customers.' 
    },
    { 
      title: 'Mobile App Development', 
      description: 'We specialize in developing stunning mobile apps for both iOS and Android platforms. Our team of skilled developers follows industry best practices to create robust, scalable, and user-friendly applications. Whether you need a business app, social networking app, or an entertainment app, we can turn your ideas into reality.' 
    },
    // Add more services here
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
