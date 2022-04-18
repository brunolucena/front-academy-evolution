import UserIcon from "../UserIcon";
import "./StoryButton.scss";

interface Props {
  hasSeen?: boolean;
  image: string;
  name?: string;
  size?: string;
}

export default function StoryButton({
  hasSeen,
  image,
  name,
  size = '20px',
}: Props) {
  return (
    <div className={"story-button-container " + (hasSeen && 'has-seen')}>
      <div className="user-icon-container">
        <UserIcon image={image} />
      </div>

      <span className="name">
        {name}
      </span>
    </div>
  )
}
