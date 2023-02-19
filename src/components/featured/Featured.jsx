import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://i.imgur.com/DKvdjHQ.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>New York City</h1>
                <h2>123 properties</h2>
            </div>
        </div>    
        <div className="featuredItem">
            <img src="https://i.imgur.com/o9tNy4L.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Las Vegas</h1>
                <h2>55 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://i.imgur.com/AEiTWyK.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Shepherdstown</h1>
                <h2>78 properties</h2>
            </div>
        </div>        
    </div>
  )
}

export default Featured