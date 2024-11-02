import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  return (
    <Html
      as='div'
      center
      className="canvas-loader-container" // Use the loader container class
    >
      <div className="canvas-loader-spinner"> {/* Spinner wrapper */}
        <div className="loader-circle" style={{ animationDuration: `${1 - progress / 100}s` }} /> {/* Loader circle with animation */}
      </div>
      <span className="canvas-loader-text">{progress != 0 ? `${progress.toFixed(2)}% Loaded` : "Loading..."}</span>
    </Html>
  );
}

export default CanvasLoader;
