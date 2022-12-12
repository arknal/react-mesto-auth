import { useSelector } from "react-redux";
import { userSelector } from "redux/selectors";

const Card = ({
  name,
  link,
  likes,
  ...props
}) => {
  const currentUser = useSelector(userSelector);

  const isOwn = currentUser._id === props.owner ? true : false;
  const isLiked = likes.some((account) => {
    return account._id === currentUser._id;
  });

  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && "card__like-btn_liked"
  }`;
  return (
    <article className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
      />
      <div className="flex-container card__info">
        <h2 className="card__title">
          {name}
        </h2>
        {isOwn && (
          <button
            className="card__trash-btn"
          />
        )}
        <div className="flex-container flex-container_direction_column">
          <button
            className={cardLikeButtonClassName}
            type="button"
          />
          <span className="card__likes-counter">{likes.length}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
