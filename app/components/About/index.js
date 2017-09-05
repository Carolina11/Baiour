/**
*
* About
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="aboutContainer">
        <header>About us</header>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis mi libero, in rutrum tortor ultricies id. Praesent luctus tincidunt ipsum id facilisis. Donec nec vulputate nunc, non tincidunt mauris. Aliquam viverra laoreet erat. Nunc vehicula nulla nec mattis finibus. Curabitur nibh ligula, tincidunt vel feugiat non, porttitor eget sapien. Donec tempus elementum efficitur. Etiam vel ligula non felis pretium feugiat. Ut eget vulputate libero, ac scelerisque risus. Fusce at elit eget eros malesuada suscipit.</p>
        <br />
        <p>
          In porttitor lacus ex, non pharetra massa efficitur ut. Praesent mollis ac lectus sit amet iaculis. Curabitur semper congue lobortis. In bibendum blandit ultricies. Integer egestas leo eu lorem posuere elementum. Integer tellus sem, aliquam quis urna id, maximus interdum magna. Nulla facilisi. Vivamus eget ex vehicula, convallis nibh sit amet, tempor magna. Aenean sed eleifend augue, a tincidunt quam. Sed ac mi eu mauris blandit bibendum.</p>
        <br />
        <p>
          Maecenas magna erat, viverra et nulla porta, iaculis consectetur mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras id ultricies justo, nec tincidunt diam. Suspendisse pellentesque a augue quis vulputate. Ut ac nibh at erat consequat commodo. Pellentesque non mi ante. Ut aliquet in elit in vestibulum. Cras ornare ac arcu ac finibus. Donec id sagittis quam. Cras feugiat ornare sem. Aenean dolor nibh, sagittis vel viverra id, interdum eget nulla. Donec consequat ipsum vel tellus convallis posuere. In euismod purus vel pellentesque ornare. Nulla facilisi. Aenean quis lacinia lorem, non posuere nulla. Sed porttitor mollis velit.
        </p>
        </div>
      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object
};
