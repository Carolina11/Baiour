/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';
import Carousel from 'components/Carousel';
import Welcome from 'components/Welcome';
import SignIN from 'components/SignIN';
import SignUP from 'components/SignUP';
import AdminHome from 'components/AdminHome';
import AdminUpldImages from 'components/AdminUpldImages';
import About from 'components/About';

export default class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      content: ['welcome', 'signIN', 'signUP', 'adminHome', 'adminUpldImages', 'about'],
      contentIndex:0
    }
  }

  handleIndex = (index) => {
    this.setState({
      contentIndex:index
    })
  };

  renderContent = () => {
    switch (this.state.contentIndex) {
      case 0:
        return (<Welcome />);
        break;
      case 1:
        return (<div><SignIN /> <div className="signUPDiv"><p>Need an account? <a href='#top' onClick={() => this.handleIndex(2)}>Sign up here!</a></p></div></div>);
        break;
      case 2:
        return (<SignUP />);
        break;
      case 3:
        return (<AdminHome />);
        break;
      case 4:
        return (<AdminUpldImages />);
        break;
      case 5:
        return (<About />);
        break;
      default:
        return (<Welcome />);
    }
  }
  render() {
    return (
      <div className="container">

        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <div className="bigContainer">
            <div className="headerDiv"><a href=""></a></div>{/* off headerDiv (link not wrking) */}
              <div className="menuDiv"><a href="javascript:void(0);">IMPRINTS</a>
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
                <div className="menu">
                <ul>
                <li><a href="">NEWS</a></li>
                <li><a href="#top" onClick = {() => this.handleIndex(5)}>ABOUT US</a></li>
                <li><a href="">DISTRIBUTORS</a></li>
                <li><a href="">INTERNATIONAL</a></li>
                <li><a href="">BOOKSTORES</a></li>
                <li><a href="">FOREIGN RIGHTS</a></li>
                <li><a href="">INTRANET</a></li>
                </ul>
              </div>{/* off menu */}
              </div>{/* off menuDiv *** */}

              <Carousel />
              <div className="bodyContainer">

                <div className="leftContentDiv">


                {this.renderContent()}



                </div>

                <div className="rightContentDiv">
                  <div className="boxes">
                    <div className="box1">
                        <div className="boxTabs">
                          <ul>
                            <li id="box1Tab1"><a href="">booktrailer</a></li>
                            <li id="box1Tab2"><a href="">ebooks</a></li>
                            <li id="box1Tab1Tab3"><a href="">catalogue</a></li>
                          </ul>
                      </div>
                      <div className="box1Content1">
                        <div className="videoDiv">
                          <iframe width="100%" src="https://www.youtube.com/embed/-W7-6kGqzho" frameborder="0" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="box2">
                      <div className="boxTabs">
                        <ul>
                          <li id="Box2Tab1"><a href="">press</a></li>
                          <li id="Box2Tab2"><a href="">newsletter</a></li>
                          <li id="Box2Tab3"><a href="">games</a></li>
                        </ul>
                      </div>
                      <div className="box2Content1">
                        <div className="videoDiv">
                          <iframe width="100%" src="https://www.youtube.com/embed/-W7-6kGqzho" frameborder="0" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="box3">
                      <div className="boxTabs">
                        <ul>
                          <li id="box3Tab1"><a href="">new releases</a></li>
                          <li id="box3Tab2"><a href="">archive</a></li>
                          <li id="box3Tab3"><a href="">forums</a></li>
                        </ul>
                      </div>
                      <div className="box3Content1">
                        <div className="videoDiv">
                          <iframe width="100%" src="https://www.youtube.com/embed/-W7-6kGqzho" frameborder="0" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* off bodyContainer */}
              <div className="footer1Div">
                <div className="feedsDiv">
                  <div className="facebookDiv">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" height="250" width="100%" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                  </div>
                </div>
                <div className="mediaDiv">
                  <div className="mediaText">
                    <p>come join us!</p>
                  </div>
                  <div className="mediaUL">
                    <ul className="mediaUL1">
                      <li className="mediaLi1"><a href="http://www.twitter.com">twitter</a></li>
                      <li className="mediaLi2"><a href="http://www.facebook.com">facebook</a></li>
                      <li className="mediaLi3"><a href="http://www.youtube.com">youtube</a></li>
                    </ul>
                    <ul className="mediaUL2">
                      <li className="mediaLi4"><a href="http://www.linkedin.com">linkedin</a></li>
                      <li className="mediaLi5"><a href="http://www.goodreads.com">goodreads</a></li>
                      <li className="mediaLi6"><a href="#rss">rss</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer2Div"><a href="#top" onClick={() => this.handleIndex(1)}>Sign in</a> | Legalese | Contact | Online Store </div>
          </div>{/* off bigContainer*/}
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
