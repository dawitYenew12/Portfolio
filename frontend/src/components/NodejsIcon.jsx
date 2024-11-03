import { Float, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const NodejsIcon = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("models/node_js.glb");

  useEffect(() => {
    const rotationAnimation = gsap.timeline({
      repeat: -1, // Repeat indefinitely
      repeatDelay: 2, // Delay before repeating
    }).to(groupRef.current.rotation, {
      y: Math.PI * 2, // Full rotation (360 degrees) in radians
      duration: 5, // Duration for the rotation
      ease: "power1.inOut" // Optional easing function for smooth animation
    });

    return () => rotationAnimation.kill(); // Cleanup on unmount
  }, []);

  return (
    <Float floatIntensity={1}>
      <ambientLight intensity={1} />
      <group ref={groupRef} {...props} dispose={null} scale={10}>
        <group name="node_js" userData={{ name: "node_js" }}>
          <mesh
            name="box_obj"
            geometry={nodes.box_obj.geometry}
            material={materials.box_mtl}
            position={[0.001, 0.004, 0.028]}
            rotation={[Math.PI / 2, Math.PI / 3, 0]}
            scale={19.927}
            userData={{ name: "box_obj" }}
          />
          <mesh
            name="text_obj"
            geometry={nodes.text_obj.geometry}
            material={materials.text_mtl1}
            userData={{ name: "text_obj" }}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("models/node_js.glb");

export default NodejsIcon;
