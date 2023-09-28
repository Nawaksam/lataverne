import { useState } from "react";
import PropTypes from "prop-types";

import { useUserContext } from "../contexts/UserContext";
import backendApi from "../services/backendApi";
import dateTimeFr from "../services/dateTimeFr";

function PostCard({ post, deletion, setDeletion }) {
  const { user } = useUserContext();
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [editionMode, setEditionMode] = useState(false);
  const [oldFields, setOldFields] = useState({
    title: post.title,
    content: post.content,
  });
  const [fields, setFields] = useState({
    title: post.title,
    content: post.content,
  });

  const handleCommentsOpen = () => {
    setCommentsOpen(!commentsOpen);
  };

  const handleEditionMode = () => {
    setEditionMode(!editionMode);
  };

  const handleInputs = (evt) => {
    setFields({ ...fields, [evt.target.id]: evt.target.value });
  };

  const handleEdit = async (evt) => {
    evt.preventDefault();
    try {
      const res = await backendApi.put(`/api/posts/${post.id}`, fields);

      if (res.status === 201) {
        // eslint-disable-next-line no-param-reassign
        post.title = fields.title;
        // eslint-disable-next-line no-param-reassign
        post.content = fields.content;
        setOldFields(fields);
        setEditionMode(!editionMode);
      } else {
        setFields(oldFields);
        // TODO modale erreur
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await backendApi.delete(`/api/posts/${post.id}`);

      if (res.status === 204) {
        setDeletion(!deletion);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="m-3 font-poppins rounded-xl shadow-lg">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4 gap-2 bg-primary py-2 px-4 text-white rounded-t-xl ">
        <div className="flex items-center w-full justify-between gap-2">
          <div className="font-lobster text-xl">{post.nickname}</div>
          <p>{`Le ${dateTimeFr(post.creation).date} à ${
            dateTimeFr(post.creation).time
          }`}</p>
        </div>
        {(user.roles.includes("admin") || post.userId === user.id) && (
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleEditionMode}
              className="btn btn-sm btn-secondary"
            >
              Mofifier
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-sm btn-accent"
            >
              Supprimer
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col py-2 px-4 text-accent">
        {editionMode ? (
          <form onSubmit={handleEdit} className="flex flex-col gap-3">
            <div className="join join-vertical">
              <label htmlFor="title" className="label">
                <span className="label-text font-lobster text-xl text-accent">
                  Titre
                </span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="input input-bordered join-item"
                value={fields.title}
                onChange={handleInputs}
              />
              <label htmlFor="content" className="label">
                <span className="label-text font-lobster text-xl text-accent">
                  Message
                </span>
              </label>
              <textarea
                type="text"
                name="content"
                id="content"
                className="textarea textarea-bordered join-item"
                value={fields.content}
                onChange={handleInputs}
              />
            </div>
            <button type="submit" className="btn btn-primary self-end">
              Enregister
            </button>
          </form>
        ) : (
          <div className="">
            <div className="text-xl font-lobster">{post.title}</div>
            <div className="ml-1">{post.content}</div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] justify-center items-center bg-secondary py-2 px-4 text-accent font-lobster rounded-b-xl">
        <button
          type="button"
          onClick={handleCommentsOpen}
          className="flex justify-center items-center gap-2"
        >
          <p className="text-lg">Commentaires</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#7B2705"
            className={commentsOpen ? "rotate-180" : ""}
          >
            <path
              stroke="#7B2705"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 13 6 6 6-6M6 5l6 6 6-6"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center gap-6">
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
        {commentsOpen ? (
          <div className="flex justify-center items-center gap-2">
            <div className="lg:flex hidden text-lg">Ajouter</div>
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
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    creation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  deletion: PropTypes.bool.isRequired,
  setDeletion: PropTypes.func.isRequired,
};

export default PostCard;
