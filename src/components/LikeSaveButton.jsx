  import React, { useState, useEffect, useContext } from "react";
  import heart from "../assets/heart.svg";
  import heartBlue from "../assets/heart-blue.svg";
  import save from "../assets/save.svg";
  import saveBlue from "../assets/save-blue.svg";
  import axios from "axios";
  import { UserContext } from "../Context/UserContext";

  const LikeSaveButton = ({ articleId, onLike, onSave }) => {
    const { username } = useContext(UserContext);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    // useEffect(() => {
    //   const fetchStatus = async () => {
    //     if (!username) return;  // Prevent request if user is not logged in

    //     try {
    //       const likedRes = await axios.get(`http://localhost:8080/api/users/${username}/like-article`);
    //       const savedRes = await axios.get(`http://localhost:8080/api/users/${username}/save-article`);

    //       setIsLiked(likedRes.data.some(article => article.articleId === articleId));
    //       setIsSaved(savedRes.data.some(article => article.articleId === articleId));
    //     } catch (error) {
    //       console.error("Error fetching like/save status:", error.response ? error.response.data : error.message);
    //     }
    //   };

    //   fetchStatus();
    // }, [username, articleId]);

    return (
      <div className="d-flex justify-content-end w-50">
        <button
          className="w-50 bg-transparent border-0 d-block icon-button"
          onClick={() => {
            onLike();
            setIsLiked(prev => !prev);
          }}
        >
          <img className="w-50" src={isLiked ? heartBlue : heart} alt="heart" />
        </button>
        <button
          className="w-50 bg-transparent border-0 d-block icon-button"
          onClick={() => {
            onSave();
            setIsSaved(prev => !prev);
          }}
        >
          <img className="w-50" src={isSaved ? saveBlue : save} alt="save" />
        </button>
      </div>
    );
  };

  export default LikeSaveButton;
