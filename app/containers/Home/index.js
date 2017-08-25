/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <div className="bigContainer">
            <div className="headerDiv"><a href=""></a></div>{/* off headerDiv (link not wrking) */}
              <div className="menuDiv"><a href="javascript:void(0);">IMPRINTS</a>
                <div className="menu">
                <ul>
                <li><a href="">NEWS</a></li>
                <li><a href="">ABOUT US</a></li>
                <li><a href="">DISTRIBUTORS</a></li>
                <li><a href="">INTERNATIONAL</a></li>
                <li><a href="">BOOKSTORES</a></li>
                <li><a href="">FOREIGN RIGHTS</a></li>
                <li><a href="">INTRANET</a></li>
                </ul>
              </div>{/* off menu */}
              <div className="imprintsDiv">
                <ul>
                <li><a href="">QUAYSGATEKOP</a></li>
                <li><a href="">SPEENI</a></li>
                <li><a href="">JOINTH</a></li>
                <li><a href="">RAWOLI</a></li>
                <li><a href="">UTEARDA</a></li>
                <li><a href="">RIVERBALET</a></li>
                <li><a href="">DOYLENARFKIN</a></li>
                <li><a href="">AIXTOR</a></li>
                <li><a href="">VIDIR</a></li>
                <li><a href="">TAWO</a></li>
                <li><a href="">SJORICA</a></li>
                </ul>
              </div> {/* off imprintsDiv */}
              </div>{/* off menuDiv *** */}


            <div className="carouselDiv*"></div>

          </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
