import React from "react"
import star from "./star.jpg"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.openSpots === "online") {
        badgeText = "AVAILABLE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src= {star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--desc">{props.item.description}</p>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From Rs.{props.item.price}</span> / person</p>
        </div>
    )
}