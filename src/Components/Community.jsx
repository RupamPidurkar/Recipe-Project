/* eslint-disable react/prop-types */
export function Community({
  imgsrc,
  recipe_p,
  username_p,
  detail_p,
  recipeImg,
}) {
  return (
    <div className="community-card">
      <div className="user-profile">
        <img src={imgsrc} alt="" className="community-profile-img" />
        <div className="user-details">
          <p className="community-recipe-p">{recipe_p}</p>
          <p className="community-user-name">{username_p}</p>
        </div>
      </div>
      <p className="community-detail-p">{detail_p}</p>
      <span className="stars">
        <img src={recipeImg} alt="" className="community-recipe-img" />
      </span>
      <img src="" alt="" />
      <div className="activity">
        <div className="like">
          <img src="src\assets\like.png" alt="" id="like" />
          <label htmlFor="like">Like</label>
        </div>
        <div className="share">
          <img src="src\assets\share.png" alt="" id="share" />
          <label htmlFor="share">Share</label>
        </div>
      </div>
    </div>
  );
}
