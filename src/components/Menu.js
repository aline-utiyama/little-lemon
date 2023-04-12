import salad from "../assets/images/greek_salad.jpg";
import brushetta from "../assets/images/bruchetta.svg";
import fish from "../assets/images/restauranfood.jpg";

const Menu = () => {
  return (
    <div className="menu-section">
      <div className="container">
        <div className="menu-selector">
          <h3>Order FOR DELIVERY!</h3>
          <div className="menu-options">
            <ul>
              <li>
                <h5 className="btn-gray">Lunch</h5>
              </li>
              <li>
                <h5 className="btn-gray">Main</h5>
              </li>
              <li>
                <h5 className="btn-gray">Desserts</h5>
              </li>
              <li>
                <h5 className="btn-gray">A La Carte</h5>
              </li>
              <li>
                <h5 className="btn-gray">Special</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <div className="item-description">
              <h4>Greek Salad</h4>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <span>$12.99</span>
            </div>
            <img className="item-img" src={salad}></img>
          </div>
          <div className="menu-item">
            <div className="item-description">
              <h4>Brushetta</h4>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil. Toppings of
                tomato, veggies, beans, cured pork, or cheese are examples of
                variations. In Italy, a brustolina grill is frequently used to
                create bruschetta.
              </p>
              <span>$7.99</span>
            </div>
            <img className="item-img" src={brushetta}></img>
          </div>
          <div className="menu-item">
            <div className="item-description">
              <h4>Grilled Fish</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sed cursus.
              </p>
              <span>$20.00</span>
            </div>
            <img className="item-img" src={fish}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
