import React from "react"
import Card from "./card"
import data from "./data"

const cards=data.map(item => {
return (
            <Card 
                key={item.id}
                item={item}
            />

        )
})

export default function Clone() {
    return (
    <div>
           <nav className="cl">
                {/* header */}
                <img src="imdb.jpg" className="nav--logo"/>
           </nav>
                {/* Image and text */}
          <div
          style={{
               background:'#b2b266',
          }}
          >
           <section className="hero">
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
	<div class="carousel-inner">
	  <div class="carousel-item active">
		
       <h1 className="hero-head1">Watch Thor Love and Thunder in your nearby theatres</h1>
          <img src="thor.jpg"  
          style={{
               width:"50%" ,
               height:"auto",
          }}
          />
	  </div>
	  <div class="carousel-item">
       <h1 className="hero-head1">Watch Jujutsu kaisen in your nearby theatres</h1>
          <img src="jujutsu.jpg" 
          style={{
               width:"50%" ,
               height:"auto",
          }}
          />
	  </div>
	  <div class="carousel-item">
       <h1 className="hero-head1">Watch Rengoku Tales in your nearby theatres</h1>
          <img src="1153091.jpg" 
          style={{
               width:"50%" ,
               height:"auto",
          }}
          />
	  </div>
	</div>
	<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
	  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	  <span class="visually-hidden">Previous</span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
	  <span class="carousel-control-next-icon" aria-hidden="true"></span>
	  <span class="visually-hidden">Next</span>
	</button>
	</div>

                
                <h1 className="hero--head2">Latest releases this week</h1>
                <h2 className="hero--text">Get movie review,rating and ticket availability details here</h2>
           </section>
           <section className="cards-list">
                {cards}
            </section>
            </div>
     </div>
    )
}

