import React, { Component } from 'react'



class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }


  async componentDidMount() {
  }
  

  render() {
  
    const { comments } = this.props

  const renderComments = () => {
    if (comments) {
      return comments.map(comment => {
        return (
          <div className="comment" key={comment._id}>
            <p className='comment-text'>{comment.text}</p>
            <p className='comment-user'>-{comment.user}</p>
          </div>
        )
      })
    } else {
      return null
    }
  }

  return (
    <div className='comments-display'>
      <h4>Our Movie-Goers Are Saying:</h4>
      {!comments ? <h3>No comments at this time.</h3> : null}
      <div className='comments'>{renderComments()}</div>
    </div>
  )
    
  }
 
}


export default Comments