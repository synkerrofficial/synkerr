import "./HeroSectionAnimation.css";
import Typewriter from "typewriter-effect";
function HeroSectionAnimation() {
  return (
    <div className="flex h-auto justify-center items-center">
      <div className="px-10 text-center">
        <h2 className=" text-gray-400 text-3xl">Expolit the power of</h2>
        <br />
        <h1 className=" text-5xl text-white border-0px">
          <Typewriter
            options={{
              strings: [
                "Purposeful Collaborations",
                "Power of Team Building",
                "Like-Minded Peers",
              ],
              
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default HeroSectionAnimation;