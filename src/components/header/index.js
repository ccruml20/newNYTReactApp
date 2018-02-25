import React from 'react';


export default class Header extends React.Component {

  render() {
    return (
      <div>
        <div style={{ fontWeight: '800', backgroundImage: 'url(./images/header.jpg)', color: '#337ab7', textAlign: 'center', borderBottom: 'rgba(119, 119, 119, 0.66) 30px solid'}} className="jumbotron">
          <h1 style={{ marginRight: '40px', marginTop: '80px'}}>New York Times <small>article search</small></h1>
          <p>Search and Save your own NYT Articles</p>
          </div>
          <div>
            <h3 style={{ color: '#f5f4f2', marginRight: '379px', marginTop: '-58px', textAlign: 'right'}}>Saved Aritcles</h3>
            <h3 style={{ color: '#f5f4f2', marginLeft: '142px', marginTop: '-36px', textAlign: 'left'}}>Search Aritcles</h3>
          </div>
        </div>);
      }
    }
