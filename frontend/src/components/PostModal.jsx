import PropTypes from "prop-types";
import NewPost from "./NewPost";

function PostModal({ addition, setAddition, postModalOpen, setPostModalOpen }) {
  return (
    <div className="fixed inset-0 bg-accent bg-opacity-50 flex justify-center items-center">
      <div className="bg-base-100 m-2 py-3 rounded-xl">
        <NewPost
          addition={addition}
          setAddition={setAddition}
          postModalOpen={postModalOpen}
          setPostModalOpen={setPostModalOpen}
        />
      </div>
    </div>
  );
}

PostModal.propTypes = {
  addition: PropTypes.bool.isRequired,
  setAddition: PropTypes.func.isRequired,
  postModalOpen: PropTypes.bool,
  setPostModalOpen: PropTypes.func,
};

PostModal.defaultProps = {
  postModalOpen: undefined,
  setPostModalOpen: undefined,
};

export default PostModal;
