import React from 'react'

export const NavBar = ({filterItem, menuList}) => {
  return (
    <div>
     <nav className="navbar">
      <div className="btn-group">
      {
        menuList.map((curElem)=>{
            return(
                <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}</button>

            )
        })
      }
      </div>
    </nav>
    </div>
  )
}
