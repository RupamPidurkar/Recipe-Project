import "./App.css";
import Recipe from "./Components/RecipeGrid";
import { Community } from "./Components/Community";
import recipeData from "./recipe-data";
import communityData from "./community-data";
function App() {
  return (
    <div className="container">
      <div className="top">
        <nav className="nav">
          <div className="logo">
            <img
              src="../public/icons8-chef-hat-50.png"
              alt=""
              className="logo-img"
            />
            <p className="logo-p">Cookpedia</p>
          </div>
          <div className="nav-list">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">Articles</a>
            <a href="#">About Us</a>
          </div>
          <div className="search-profile">
            <a href="#">
              <img src="../public/search.png" className="search"></img>
            </a>
            <a href="#">
              <img src="../public/profile.png" className="profile"></img>
            </a>
          </div>
        </nav>
        {/*************************************************************************/}
        <div className="top-flex">
          <div className="left">
            <h1 className="left-h1">
              The Easiest Way To Make Your Favorite Meal
            </h1>
            <p className="left-p">
              Discover 1000+ recipes in your hand with best recipe.
              <br />
              Help you to find easiest way to cook.
            </p>
            <button className="left-btn">Explore Recipes</button>
          </div>
          {/*************************************************************************/}
          <div className="right">
            <img
              src="./public/Top-Right-Plates.png"
              alt=""
              className="top-right-plates"
            />
          </div>
        </div>
        {/*************************************************************************/}
      </div>
      {/*--------------------------------TOP-ENDS-HERE----------------------*/}
      <div className="popular-recipes">
        <div className="heading">
          <div className="recipe-left">
            <h2 className="left-h2">Popular Recipes of The Week</h2>
            <p className="left-p">Our most popular recipes of this week</p>
          </div>
          <div className="recipe-right">
            <a href="#" className="see-all">
              See all
            </a>
          </div>
        </div>
        <div className="recipes-grid ">
          {recipeData.map((x) => (
            <div className="recipe-grid-items-one" key={x.recipeImg}>
              <Recipe
                imageUrl={x.recipeImg}
                name={x.chefName}
                recipe={x.recipeName}
              />
            </div>
          ))}
        </div>
      </div>
      {/*-------------------------------------------------------------------*/}
      <div className="breakfast">
        <div className="breakfast-detail">
          <p className="breakfast-h1">
            50+ Breakfast Recipes That Very Quick And Easy{" "}
          </p>
          <div className="breakfast-p">
            Find the perfect food ideas to start your day with the quick and
            easiest way
          </div>
        </div>
      </div>
      {/*-------------------COMMUNITY-STARTS-HERE--------------------------------- */}
      <div className="community">
        <h2 className="community-h2">Fresh From Our Community</h2>
        <div className="community-grid">
          {communityData.map((a) => (
            <div className="community-grid-elements" key={a.imgsrc}>
              <Community
                imgsrc={a.comImg}
                recipe_p={a.com_recipe}
                username_p={a.com_user}
                detail_p={a.com_detail}
                recipeImg={a.com_Img}
              />
            </div>
          ))}
        </div>
      </div>
      {/*------------------------------------------------------------------------- */}
      <div className="phone-container">
        <div className="phones">
          <div className="phone-left">
            <img
              src="../public/pngfind.com-iphone-png-14057911.png"
              alt=""
              className="phone"
            />
          </div>
          <div className="phone-right">
            <h1 className="phone-right-h1">Download App</h1>
            <p className="phone-right-p">
              Download the app from App Store or Google Play for a better
              experience.
            </p>
            <div className="app-stores">
              <img
                src="../public/PngItem_1144050.png"
                alt=""
                className="google-play"
              />
            </div>
          </div>
        </div>
      </div>
      {/************************************************************* */}
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img
              src="../public/icons8-chef-hat-50.png"
              alt=""
              className="footer-logo-img"
            />
            <h1 className="footer-logo-h1">Cookpedia</h1>
          </div>
          <p className="footer-left-p">
            Discover 1000+ recipes in your hand with the best recipe. Help you
            to find the easiest way to cook.
          </p>
        </div>
        <div className="footer-right">
          <div className="email-block">
            <h2 className="right-h2">Sign up for our newsletter</h2>
            <div className="email">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
              />
              <button className="footer-btn">Submit</button>
            </div>
          </div>
          <div className="right-menus">
            <div className="menu">
              <h2 className="menu-h2">Menu</h2>
              <div className="menu-list">
                <p>Home</p>
                <p>Recipes</p>
                <p>Articles</p>
                <p>About us</p>
              </div>
            </div>
            <div className="help">
              <h2 className="help-h2">Help</h2>
              <div className="help-list">
                <p>Privacy and Policy </p>
                <p>Terms of Use </p>
              </div>
            </div>
            <div className="social">
              <h2 className="social-h2">Social</h2>
              <div className="social-list">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
