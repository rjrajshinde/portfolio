import Head from "next/head";
import CustomeNavbar from "../components/Navbar/CustomeNavbar";
import ThreeCanvas from "../components/ThreeCanvas";

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <div className="static">
        <CustomeNavbar />
        <ThreeCanvas />
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl text-white">King Joker</h1>
          <h1 className="text-lg text-white">Full-stack Developer</h1>
        </div>
      </div>
    </>
  );
}
