import { useEffect, useState } from "react";
import backendApi from "../services/backendApi";
import PostCard from "../components/PostCard";
import NewPost from "../components/NewPost";
import SideBlock from "../components/SideBlock";

function Comptoir() {
  const [posts, setPosts] = useState(null);
  const [deletion, setDeletion] = useState(false);
  const [addition, setAddition] = useState(false);

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
    </>
  );
}

export default Comptoir;
