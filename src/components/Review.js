import React, { useState } from "react";

import reviews from "../data/reviews";

const Review = ()=>{

  // 1️⃣ sirf index ko track karo
  const [index, setIndex] = useState(0);

  // 2️⃣ current review nikalo
  const { name, job, image, text } = reviews[index];

  // 3️⃣ next button
  const nextReview = () => {
    let newIndex = index + 1;
    if (newIndex > reviews.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  // 4️⃣ previous button
  const prevReview = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = reviews.length - 1;
    }
    setIndex(newIndex);
  };

const styles = { height: "100px", width: "100px" };


  // 5️⃣ random button
  const randomReview = () => {
    let random = Math.floor(Math.random() * reviews.length);
    if (random === index) {
      random = (index + 1) % reviews.length;
    }
    setIndex(random);
  };

  return (
    <div className="review">
      <img src={image}  style={styles} className="person-img" />
     <h4 id={`author-${index}`} className="author">
  {name}
</h4>


      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <button className="prev-btn" onClick={prevReview}>Prev</button>
      <button className="next-btn" onClick={nextReview}>Next</button>
      <button className="random-btn" onClick={randomReview}>surprise me</button>
    </div>
  );
}

export default Review;
