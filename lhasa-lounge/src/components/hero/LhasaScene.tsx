import { ContactShadows, Environment, Float, OrbitControls, Sparkles, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";

useGLTF.preload("/ramen/scene.gltf");

/* ─── GLTF Ramen Model with High-Performance Zero-Stutter Interaction ─── */
function RamenModel({
  onPointerActive,
}: {
  onPointerActive: (active: boolean) => void;
}) {
  const { scene } = useGLTF("/ramen/scene.gltf");
  const modelGroup = useRef<Group>(null);
  const containerGroup = useRef<Group>(null);

  // Use refs for animation states to completely avoid React re-renders during mouse hover/movement
  const isHovered = useRef(false);
  const hoverFactor = useRef(0);
  const bounceFactor = useRef(0);
  const clickCount = useRef(0);

  // Clone scene so it can be safely manipulated
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        // If material exists, refine tone & opacity
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.depthWrite = true;
          mat.transparent = mesh.name.toLowerCase().includes("smoke");
          if (mat.transparent) {
            mat.opacity = 0.85;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  // Click / Tap elastic bounce handler
  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    bounceFactor.current = 1.0;
    clickCount.current += 1;
  };

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    isHovered.current = true;
    onPointerActive(true);
  };

  const handlePointerOut = () => {
    isHovered.current = false;
    onPointerActive(false);
  };

  useFrame((state, delta) => {
    if (!modelGroup.current || !containerGroup.current) return;

    // 1. Smoothly interpolate hover state with exponential damping (zero stutter)
    const targetHover = isHovered.current ? 1 : 0;
    hoverFactor.current = THREE.MathUtils.damp(hoverFactor.current, targetHover, 8, delta);

    // 2. Smoothly decay bounce factor
    if (bounceFactor.current > 0.001) {
      bounceFactor.current = THREE.MathUtils.damp(bounceFactor.current, 0, 4.5, delta);
    }

    // 3. Squash and stretch bounce calculation
    const bounceSin = Math.sin(bounceFactor.current * Math.PI * 3.5) * bounceFactor.current;
    const baseScale = 9.5;
    const hoverScale = 1 + hoverFactor.current * 0.05;
    const currentScaleY = baseScale * hoverScale * (1 - bounceSin * 0.08);
    const currentScaleXZ = baseScale * hoverScale * (1 + bounceSin * 0.05);

    modelGroup.current.scale.set(currentScaleXZ, currentScaleY, currentScaleXZ);

    // 4. Parallax tilt towards cursor (smoothed to eliminate jitter)
    const targetTiltX = 0.28 - state.pointer.y * 0.16;
    const targetTiltZ = -state.pointer.x * 0.14;

    modelGroup.current.rotation.x = THREE.MathUtils.damp(
      modelGroup.current.rotation.x,
      targetTiltX,
      6,
      delta
    );
    modelGroup.current.rotation.z = THREE.MathUtils.damp(
      modelGroup.current.rotation.z,
      targetTiltZ,
      6,
      delta
    );

    // 5. Subtle ambient floating rotation
    const ambientFloat = Math.sin(state.clock.elapsedTime * 0.4) * 0.18;
    containerGroup.current.rotation.y = ambientFloat;
  });

  return (
    <Float floatIntensity={0.2} rotationIntensity={0.08} speed={1.3}>
      <group ref={containerGroup} position={[1.35, -0.3, 0]}>
        {/* Invisible hit proxy sphere: Prevents rapid re-triggering across sub-mesh boundaries */}
        <mesh
          position={[0, 0, 0]}
          onPointerDown={handlePointerDown}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={false}
        >
          <sphereGeometry args={[2.5, 16, 16]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>

        <group ref={modelGroup} position={[0, 0, 0]}>
          {/* Center model vertically around pivot */}
          <primitive object={clonedScene} position={[0, -0.18, 0]} />
        </group>
      </group>
    </Float>
  );
}

/* ─── Ambient Backdrop Elements ─── */
const flagColors = ["#2f6fbd", "#f5eee0", "#d74432", "#2d8d74", "#f0b746"];

function PrayerFlags() {
  return (
    <group position={[-1.35, 1.78, -1]} rotation={[0.08, 0.16, -0.06]}>
      {flagColors.map((color, index) => (
        <mesh key={color} position={[index * 0.55, Math.sin(index * 0.7) * 0.08, 0]}>
          <planeGeometry args={[0.36, 0.44]} />
          <meshStandardMaterial color={color} roughness={0.75} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <mesh position={[1.1, 0.22, -0.01]} rotation={[0, 0, Math.PI / 2]} scale={[0.01, 1.35, 0.01]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <meshStandardMaterial color="#ead6aa" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Lantern() {
  return (
    <Float floatIntensity={0.36} rotationIntensity={0.2} speed={1.6}>
      <group position={[-2.1, -0.2, 0.4]} rotation={[0.04, 0.36, -0.08]}>
        <mesh castShadow scale={[0.45, 0.62, 0.45]}>
          <sphereGeometry args={[1, 36, 24]} />
          <meshStandardMaterial
            color="#d74836"
            roughness={0.45}
            emissive="#721410"
            emissiveIntensity={0.55}
          />
        </mesh>
        <mesh position={[0, 0.66, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.34, 0.028, 12, 42]} />
          <meshStandardMaterial color="#f2bd54" roughness={0.3} metalness={0.35} />
        </mesh>
        <mesh position={[0, -0.66, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.34, 0.028, 12, 42]} />
          <meshStandardMaterial color="#f2bd54" roughness={0.3} metalness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

function MountainSilhouette() {
  return (
    <group position={[0.75, -1.35, -2.8]} rotation={[0, -0.08, 0]}>
      <mesh position={[-1.4, 0.65, 0]} rotation={[0, 0, 0.08]} scale={[2, 1.5, 0.2]}>
        <coneGeometry args={[1, 1.7, 4]} />
        <meshStandardMaterial color="#4a1f2c" roughness={0.95} />
      </mesh>
      <mesh position={[0.15, 0.8, -0.15]} rotation={[0, 0, -0.06]} scale={[2.3, 1.7, 0.2]}>
        <coneGeometry args={[1, 1.9, 4]} />
        <meshStandardMaterial color="#1a3835" roughness={0.95} />
      </mesh>
      <mesh position={[1.65, 0.58, -0.22]} rotation={[0, 0, -0.1]} scale={[1.8, 1.35, 0.2]}>
        <coneGeometry args={[1, 1.55, 4]} />
        <meshStandardMaterial color="#54361c" roughness={0.95} />
      </mesh>
    </group>
  );
}

/* ─── Main LhasaScene Canvas Component ─── */
export default function LhasaScene() {
  const isInteracting = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const handleInteractionStart = () => {
    isInteracting.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleInteractionEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      isInteracting.current = false;
    }, 2200);
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 1.1, 5.8], fov: 40 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
        }}
        shadows
        onPointerDown={handleInteractionStart}
        onPointerUp={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {/* Lights */}
        <ambientLight intensity={1.4} />
        <directionalLight color="#fff5db" intensity={2.8} position={[2.8, 4.8, 3.4]} castShadow />
        <pointLight color="#e04e38" intensity={24} position={[-2.4, 0.4, 1.5]} distance={5.4} />
        <spotLight
          angle={0.55}
          color="#ffd68a"
          intensity={38}
          penumbra={0.75}
          position={[1.3, 4.6, 3.5]}
          castShadow
        />

        {/* Backdrop */}
        <MountainSilhouette />
        <PrayerFlags />
        <Lantern />

        {/* 3D GLTF Ramen Bowl with Suspense Fallback */}
        <Suspense fallback={null}>
          <RamenModel onPointerActive={(active) => { isInteracting.current = active; }} />
        </Suspense>

        {/* Floating golden culinary embers */}
        <Sparkles
          color="#f7d27d"
          count={38}
          opacity={0.35}
          scale={[5.4, 2.8, 2.2]}
          size={1.8}
          speed={0.3}
        />

        {/* Realistic contact shadow beneath bowl */}
        <ContactShadows
          blur={2.8}
          far={4.2}
          opacity={0.5}
          position={[1.35, -1.55, 0]}
          scale={7.5}
        />

        <Environment preset="city" />

        {/* OrbitControls for smooth drag & touch rotation */}
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.06}
          rotateSpeed={0.85}
          autoRotate
          autoRotateSpeed={0.45}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.95}
          minPolarAngle={Math.PI / 4.2}
          onStart={handleInteractionStart}
          onEnd={handleInteractionEnd}
        />
      </Canvas>

      {/* Interactive prompt badge */}
      <div className="hero-interactive-cue" aria-hidden="true">
        <span>✦ Drag or tap bowl to interact ✦</span>
      </div>
    </div>
  );
}
