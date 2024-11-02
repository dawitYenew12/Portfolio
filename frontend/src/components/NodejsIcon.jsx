// NodejsLogo.jsx
import { Text } from "@react-three/drei";

const NodejsIcon = (props) => {
  return (
    <group {...props}>
      {/* Hexagon Background */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.2, 6]} />
        <meshStandardMaterial color="#68A063" /> {/* Node.js green color */}
      </mesh>

      {/* "Node" Text */}
      <Text
        position={[0, 0.6, 0.2]}
        fontSize={0.6}
        color="white"
        font="/path-to-your-font/Roboto-Bold.woff" // Specify a bold font path
        anchorX="center"
        anchorY="middle"
      >
        Node
      </Text>

      {/* ".js" Text */}
      <Text
        position={[0, -0.4, 0.2]}
        fontSize={0.4}
        color="white"
        font="/path-to-your-font/Roboto-Bold.woff" // Specify a bold font path
        anchorX="center"
        anchorY="middle"
      >
        .js
      </Text>
    </group>
  );
};

export default NodejsIcon;
