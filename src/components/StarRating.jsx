import "../assets/starRating.css";

const StarRating = ({ rating, count }) => {
  // Calculate the number of filled stars
  const filledStars = Math.round(rating);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < filledStars ? "filled" : ""}`}
        >
          &#9733;
        </span>
      ))}
      &nbsp; | &nbsp; <span>{count}</span>
    </div>
  );
};


// StarRating.propTypes = {
//   rating: PropTypes.number.isRequired,
//   count: PropTypes.number.isRequired,
//   // Validate that rating is a number and is required
// };

export default StarRating;
