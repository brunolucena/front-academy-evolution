import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LikeButton({ color = "#0289ea", liked, onClick }) {
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
