import defaultImage from "../assets/defaultProfile.png";

export default function Avatar({ clasName = "h-10" }) {
  const defaultClass = "rounded-full h-10 aspect-square ";
  const classes = defaultClass + " " + clasName;

  return <img src={defaultImage} alt="user" className={classes} />;
}
