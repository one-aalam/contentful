import React from 'react';
import { initGA, logPageView, personaKey } from '../utils/analytics';
import Meta from './Meta';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      const queryParam = window.location.search.replace('?', '').split('&')[0];
      if ( queryParam.indexOf('=') !== -1 ) {
        const [ key, value ] = queryParam.split('=');
        if ( key === 'p' && value ) {
          window.sessionStorage && window.sessionStorage.setItem(personaKey, value);
        }
      }
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return (
      <div>
        <Meta siteTitle={this.props.siteTitle} description={this.props.description}/>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}