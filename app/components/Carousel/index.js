/**
*
* Carousel
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

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

        <leftIcon className="sliderIconLeft" onClick={this.previousImage} />
        <rightIcon className="sliderIconRight" onClick={this.nextImage}/>
        <div className="toggleAuto" onClick={this.stopAutoSlide}><br />Stop slide show</div>
        <div className="toggleAuto" onClick={this.autoSlide}><br />Start slide show</div>
      </div>/* off carouselDiv */
    );
  }


}

Carousel.contextTypes = {
  router: React.PropTypes.object
};
