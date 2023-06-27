import React from 'react'

const ServiceContent = ({ description }) => {
    return (
        <p className='leading-7 tracking-wide'
          dangerouslySetInnerHTML={{__html: description}}
        />
      );
}

export default ServiceContent
