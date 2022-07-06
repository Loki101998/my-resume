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
           <section className="hero">
                <h1 className="hero-head1">Watch Thor Love and Thunder in your nearby theatres</h1>
                <img src="thor.jpg" className="hero--photo" />
                <h1 className="hero--head2">Latest releases this week</h1>
                <p className="hero--text">Get </p>
           </section>
           <section className="cards-list">
                {cards}
            </section>
     </div>
    )
}

