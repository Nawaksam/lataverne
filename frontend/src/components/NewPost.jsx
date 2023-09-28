import { useState } from "react";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";
import backendApi from "../services/backendApi";

function NewPost({ addition, setAddition }) {
  const { user } = useUserContext();

  const [fields, setFields] = useState({
    title: "",
    content: "",
  });

  const handleFields = (evt) => {
    setFields({ ...fields, [evt.target.id]: evt.target.value });
  };

  const handleNewPost = async (evt) => {
    evt.preventDefault();

    try {
      const res = await backendApi.post(`/api/posts`, {
        ...fields,
        userId: user.id,
      });

      if (res.status === 201) {
        setAddition(!addition);
        setFields({ title: "", content: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full px-3">
      <div className="rounded-xl shadow-xl">
        <h3 className="bg-primary w-full text-center p-2 text-2xl text-white font-lobster rounded-t-xl">
          Créer un Post
        </h3>
        <div className=" flex flex-col justify-center p-2 rounded-b-xl">
          <form onSubmit={handleNewPost} className="flex flex-col gap-3">
            <div>
              <div className="join join-vertical w-full">
                <label htmlFor="title" className="join-item label">
                  <span className="label-text font-lobster text-xl  text-accent">
                    Titre
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={fields.title}
                  onChange={handleFields}
                  className="join-item input input-accent font-poppins  text-accent"
                />
              </div>
              <div className="join join-vertical w-full">
                <label htmlFor="content" className="join-item label">
                  <span className="label-text font-lobster text-xl  text-accent">
                    Message
                  </span>
                </label>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  value={fields.content}
                  onChange={handleFields}
                  className="join-item textarea textarea-accent font-poppins  text-accent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-secondary text-lg font-poppins text-accent"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
NewPost.propTypes = {
  addition: PropTypes.bool.isRequired,
  setAddition: PropTypes.func.isRequired,
};
export default NewPost;
