import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer } from "three";
import { useFrame } from "@react-three/fiber";

export const Heart: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/pumping_heart_model/scene.gltf");

  let mixer: any;
  if (gltf.animations.length) {
    mixer = new AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <>
      <primitive object={gltf.scene} scale={0.01} position={[0, -1, 0]} />
    </>
  );
};
