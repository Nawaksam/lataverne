import { useEffect, useState } from "react";
import backendApi from "../services/backendApi";
import PostCard from "../components/PostCard";
import NewPost from "../components/NewPost";
import SideBlock from "../components/SideBlock";
import PostModal from "../components/PostModal";

function Comptoir() {
  const [posts, setPosts] = useState(null);
  const [deletion, setDeletion] = useState(false);
  const [addition, setAddition] = useState(false);
  const [postModalOpen, setPostModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await backendApi.get("/api/posts");
        setPosts(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [deletion, addition]);

  const handlePostModal = () => {
    setPostModalOpen(!postModalOpen);
  };

  return (
    <>
      <div className="flex-grow flex flex-col">
        {posts?.map((elem) => (
          <PostCard
            key={elem.id}
            post={elem}
            deletion={deletion}
            setDeletion={setDeletion}
          />
        ))}
      </div>
      <div className="lg:flex flex-col justify-evenly items-center gap-6 hidden rounded-xl shadow-xl w-4/12 my-3 pb-3">
        <NewPost addition={addition} setAddition={setAddition} />
        <SideBlock title="Publicités" content="Le con-tenu" />
        <SideBlock title="Sponsors" content="Le con-tenu" />
      </div>
      <div className="lg:hidden fixed bottom-6 right-6">
        <button
          type="button"
          onClick={handlePostModal}
          className="bg-primary rounded-full border-4 border-secondary p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54px"
            height="54px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#FAC150"
          >
            <path
              stroke="#FAC150"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 14V8.5M6 13V6a3 3 0 0 1 3-3h5M16.992 4h3m3 0h-3m0 0V1m0 3v3M12 21H6a4 4 0 0 1 0-8h12a4 4 0 1 0 4 4v-3"
            />
          </svg>
        </button>
      </div>
      {postModalOpen && (
        <PostModal
          addition={addition}
          setAddition={setAddition}
          postModalOpen={postModalOpen}
          setPostModalOpen={setPostModalOpen}
        />
      )}
    </>
  );
}

export default Comptoir;
