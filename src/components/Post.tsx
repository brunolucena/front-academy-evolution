import LikeButton from './LikeButton';

export interface PostModel {
  title: string;
  description: boolean;
  url: string;
}

export default function Post({
  description,
  title,
  url,
}: PostModel) {
  return (
    <div>
      <img alt={title} src={url} />
      {title}
      {description}
      <LikeButton />
    </div>
  );
}
