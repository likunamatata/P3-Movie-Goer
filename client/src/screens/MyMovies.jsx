import React from 'react'
import Layout from '../components/shared/Layout'

export default function Items(props) {
  const { user, items } = props

  if (user) {
    return (
      <Layout>
        <h3>My Movies</h3>
        <br/>
        {!items ? <h3>No Items at this time.</h3> : null}
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className="landing">
          <div className="main">
            {!items ? <h3>No Items at this time.</h3> : null}
          </div>
        </div>
      </Layout>
    )
  }
}