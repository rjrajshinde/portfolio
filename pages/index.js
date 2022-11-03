import styles from "../styles/Home.module.css";
import ThreeCanvas from "../components/ThreeCanvas";

export default function Home() {
  return (
    <div className="static">
      <ThreeCanvas style={{position:"absolute",top:0,left:0}}/>
      <h1 className="text-2xl ">King Joker</h1>
    </div>
  );
}
