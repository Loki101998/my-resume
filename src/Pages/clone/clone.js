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
                <h1 className="hero-head1">Watch Thor Love and Thunder in your nearby theatres</h1>
                <img src="thor.jpg" className="hero--photo" />
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

