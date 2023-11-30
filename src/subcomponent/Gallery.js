import React,{useState,useEffect} from "react";
import { Link,Outlet } from "react-router-dom";
import Gallary2png from '../images/Gallary2.png';
import '../css/Gallery.css';
// import AllPhotos from "./AllPhotos";
import Footer from "../components/Footer";
import axios from "axios";
function Gallary() {

    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3001/api/get_header_img')
            //axios.get('https://matoshreewebsite.lissomtech.in/APIMatoshree/api/events')
            .then(response => {
                console.log('Fetched Data:', response.data);
                setGalleryData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div>
            {/* <div className="img-container">
                <img src={Gallary2png} className="card-img" alt="Image 2" style={{ height: "400px" ,marginTop:'100px'}} />
            </div> */}

{
    galleryData.map((data, index) => (
        <div className="img-container" key={index}>
        <img src={`data:image/jpeg;base64,${data.head_Gallery}`}  className="card-img" alt="Image 2" style={{ height: "400px" ,marginTop:'100px'}} />
        </div>
    ))
}
            <br />
          
            <ul className="nav justify-content-center">
            <li className="nav-item gallary">
                    <Link to="allphotos" className="nav-link" activeClassName="active" style={{ fontWeight: "400", fontSize: "20px", fontFamily: "Montseerrat", lineHeight: "1.7"}}>All Photos</Link>
                </li>
                <li className="nav-item gallary">
                    <Link to="staff" className="nav-link" activeClassName="active" style={{ fontWeight: "400", fontSize: "20px", fontFamily: "Montseerrat", lineHeight: "1.7"}}>Staff</Link>
                </li>
                <li className="nav-item gallary">
                    <Link to="team" className="nav-link" activeClassName="active" style={{ fontWeight: "400", fontSize: "20px", fontFamily: "Montseerrat", lineHeight: "1.7"}}>Team</Link>
                </li>
                <li className="nav-item gallary">
                    <Link to="office" className="nav-link" activeClassName="active" style={{ fontWeight: "400", fontSize: "20px", fontFamily: "Montseerrat", lineHeight: "1.7" }}>Office</Link>
                </li>
            </ul>
            {/* <AllPhotos/> */}
            <Outlet></Outlet>
            <Footer/>
        </div>
        
    );
}

export default Gallary;