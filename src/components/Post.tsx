import LikeButton from './LikeButton';
import { PostModel } from '../App';

export default function Post({
  id,
  images,
  images2,
  liked,
  username,
}: PostModel) {
  return (
    <div>
      {images.map((image, index) => {
        return (
          <img alt='imagem-teste1' src={image} key={index} />
        )
      })}

      {/* <LikeButton
        color="red"
        liked={liked1}
        onClick={() => setLiked1(!liked1)}
      /> */}
      <LikeButton liked={liked} onClick={() => { }} />
    </div>
  );
}
