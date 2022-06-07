import axios from "axios";
import Menu from "./Menu";
import Post, { PostModel } from "./Post";
import { useEffect, useState } from "react";

export default function StoriesList() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/images")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        // vc tem acesso ao error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Menu />

      {posts.map((post, index) => {
        return (
          <Post
            key={`${post.url} ${index}`}
            description={post.description}
            title={post.title}
            url={post.url}
          />
        );
      })}
    </div>
  );
}
