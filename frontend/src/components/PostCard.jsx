import PropTypes from "prop-types";
import dateTimeFr from "../services/dateTimeFr";

function PostCard({ post }) {
  return (
    <div className="m-3 font-poppins rounded-xl shadow-lg">
      <div className="flex justify-between items-center bg-primary py-2 px-4 text-white rounded-t-xl ">
        <div className="font-lobster text-xl">{post.nickname}</div>
        <p>{`Le ${dateTimeFr(post.creation).date} à ${
          dateTimeFr(post.creation).time
        }`}</p>
      </div>
      <div className="py-2 px-4 text-accent">
        <div className="text-xl font-lobster">{post.title}</div>
        <div className="ml-1">{post.content}</div>
      </div>
      <div className="flex justify-between items-center bg-secondary py-2 px-4 text-accent font-lobster rounded-b-xl">
        <div className="flex items-center gap-2">
          <p className="text-lg">Commentaires</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#7B2705"
          >
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 13 6 6 6-6M6 5l6 6 6-6"
            />
          </svg>
        </div>
        <div className="flex items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#7B2705"
          >
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              d="M16.472 20H4.1a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h2.768a2 2 0 0 0 1.715-.971l2.71-4.517a1.631 1.631 0 0 1 2.961 1.308l-1.022 3.408a.6.6 0 0 0 .574.772h4.575a2 2 0 0 1 1.93 2.526l-1.91 7A2 2 0 0 1 16.473 20Z"
            />
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 20V9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#7B2705"
          >
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              d="M16.472 3.5H4.1a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6h2.768a2 2 0 0 1 1.715.971l2.71 4.517a1.631 1.631 0 0 0 2.961-1.308l-1.022-3.408a.6.6 0 0 1 .574-.772h4.575a2 2 0 0 0 1.93-2.526l-1.91-7A2 2 0 0 0 16.473 3.5Z"
            />
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 14.5v-11"
            />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          <div className="lg:flex hidden">Ajouter</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#7B2705"
          >
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.777 13.345-7.297 8.027a2 2 0 0 1-2.96 0l-7.297-8.027a2 2 0 0 1 0-2.69l7.297-8.027a2 2 0 0 1 2.96 0l7.297 8.027a2 2 0 0 1 0 2.69ZM9 12h3m3 0h-3m0 0V9m0 3v3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    creation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
