import React, { useState, useEffect, useContext } from "react";
import heart from "../assets/heart.svg";
import heartBlue from "../assets/heart-blue.svg";
import save from "../assets/save.svg";
import saveBlue from "../assets/save-blue.svg";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const LikeSaveButton = ({ articleId, onLike, onSave }) => {
  const { email } = useContext(UserContext);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const likedRes = await axios.get(`http://localhost:8080/api/users/${email}/liked-articles`);
        const savedRes = await axios.get(`http://localhost:8080/api/users/${email}/saved-articles`);
        
        setIsLiked(likedRes.data.some(article => article.id === articleId));
        setIsSaved(savedRes.data.some(article => article.id === articleId));
      } catch (error) {
        console.error("Error fetching like/save status:", error);
      }
    };
    
    if (email) fetchStatus();
  }, [email, articleId]);

  return (
    <div className="d-flex justify-content-end w-50">
      <button
        className="w-50 bg-transparent border-0 d-block icon-button"
        onClick={() => {
          onLike();
          setIsLiked(!isLiked);
        }}
      >
        <img
          className="w-50"
          src={isLiked ? heartBlue : heart}
          alt="heart"
        />
      </button>
      <button
        className="w-50 bg-transparent border-0 d-block icon-button"
        onClick={() => {
          onSave();
          setIsSaved(!isSaved);
        }}
      >
        <img
          className="w-50"
          src={isSaved ? saveBlue : save}
          alt="save"
        />
      </button>
    </div>
  );
};

export default LikeSaveButton;
