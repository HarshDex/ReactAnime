import React from 'react'
import "./Movies.css"
const Movies = () => {
  return (
    <div className="movie-page">
        <div className="movie-description-part">
            <div id="des-about">
                <div id="des-about-head">
                    <h1>Tokyo Revengers : Christmas ShowDown</h1>
                </div>
                <div id="des-tags">
                    <div className="duration" class = "tags">
                        <i class="ri-star-fill"></i>
                        9.5
                    </div>
                    <div className="rating" class = "tags">
                        <i class="ri-time-line"></i>
                        121m
                    </div>
                </div>
                <div id="des-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae ab temporibus nisi dicta ex tenetur nesciunt velit error unde fugiat inventore, ut beatae ipsum quam illo reiciendis nam fuga modi maxime iusto itaque quidem officiis in. Iste obcaecati ratione aperiam quaerat natus esse sit aut, in a! Animi, unde ducimus.
                </div>
            </div>
            <div id="des-image">
                <img src="https://c4.wallpaperflare.com/wallpaper/805/1013/90/anime-girl-school-uniform-back-view-clouds-wallpaper-thumb.jpg" alt="" />
            </div>
        </div>
        <button className='button'>
            <i class="ri-play-line"></i>            
            Watch Now
        </button>
        <button className = "button1">
        <i class="ri-add-line"></i>
            Add to list</button>
    </div>
  )
}

export default Movies