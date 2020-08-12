import React from 'react'
import PostHeader from './PostHeader';
import './post.css';
import HelpBar from '../HelpBar/helpbar';
import HelpVideo from '../HelpVideo/video';

const Post = () => {
    return (
        <div className="post">
          <PostHeader />
          <HelpBar /> 
          <HelpVideo />
        </div>
    )
}

export default Post;