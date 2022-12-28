import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Otter: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/otter/scene.gltf");
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={0.001}
        scale-x={-0.001}
        position={[-1.6, 0, 0]}
        rotation-y={1.5}
        rotation-z={0.25}
      />
      <primitive
        object={gltf.scene.clone()}
        scale={0.001}
        position={[1.6, 0, 0]}
        rotation-y={-1.5}
        rotation-z={-0.25}
      />
    </>
  );
};
