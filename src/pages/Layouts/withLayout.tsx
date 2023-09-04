import React from 'react'
import Layout from './Layout'

const withLayout = (WrappedComponent: React.ComponentType) => {
  const WithLayout: React.FC = () => {
    return (
      <Layout>
        <WrappedComponent />
      </Layout>
    )
  }

  return WithLayout
}

export default withLayout
