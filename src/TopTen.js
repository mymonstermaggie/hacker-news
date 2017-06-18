import React from 'react';
import './TopTen.css';

function TopTen(props) {
  return (
    <div className="top">
      {props.res.map((bob, i) =>
        <div key={i} className="article">
          <a href="{bob.url}">{bob.title}</a>
          <p>{bob.author}</p>
          <p>{bob.description}</p>
        </div>
      )}
    </div>
  )
}

export default TopTen
