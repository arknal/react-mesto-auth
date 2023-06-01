import "./index.scss";

interface Props {
  size?: "md" | "sm";
  src: string;
  alt: string;
  className?: string;
}

const Avatar = (props: Props) => {
  const size = props.size ? ` avatar_size_${props.size}` : "";
  const className = props.className ? `  ${props.className}` : "";

  const fullClassName = "avatar" + size + className;

  return <img src={props.src} alt={props.alt} className={fullClassName} />;
};

export default Avatar;
