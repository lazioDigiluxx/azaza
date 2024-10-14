// src/Fireflies.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Firefly = () => {
  const pointsRef = useRef();
  const velocities = useRef([]);

  const count = 500; // Number of fireflies

  // Create firefly particles
  useEffect(() => {
    const positions = new Float32Array(count * 3); // x, y, z for each firefly
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // X position
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y position
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z position
      velocities.current.push(new THREE.Vector3((Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1));
    }
    pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, []);

  // Update firefly positions to simulate movement
  useFrame(() => {
    const positions = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities.current[i].x;
      positions[i * 3 + 1] += velocities.current[i].y;
      positions[i * 3 + 2] += velocities.current[i].z;

      // Bounce back if out of bounds
      if (positions[i * 3] > 5 || positions[i * 3] < -5) velocities.current[i].x *= -1;
      if (positions[i * 3 + 1] > 5 || positions[i * 3 + 1] < -5) velocities.current[i].y *= -1;
      if (positions[i * 3 + 2] > 5 || positions[i * 3 + 2] < -5) velocities.current[i].z *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05} // Size of each firefly
        color={0xffff00} // Firefly color
        transparent
        opacity={0.8} // Firefly opacity
      />
    </points>
  );
};

const Fireflies = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} // Fill the entire background
    >
      <Firefly />
    </Canvas>
  );
};

export default Fireflies;
