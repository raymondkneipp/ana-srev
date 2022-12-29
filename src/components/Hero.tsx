import { GetAffirmation, Heart, Otter } from "@components";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html, useProgress } from "@react-three/drei";

export const Hero: React.FC = () => {
  const { progress } = useProgress();
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("./images/underwater.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex-col p-0 py-12">
        <div className="max-w-lg p-1">
          <h1 className="mb-5 text-5xl font-bold font-heading">
            We Need Each<span className="text-primary">otter</span>.
          </h1>
        </div>

        <div className="h-[26rem] w-screen grid place-items-center">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 4], fov: 50 }}
          >
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.5}
              angle={0.1}
              penumbra={1}
              position={[10, 15, 10]}
              castShadow
            />
            <Suspense
              fallback={
                <Html center>
                  <div
                    className="radial-progress"
                    style={{ "--value": progress } as any}
                  >
                    {progress}%
                  </div>
                </Html>
              }
            >
              <Heart />
              <Otter />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        <div className="max-w-lg p-1">
          <GetAffirmation />
        </div>
      </div>
    </div>
  );
};
