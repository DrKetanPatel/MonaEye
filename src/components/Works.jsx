import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import street from '../assets/street.png';
import hospital from '../assets/hospital.jpg';
import entrance from '../assets/entrance.jpg';

const Works = () => {
  return (
    <Carousel>
      <div className="reviewBox">
        <img
          src={street}
          className=""
          alt=""
          style={{ maxWidth: "1000px", maxHeight: "1000px" }}
        />
        <p className="reviewPerson">Kharivav Road Street View</p>
        <a href="https://www.google.com/maps/@22.3021127,73.1979235,3a,75y,146.86h,94.87t/data=!3m6!1e1!3m4!1s8jtqaHXDEWglXhn_qGfVbQ!2e0!7i13312!8i6656?entry=ttu" target="blank">
          <p className="reviewJob">Click to view in Google Maps</p>
        </a>
      </div>
      <div className="reviewBox">
        <img
          src={hospital}
          className=""
          alt=""
          style={{ maxWidth: "750px", maxHeight: "750px" }}
        />
        <p className="reviewPerson">Mona Eye Hospital</p>
        <p className="reviewJob"> Ankshira Apartment (1st Floor)</p>
      </div>
      <div className="reviewBox">
        <img
          src={entrance}
          className=""
          alt=""
          style={{ maxWidth: "500px", maxHeight: "300px" }}
        />
        <p className="reviewPerson">Timings</p>
        <p className="reviewJob">Dr Ketan Patel</p>
      </div>
    </Carousel>
  );
};
export default Works;