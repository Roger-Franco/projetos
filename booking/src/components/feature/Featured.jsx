import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>

      <div className="featuredItem">
        <img src="https://cf2.bstatic.com/xdata/images/city/600x600/653646.jpg?k=0a8eb3999748f5b12b29f6bd5492a12b7f15a37535e572ea91403098d1588d38&o=" alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>São Paulo</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf2.bstatic.com/xdata/images/city/600x600/653641.jpg?k=29b8706ee4bff7b870ca35a698c5ac4be003b4122b00035a9d4a572d3101b1fe&o=" alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>Rio de Janeiro</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf2.bstatic.com/xdata/images/city/600x600/653459.jpg?k=57c5c21e650b8e0888c5906143c2655c412a2e64796337d87a687c68daabed2d&o=" alt="" className='featuredImg' />
        <div className="featuredTitles">
          <h1>SCuritiba</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Featured