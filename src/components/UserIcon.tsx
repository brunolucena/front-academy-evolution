interface Props {
  image: string;
}

export default function UserIcon({
  image,
}: Props) {
  return <img alt="user icon" src={image} />;
}
