import { useEffect, useState } from "react";
import backendApi from "../services/backendApi";
import PostCard from "../components/PostCard";

function Comptoir() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const result = await backendApi.get("/api/posts");
        setPosts(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="flex-grow flex flex-col">
        {posts?.map((elem) => (
          <PostCard post={elem} key={elem.id} />
        ))}
      </div>
      <div className="lg:flex hidden bg-amber-500 w-4/12">Write</div>
    </>
  );
}

export default Comptoir;
