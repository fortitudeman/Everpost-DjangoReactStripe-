import React from 'react'
import PostHeader from './PostHeader';
import './post.css';
import HelpBar from '../HelpBar/helpbar';
import HelpVideo from '../HelpVideo/video';
import Poster from '../Poster/Poster';
import Unturned from '../unturned/unturned';

const Post = () => {
    return (
        <div className="post">
          <PostHeader value="fixed" />
          <HelpBar /> 
          <HelpVideo />
          <PostHeader value="pay" />
          <Poster />
          <Unturned />
        </div>
    )
}

export default Post;