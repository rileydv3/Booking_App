import "./footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Places of interest</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Homes</li>
                <li className="fListItem">Apartments/Condos</li>
                <li className="fListItem">Hotels</li>
                <li className="fListItem">Private Rooms</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">COVID-19 FAQs</li>
                <li className="fListItem">About Shepherd Booking</li>
                <li className="fListItem">Contact Us</li>
                <li className="fListItem">Careers</li>
            </ul>
        </div>
        <div className="fText">Copyright © 2023 Shepherd Booking</div>
    </div>
  )
}

export default Footer