import jujutsu from "./jujutsu.jpg"
import jurassic from "./jurassic.jpg"
import mave from "./mave.jpg"
export default  [
    {
        id: 1,
        title: "Jujutsu kaisen",
        description:"Get ready to curse each other!!",
        price: 200,
        coverImg: jujutsu,
        stats: {
            rating: 5.0,
            reviewCount: 100
        },
        location: "New Delhi",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Jurassic world",
        description: "Watch the epic conclusion of the jurassic era",
        price: 225,
        coverImg: jurassic,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "New Delhi",
        openSpots: "online",
    },
    {
        id: 3,
        title: "Top Gun Maverick",
        description:"",
        price: 50,
        coverImg: mave,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "New Delhi",
        openSpots: "online",
    }
]