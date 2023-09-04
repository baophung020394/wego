import React from 'react'
import PageTest from '@assets/images/pagetest.png'

const PageSample: React.FC = () => {
  return (
    <div className='page'>
      <div>
        <img src={PageTest} style={{ maxWidth: '80%' }} alt='' />
      </div>
    </div>
  )
}

export default PageSample
