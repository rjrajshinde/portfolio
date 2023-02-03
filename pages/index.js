import CustomeNavbar from "../components/Navbar/CustomeNavbar";
import ThreeCanvas from "../components/ThreeCanvas";

export default function Home() {
  return (
    <div className="static">
      <CustomeNavbar />
      <ThreeCanvas />
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl text-white">King Joker</h1>
        <h1 className="text-lg text-white">Full-stack Developer</h1>
      </div>
    </div>
  );
}
