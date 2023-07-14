import React from "react";
import { BsFillShareFill } from "react-icons/bs";

export const ShareLeaderBoard = () => {
  const handleShare = async () => {
    try {
      const imageUrl = "./../public/ima.jpg"; // URL of the image to share

      if (navigator.share) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        const file = new File([blob], "/image.jpg", { type: "image/jpeg" });

        await navigator.share({
          files: [file],
        });

        console.log("Image shared successfully!");
      } else {
        console.log("Sharing not supported in this browser.");
      }
    } catch (error) {
      console.error("Failed to share image:", error);
    }
  };

  return (
    <button onClick={handleShare}>
      <BsFillShareFill />
    </button>
  );
};
