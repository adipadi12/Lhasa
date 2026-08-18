import { ContactShadows, Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type Vec3 = [number, number, number];

const flagColors = ["#d74432", "#f0b746", "#2d8d74", "#2f6fbd", "#f5eee0"];

const pleatAngles = [-0.72, -0.5, -0.28, -0.07, 0.14, 0.35, 0.56, 0.77];

const steamColumns = [
  { x: -0.55, delay: 0 },
  { x: 0.05, delay: 0.9 },
  { x: 0.58, delay: 1.7 },
];

function Momo({
  position,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: Vec3;
  rotation?: Vec3;
  scale?: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh castShadow receiveShadow scale={[1.05, 0.78, 0.86]}>
        <sphereGeometry args={[0.62, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f7dfbd" roughness={0.72} />
      </mesh>
      {pleatAngles.map((angle) => (
        <mesh
          castShadow
          key={angle}
          position={[Math.sin(angle) * 0.46, 0.22, Math.cos(angle) * 0.18 + 0.08]}
          rotation={[0.08, angle, Math.sin(angle) * 0.45]}
          scale={[0.035, 0.25, 0.035]}
        >
          <cylinderGeometry args={[1, 1, 1, 12]} />
          <meshStandardMaterial color="#e8c99e" roughness={0.82} />
        </mesh>
      ))}
      <mesh castShadow position={[0, 0.5, 0.06]} scale={[0.22, 0.13, 0.22]}>
        <sphereGeometry args={[1, 24, 12]} />
        <meshStandardMaterial color="#e7c293" roughness={0.78} />
      </mesh>
    </group>
  );
}

function SteamColumn({ x, delay }: { x: number; delay: number }) {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    const t = clock.elapsedTime + delay;
    group.current.position.y = 0.75 + Math.sin(t * 1.2) * 0.1;
    group.current.rotation.z = Math.sin(t * 0.8) * 0.12;
    group.current.scale.setScalar(0.9 + Math.sin(t) * 0.06);
  });

  return (
    <group ref={group} position={[x, 0.7, 0.1]}>
      {[0, 1, 2].map((segment) => (
        <mesh
          key={segment}
          position={[Math.sin(segment) * 0.12, segment * 0.42, 0]}
          rotation={[Math.PI / 2.25, 0, Math.sin(segment + delay) * 0.7]}
          scale={[0.14 + segment * 0.035, 0.018, 0.14 + segment * 0.035]}
        >
          <torusGeometry args={[1, 0.18, 12, 36]} />
          <meshStandardMaterial color="#fff5de" opacity={0.23 - segment * 0.04} transparent />
        </mesh>
      ))}
    </group>
  );
}

function BambooSteamer() {
  return (
    <group position={[0.15, -0.74, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.22, 0]}>
        <cylinderGeometry args={[1.72, 1.56, 0.42, 96]} />
        <meshStandardMaterial color="#c58a46" roughness={0.58} metalness={0.04} />
      </mesh>
      <mesh castShadow position={[0, 0.47, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.08, 24, 96]} />
        <meshStandardMaterial color="#f0bc72" roughness={0.42} />
      </mesh>
      <mesh receiveShadow position={[0, 0.49, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.58, 1.58, 0.04, 96]} />
        <meshStandardMaterial color="#d8a65b" roughness={0.7} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, -0.08, 0]}>
        <cylinderGeometry args={[1.56, 1.84, 0.54, 96]} />
        <meshStandardMaterial color="#a86237" roughness={0.62} metalness={0.03} />
      </mesh>
      <mesh castShadow position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.54, 0.06, 24, 96]} />
        <meshStandardMaterial color="#7d3a28" roughness={0.5} />
      </mesh>
    </group>
  );
}

function HeroFood() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.32) * 0.18;
  });

  return (
    <Float floatIntensity={0.24} rotationIntensity={0.1} speed={1.35}>
      <group ref={group} position={[1.55, -0.18, 0]} rotation={[0.04, -0.42, 0]}>
        <BambooSteamer />
        <Momo position={[-0.72, 0.02, 0.28]} rotation={[0, -0.46, 0.04]} scale={1.15} />
        <Momo position={[0.08, 0.09, 0.48]} rotation={[0.02, 0.08, -0.04]} scale={1.22} />
        <Momo position={[0.77, 0.03, 0.2]} rotation={[0, 0.42, -0.02]} scale={1.1} />
        <Momo position={[-0.16, 0.15, -0.32]} rotation={[0.02, -0.1, 0.05]} scale={1.04} />
        {steamColumns.map((column) => (
          <SteamColumn key={column.x} x={column.x} delay={column.delay} />
        ))}
      </group>
    </Float>
  );
}

function PrayerFlags() {
  return (
    <group position={[-1.25, 1.72, -0.9]} rotation={[0.08, 0.14, -0.06]}>
      {flagColors.map((color, index) => (
        <mesh key={color} position={[index * 0.52, Math.sin(index * 0.7) * 0.08, 0]}>
          <planeGeometry args={[0.34, 0.42]} />
          <meshStandardMaterial color={color} roughness={0.75} side={2} />
        </mesh>
      ))}
      <mesh position={[1.03, 0.21, -0.01]} rotation={[0, 0, Math.PI / 2]} scale={[0.01, 1.22, 0.01]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshStandardMaterial color="#ead6aa" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Lantern() {
  return (
    <Float floatIntensity={0.36} rotationIntensity={0.2} speed={1.6}>
      <group position={[-1.9, -0.3, 0.35]} rotation={[0.04, 0.36, -0.08]}>
        <mesh castShadow scale={[0.43, 0.58, 0.43]}>
          <sphereGeometry args={[1, 36, 24]} />
          <meshStandardMaterial color="#d74836" roughness={0.48} emissive="#5f100d" emissiveIntensity={0.45} />
        </mesh>
        <mesh position={[0, 0.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.32, 0.025, 12, 42]} />
          <meshStandardMaterial color="#f2bd54" roughness={0.32} metalness={0.25} />
        </mesh>
        <mesh position={[0, -0.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.32, 0.025, 12, 42]} />
          <meshStandardMaterial color="#f2bd54" roughness={0.32} metalness={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

function MountainSilhouette() {
  return (
    <group position={[0.75, -1.25, -2.65]} rotation={[0, -0.08, 0]}>
      <mesh position={[-1.3, 0.65, 0]} rotation={[0, 0, 0.08]} scale={[1.9, 1.45, 0.2]}>
        <coneGeometry args={[1, 1.7, 4]} />
        <meshStandardMaterial color="#6b3141" roughness={0.9} />
      </mesh>
      <mesh position={[0.1, 0.78, -0.15]} rotation={[0, 0, -0.06]} scale={[2.2, 1.65, 0.2]}>
        <coneGeometry args={[1, 1.9, 4]} />
        <meshStandardMaterial color="#244d4a" roughness={0.92} />
      </mesh>
      <mesh position={[1.55, 0.58, -0.22]} rotation={[0, 0, -0.1]} scale={[1.7, 1.28, 0.2]}>
        <coneGeometry args={[1, 1.55, 4]} />
        <meshStandardMaterial color="#7a5229" roughness={0.9} />
      </mesh>
    </group>
  );
}

export default function LhasaScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.05, 6.3], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      shadows
    >
      <ambientLight intensity={1.2} />
      <directionalLight color="#fff0c2" intensity={2.2} position={[2.4, 4, 3]} castShadow />
      <pointLight color="#d84a35" intensity={18} position={[-2.25, 0.25, 1.2]} distance={4.8} />
      <spotLight
        angle={0.45}
        color="#f5c874"
        intensity={32}
        penumbra={0.7}
        position={[0, 4.2, 3.2]}
        castShadow
      />
      <MountainSilhouette />
      <PrayerFlags />
      <Lantern />
      <HeroFood />
      <Sparkles color="#f7d27d" count={34} opacity={0.35} scale={[5, 2.4, 2]} size={1.6} speed={0.25} />
      <ContactShadows blur={2.8} far={3.6} opacity={0.4} position={[1.65, -1.35, 0]} scale={5.4} />
      <Environment preset="city" />
      <OrbitControls autoRotate autoRotateSpeed={0.45} enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2.05} />
    </Canvas>
  );
}
