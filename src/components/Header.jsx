import taxi from "../assets/taxi.png"

export default function Header() {
    return (
        <div className="header-container">
            <header>
                <img src={taxi} alt="taxi icons Taxi icons created by Assia Benkerroum- Flaticon" width={55} />
                <h2 className="title"> <span className="first-word">Flexi</span> Taxi</h2>
                <button className="book-now">Book Now</button>
            </header>
        </div>
    )
}