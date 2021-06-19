import React from 'react';
import TextHeader from '../TextHeader';
import TextBlock from '../TextBlock';
import ImageButton from '../ImageButton';
import './Post.scss';

const Post = ({className, customCoverBlock, textHeader, textDescription, icon, link, imageStyles, textHeaderStyles, textDescriptionStyles, isViewButton = false, buttonText, customJSXContent }) => {
  return (
    <div className={`post block ${className}`}>
      {customCoverBlock ? <div className="post__cover">
        {customCoverBlock}
      </div> : ''
      }

      <div className="post__entity">
        <TextHeader text={textHeader} styles={textHeaderStyles} />
        {textDescription ? <TextBlock text={textDescription} styles={textDescriptionStyles} /> : ''}
        {customJSXContent ? customJSXContent : ''}
        {isViewButton ? <ImageButton className="button__open-post" icon={icon} buttonText={buttonText} styles={textDescriptionStyles} /> : ''}
      </div>
    </div>
  )
}

export default Post;