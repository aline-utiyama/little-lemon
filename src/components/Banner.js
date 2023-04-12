import food from "../assets/images/restauranfood.jpg";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner">
          <div className="banner-title">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <div className="banner-content">
            <div className="banner-description">
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button className="btn-main">Reserve a table</button>
            </div>
            <img className="banner-img" src={food} alt="Food"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
