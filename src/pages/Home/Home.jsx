import Button from "../../shared/Button";
import Card from "../../shared/Card"; // Import the Card component
import { AiFillApple } from "react-icons/ai"; // Import iOS icon
import { SiAndroid, SiFigma, SiGooglechrome, SiAdobe } from "react-icons/si"; // Import additional icons
import { FaDropbox,  FaMicrosoft, } from "react-icons/fa"; // Correct logos

import "./Home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">The Superfast Color Palettes Generator</h1>
            <p className="hero-subtitle">
              Explore, create, and share beautiful color palettes <br /> with ease!
            </p>
            <div className="hero-buttons">
              {/* First button */}
              <Button bgColor="#0073ff" text="Start The Generator" />

              {/* Second button with transparent styling */}
              <button className="transparent-button">
                Explore Trending Palettes
              </button>
            </div>
            {/* Add the Product Hunt badge image here */}
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=9917&theme=light&period=monthly"
              alt="Product Hunt Badge"
              className="product-hunt-badge"
            />
          </div>
          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1729093089/sailHere_kympui.jpg"
              alt="Hero Graphic"
            />
          </div>
        </div>
      </div>

      {/* New Section for Cards */}
      <div className="card-section">
        <div className="card-container">
          <Card
            image={<AiFillApple size={50} color="black" />}
            text="iOS App"
            description="Create, browse, and save palettes on the go."
            hoverText="View on the App Store"
            hoverBgColor="#87CEEB" // Light blue-green background on hover
          />
          <Card
            image={<SiAndroid size={50} color="black" />}
            text="Android App"
            description="Explore palettes with our Android app."
            hoverText="View on Google Play"
            hoverBgColor="purple" // Light cyan hover color
          />
          <Card
            image={<SiFigma size={50} color="black" />}
            text="Figma Plugin"
            description="Design and save palettes directly in Figma."
            hoverText="Get the Figma Plugin"
            hoverBgColor="#98FC23" // Light gray hover color
          />
          <Card
            image={<SiGooglechrome size={50} color="black" />}
            text="Chrome Extension"
            description="Access palettes instantly with our Chrome extension."
            hoverText="Add to Chrome"
            hoverBgColor="orange" // Light blue hover color
          />
          <Card
            image={<SiAdobe size={50} color="black" />}
            text="Adobe Extension"
            description="Enhance your Adobe experience with color palettes."
            hoverText="Install Adobe Extension"
            hoverBgColor="Gold" // Light red hover color
          />
        </div>
      </div>


      {/* New Section for 'Used by 5+ million designers' */}
      <div className="used-by-section">
        <h2 className="section-header">
          Used by 5+ million designers and by top companies
        </h2>
        <div className="icons-container">
          
          
          
          <AiFillApple className="company-icon" />
          <FaMicrosoft className="company-icon" />
          <FaDropbox className="company-icon" />
          
          <AiFillApple className="company-icon" />
          <FaMicrosoft className="company-icon" />
          <AiFillApple className="company-icon" />
          <AiFillApple className="company-icon" />
          <FaMicrosoft className="company-icon" />
          <AiFillApple className="company-icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
