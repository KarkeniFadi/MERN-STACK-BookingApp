import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>dublin</h1>
                <h2>123</h2>
            </div>        
        </div>
    </div>
  )
}

export default Featured