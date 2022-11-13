import styles from "../styles/Home.module.css";
import ThreeCanvas from "../components/ThreeCanvas";

export default function Home() {
  return (
    <div className="static">
      <ThreeCanvas />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl text-white">King Joker</h1>
        <h1 className="text-lg">Full-stack Developer</h1>
      </div>
    </div>
  );
}
