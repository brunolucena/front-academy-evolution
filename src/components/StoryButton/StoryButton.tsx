import UserIcon from "../UserIcon";
import clsx from 'clsx';
import "./StoryButton.scss";

interface Props {
  hasSeen?: boolean;
  image: string;
  name?: string;
  size?: 'lg' | 'md' | 'sm';
}

export default function StoryButton({
  hasSeen,
  image,
  name,
  size = 'lg',
}: Props) {
  return (
    // <div className={"story-button-container " + (hasSeen && 'has-seen')}>
    // <div className={clsx('story-button-container', 'has-seen')}> // clsx sem condições
    // <div className={clsx('story-button-container', hasSeen && 'has-seen')}> clsx com condição de string
    // <div className={clsx({ // clsx com objetos
    //   'story-button-container': true,
    //   'has-seen': hasSeen,
    // })}>
    // clsx com array - que é o Milhor
    <div className={clsx([
      'story-button-container',
      hasSeen && 'has-seen',
      size === 'lg' && 'lg',
      size === 'md' && 'md',
      size === 'sm' && 'sm',
    ])}>
      <div className="user-icon-container">
        <UserIcon image={image} />
      </div>

      <span className="name">
        {name}
      </span>
    </div>
  )
}
