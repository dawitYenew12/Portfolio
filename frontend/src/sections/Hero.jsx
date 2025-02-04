import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
// import NodejsIcon from "../components/NodejsIcon";
import Target from "../components/Target";
import Rings from "../components/Rings";
import Cube from "../components/Cube";
import ReactLogo from "../components/ReactLogo";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import NodejsIcon from "../components/NodejsIcon";

// import { Leva } from "leva";

function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Dawit <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          Building products and Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 3, 25]} />

            <HeroCamera isMobile={isMobile} isTablet={isTablet}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <NodejsIcon position={sizes.nodejsPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <Button
            name="Contact Me"
            isBeam
            containerClass="sm:w-fit w-fill sm:min-w-96"
            href="#contact"
          />
      </div>
    </section>
  );
}

export default Hero;
