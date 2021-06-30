import React from 'react';
import './Post.scss';

interface IPostProps {
  className?: string;
  customCoverBlock?: JSX.Element;
  children?: React.ReactNode;
}

const Post = ({ className, customCoverBlock, children }: IPostProps) => {
  return (
    <div className={`post block ${className}`}>
      {customCoverBlock &&
        <div className="post-cover">
          {customCoverBlock}
        </div>
      }
      <div className="post-content">
        {children}
      </div>
    </div>
  )
}

export default Post;