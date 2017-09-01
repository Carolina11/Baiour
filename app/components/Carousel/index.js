/**
*
* Carousel
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import TiChevronLeft from 'react-icons/lib/ti/chevron-left';
import TiChevronRight from 'react-icons/lib/ti/chevron-right';

export default class Carousel extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: ['A_tale_of_two_cities.jpg','Animal_farm.jpg','Moby_dick.jpg','The_catcher_in_the_rye.jpg','The_great_gatsby.jpg','To_kill_a_mockingbird.jpg'],
      activeIndex:0
    }
  }
  renderImage = () => {
    var images = this.state.images;
    var activeIndex = this.state.activeIndex;

    for(var i = 0; i < images.length; i++)
    {
      if(i === activeIndex)
      {
        return images[i];
      }
    }
  }

  render() {
    return (
      <div className="carouselDiv">
        <leftIcon className="carouselIconLeft-" onClick={this.previousImage} />
        <TiChevronLeft className="carouselIcons" />
        <div className="carouselItem">
          <img className="carouselImage" src={require('../../images/' + this.state.images[0])} />
        </div>
        <div className="carouselItem">
          <img className="carouselImage" src={require('../../images/' + this.state.images[1])} />
        </div>
        <div className="carouselItem">
          <img className="carouselImage" src={require('../../images/' + this.state.images[2])} />
        </div>
        <div className="carouselItem">
          <img className="carouselImage" src={require('../../images/' + this.state.images[3])} />
        </div>
        <div className="carouselItem">
          <img className="carouselImage" src={require('../../images/' + this.state.images[4])} />
        </div>
        <div className="carouselItem">
          <img className="carouselImage" src={require('../../images/' + this.state.images[5])} />
        </div>
        <rightIcon className="carouselIconRight-" onClick={this.nextImage}/>
        <TiChevronRight className="carouselIcons" />
      </div>/* off carouselDiv */
    );
  }


}

Carousel.contextTypes = {
  router: React.PropTypes.object
};
