import React from 'react'
import Helmet from 'helmet'
const Metadata = ({title}) => {
  return (
    <Helmet>
        <title>{title}</title>
    </Helmet>
  )
}

export default Metadata