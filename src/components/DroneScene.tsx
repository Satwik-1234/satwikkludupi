import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

// Drone propeller component
const Propeller = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.5;
    }
  });
  
  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[0.25, 0.25, 0.02, 8]} />
      <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
    </mesh>
  );
};

// Main drone model
const DroneModel = ({ isHovered }: { isHovered: boolean }) => {
  const droneRef = useRef<THREE.Group>(null);
  const [tiltAngle, setTiltAngle] = useState({ x: 0, z: 0 });
  
  useFrame((state) => {
    if (droneRef.current) {
      // Subtle hover effect
      const time = state.clock.elapsedTime;
      
      if (isHovered) {
        // Responsive tilt when hovered
        droneRef.current.rotation.x = THREE.MathUtils.lerp(droneRef.current.rotation.x, 0.1, 0.05);
        droneRef.current.rotation.z = THREE.MathUtils.lerp(droneRef.current.rotation.z, -0.1, 0.05);
      } else {
        droneRef.current.rotation.x = THREE.MathUtils.lerp(droneRef.current.rotation.x, 0, 0.05);
        droneRef.current.rotation.z = THREE.MathUtils.lerp(droneRef.current.rotation.z, 0, 0.05);
      }
      
      // Slow rotation
      droneRef.current.rotation.y = Math.sin(time * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={droneRef}>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.6, 0.15, 0.6]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
        </mesh>
        
        {/* Camera gimbal */}
        <mesh position={[0, -0.15, 0.1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </mesh>
        
        {/* LiDAR sensor indicator */}
        <mesh position={[0, -0.12, -0.1]}>
          <cylinderGeometry args={[0.05, 0.05, 0.04, 8]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.8} />
        </mesh>
        
        {/* Arms */}
        {[
          [0.35, 0, 0.35],
          [-0.35, 0, 0.35],
          [0.35, 0, -0.35],
          [-0.35, 0, -0.35],
        ].map((pos, i) => (
          <group key={i}>
            {/* Arm */}
            <mesh position={[pos[0] * 0.5, 0, pos[2] * 0.5]} rotation={[0, Math.atan2(pos[0], pos[2]), 0]}>
              <boxGeometry args={[0.08, 0.05, 0.4]} />
              <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
            </mesh>
            {/* Motor housing */}
            <mesh position={pos as [number, number, number]}>
              <cylinderGeometry args={[0.06, 0.06, 0.08, 8]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
            </mesh>
            {/* Propeller */}
            <Propeller position={[pos[0], 0.05, pos[2]]} />
            {/* LED indicator */}
            <mesh position={[pos[0], -0.03, pos[2]]}>
              <sphereGeometry args={[0.015, 8, 8]} />
              <meshStandardMaterial 
                color={i < 2 ? "#ef4444" : "#22c55e"} 
                emissive={i < 2 ? "#ef4444" : "#22c55e"} 
                emissiveIntensity={1} 
              />
            </mesh>
          </group>
        ))}
        
        {/* Multispectral sensor array */}
        <group position={[0, -0.08, 0]}>
          {[-0.08, 0, 0.08].map((x, i) => (
            <mesh key={i} position={[x, 0, 0.2]}>
              <boxGeometry args={[0.04, 0.02, 0.04]} />
              <meshStandardMaterial 
                color={['#ef4444', '#22c55e', '#3b82f6'][i]} 
                emissive={['#ef4444', '#22c55e', '#3b82f6'][i]} 
                emissiveIntensity={0.3} 
              />
            </mesh>
          ))}
        </group>
        
        {/* Scanning beam effect */}
        <mesh position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.4, 0.5, 32, 1, true]} />
          <meshStandardMaterial 
            color="#0ea5e9" 
            transparent 
            opacity={0.15} 
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

interface DroneSceneProps {
  className?: string;
}

const DroneScene = ({ className }: DroneSceneProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 1.5, 3], fov: 35 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 2, -3]} color="#0ea5e9" intensity={0.5} />
        <pointLight position={[3, 2, 3]} color="#22c55e" intensity={0.3} />
        
        <DroneModel isHovered={isHovered} />
      </Canvas>
      
      {/* Control UI overlay */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {[
          { label: '↑ Throttle' },
          { label: '↔ Yaw' },
          { label: '← Roll' },
          { label: '→ Pitch' },
        ].map((ctrl, i) => (
          <div 
            key={i}
            className="px-3 py-1.5 bg-cyan-500/15 border border-cyan-500/35 text-cyan-200 text-xs rounded-lg backdrop-blur-md"
          >
            {ctrl.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneScene;
