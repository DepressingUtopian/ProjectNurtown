import React from 'react';
import TextHeader from '../TextHeader';
import TextBlock from '../TextBlock';
import ImageButton from '../ImageButton';
import './Post.scss';

interface IPostProps {
  className?: string;
  customCoverBlock?: JSX.Element;
  textHeader?: string;
  textDescription?: string;
  icon: string;
  link?: string;
  imageStyles?: string;
  textHeaderStyles?: React.CSSProperties;
  textDescriptionStyles?: React.CSSProperties;
  isViewButton?: boolean;
  buttonText?: string;
  children?: JSX.Element;
}

const Post = ({ className, customCoverBlock, textHeader, textDescription, icon, link, imageStyles, textHeaderStyles, textDescriptionStyles, isViewButton = false, buttonText, children }: IPostProps) => {
  return (
    <div className={`post block ${className}`}>
      {customCoverBlock &&
        <div className="post__cover">
          {customCoverBlock}
        </div>
      }

      <div className="post__entity">
        <TextHeader text={textHeader} styles={textHeaderStyles} />
        {textDescription ? <TextBlock text={textDescription} styles={textDescriptionStyles} /> : ''}
        {children}
        {isViewButton ? <ImageButton className="button__open-post" icon={icon} buttonText={buttonText} /> : ''}
      </div>
    </div>
  )
}

export default Post;