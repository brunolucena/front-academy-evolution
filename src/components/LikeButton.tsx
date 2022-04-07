import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Props {
  color?: string;
  liked: boolean;
  onClick(): void;
}

export default function LikeButton({
  color = "#0289ea",
  liked,
  onClick,
}: Props) {
  return (
    <div>
      {liked ? (
        <FavoriteIcon onClick={onClick} style={{ color }} />
      ) : (
        <FavoriteBorderIcon onClick={onClick} />
      )}
    </div>
  );
}
