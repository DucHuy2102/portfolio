'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedBlob() {
    const materialRef = useRef(null);
    const [hue, setHue] = useState(0);

    useFrame(() => {
        const newHue = (hue + 0.2) % 360;
        setHue(newHue);
        if (materialRef.current) {
            materialRef.current.color = new THREE.Color(`hsl(${newHue}, 70%, 50%)`);
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial ref={materialRef} distort={0.5} speed={2} />
        </Sphere>
    );
}

export default function Shape() {
    return (
        <Canvas>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />
            <AnimatedBlob />
        </Canvas>
    );
}
