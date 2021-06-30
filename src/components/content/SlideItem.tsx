import React from 'react';


class SlideItem {
  imgCoverUrl: string;
  postLink: string;
  constructor(imgCoverUrl: string, postLink: string) {
    this.imgCoverUrl = imgCoverUrl;
    this.postLink = postLink;
  }
}

export default SlideItem;