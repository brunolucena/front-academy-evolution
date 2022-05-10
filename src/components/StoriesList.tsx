import axios from "axios";
import { useEffect, useState } from "react";
import Post, { PostModel } from "./Post";

export default function StoriesList() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/images')
      .then((response) => {
        setPosts(response.data.data)
      })
      .catch((error) => {
        // vc tem acesso ao error
        console.log(error)
      });
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Post
            key={`${post.url} ${index}`}
            description={post.description}
            title={post.title}
            url={post.url}
          />
        )
      })}
    </div>
  );
}
