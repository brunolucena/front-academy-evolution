import { useState } from "react";
import LikeButton from "./LikeButton";

export default function Post() {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(true);
  const [liked4, setLiked4] = useState(false);
  const [liked5, setLiked5] = useState(false);
  const [liked6, setLiked6] = useState(false);

  return (
    <div>
      postagem
      <LikeButton
        color="red"
        liked={liked1}
        onClick={() => setLiked1(!liked1)}
      />
      <LikeButton liked={liked2} onClick={() => setLiked2(!liked2)} />
      <LikeButton liked={liked3} onClick={() => setLiked3(!liked3)} />
      <LikeButton liked={liked4} onClick={() => setLiked4(!liked4)} />
      <LikeButton liked={liked5} onClick={() => setLiked5(!liked5)} />
      <LikeButton liked={liked6} onClick={() => setLiked6(!liked6)} />
    </div>
  );
}
