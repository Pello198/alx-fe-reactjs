import React from 'react'
import "./Card.css";

const Card = (
    {
title,content,footer,children

    }

    
) => {
  return (
    <div className= "card">
        {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">
        {content || children}
        </div>
        {footer && <div className="card-footer">{footer}</div>}



    </div>
  )
}

export default Card;
