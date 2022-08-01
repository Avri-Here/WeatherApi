import { usePlacesWidget } from "react-google-autocomplete";

// Just Style Here For This function !
import styled from "styled-components";
const Box = styled.div`
  width: 30%;
  position: absolute;
  right: 55%;
  top: 10%;
  .search-container {
    background: aliceblue;
    height: auto;
    width: 30vw;
    border-radius: 30px;
    padding: 10px 20px;
    
    -shadow: 4px 4px 6px 0rgba(255,255,255,0.3), -4px -4px 6px 0rgba(116,125,136,0.2), inset -4px -4px 6px 0rgba(255,255,255,0.2), inset 4px 4px 6px 0rgba(0,0,0,0.2);
    0px rgba(255,255,255,.5),
      inset -7px -7px 10px 0px rgba(0,0,0,.1),
     7px 7px 20px 0px rgba(0,0,0,.1),
     4px 4px 5px 0px rgba(0,0,0,.1);
     text-shadow:  0px 0px 6px rgba(255,255,255,.3),
                -4px -4px 6px rgba(116, 125, 136, .2);
    text-shadow: 2px 2px 3px rgba(255,255,255,0.5);*/
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
  
  .search-container:hover > .search-input {
    width: 400px;
  }
  
  .search-container .search-input {
    background: transparent;
    border: none;
    outline: none;
    width: 400px;
    font-weight: 500;
    font-size: 16px;
    transition: 0.8s;
  }
  
  .search-container .search-btn .fas {
    color: #5cbdbb;
  }
  
  @keyframes hoverShake {
    0% {
      transform: skew(0deg, 0deg);
    }
    25% {
      transform: skew(5deg, 5deg);
    }
    75% {
      transform: skew(-5deg, -5deg);
    }
    100% {
      transform: skew(0deg, 0deg);
    }
  }
  

  
`;
export default (props) => {
  const { ref } = usePlacesWidget({
    apiKey: "",
    language: "iw",
    onPlaceSelected: (place) => {
      let latitude = place.geometry.location.lat();
      let longitude = place.geometry.location.lng();
      props.SetWeatherCiti(place.address_components[0].long_name)
      props.SetData({ latitude: latitude, longitude: longitude });
      

    },
  });

  return (
    <Box>
      <h3 style={{ fontFamily: "Cursive", textAlign: "center" }}>
        חפש תחזית מזג אוויר על פי מיקום
      </h3>
      <hr />
      <div className="search-container">
        <input
          ref={ref}
          type="text"
          name="search"
          placeholder="  הקלד כאן..."
          className="search-input"
        />
        <a href="#" className="search-btn">
          <i className="fas fa-search" />
        </a>
      </div>
    </Box>
  );
};
