import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";

function Comments({ postId }) {
  const { user } = useUserContext();
  return (
    <div className="px-4">
      <p>
        postId: {postId} userId: {user.id}
      </p>
    </div>
  );
}

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};
export default Comments;
