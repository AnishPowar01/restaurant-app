import React from 'react'
import "./style.css";

function MenuCard({menuData}) {
  return (
    <>
    <section className="main-card--container">

    
      {
      menuData.map((curElem)=>{

        const {id,name,category, image, description} = curElem
        return (
            <div className="card-container" key={id}>
    <div className="card">
      <div className="card-body">
        <span className="card-number card-circle subtle">{id}</span>
        <div className="card-author subtle">{category}</div>
        <h2 className="card-title">{name}</h2>
        <span className="card-description subtle">
          {description}
        </span>
        <div className="card-read">Read</div>
      </div>
      <img src={image} alt="" className="card-media" />
      <span className="card-tag subtle">Order Now</span>
    </div>
  </div>
          
        )
      })
    }

    </section>
   
  </>
  )
}

export default MenuCard