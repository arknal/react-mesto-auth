import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "redux/selectors";
import { setCurrentCard } from "redux/store/app/app.slice";
import { Image, Skeleton } from "@chakra-ui/react";
import { IMesto } from "shared/api/models";
import "./index.scss";

interface Props {
  likeBtn: React.ReactNode;
  deleteBtn: React.ReactNode;
  commentsBtn: React.ReactNode;
}

const Card = ({ _id, ...props }: Props & IMesto) => {
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();

  const isOwn = currentUser._id === props.owner;

  return (
    <article className="card">
      <Image
        src={props.link}
        alt={props.name}
        className="card__image"
        fallback={<Skeleton className="card__image" />}
        onClick={() => dispatch(setCurrentCard({ ...props, _id }))}
      />
      <div className="flex-container card__info">
        <h2 className="card__title">{props.name}</h2>
        {isOwn && props.deleteBtn}
        <div className="flex-container">
          <div className="flex-container" style={{ marginRight: "10px" }}>
            {props.likeBtn}
          </div>
          <div className="flex-container">{props.commentsBtn}</div>
        </div>
      </div>
    </article>
  );
};

export default Card;
