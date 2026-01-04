"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            positions.set([x, y, z], i * 3);
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
        }
    });

    return (
        <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffda1a"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function GlowingSphere() {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
            ref.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime()) * 0.05);
        }
    });

    return (
        <mesh ref={ref} position={[0, 0, 0]}>
            <icosahedronGeometry args={[2, 1]} />
            <meshBasicMaterial
                color="#ffda1a"
                wireframe
                transparent
                opacity={0.2}
            />
        </mesh>
    );
}

export default function ParticleBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.5} />
                <ParticleField />
                <GlowingSphere />
            </Canvas>
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900 pointer-events-none" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
        </div>
    );
}
