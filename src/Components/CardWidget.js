import React from 'react';
import './cardwidget.css';

const CardWidget = ({ number }) => {
  return (
    <div className="card-widget">
      <span className="number">{number}</span>
    </div>
  );
}

export default CardWidget;
