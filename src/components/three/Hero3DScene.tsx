"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Hero3DFallback } from "./Hero3DFallback";

export const Hero3DScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check if WebGL is supported
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.6, 3.8);
    camera.lookAt(0, 0, 0);

    // 3. Renderer Setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // 4. Lighting System (Warm, Academic Ivory and Amber palette)
    const ambientLight = new THREE.AmbientLight(0xfdfbf7, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff3db, 1.6);
    keyLight.position.set(2.5, 4, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd97706, 0.6); // Subtle warm saffron bounce
    fillLight.position.set(-3, -1, 2);
    scene.add(fillLight);

    // 5. Stylized 3D Book & Learning Object Composition
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Materials
    const coverMaterial = new THREE.MeshStandardMaterial({
      color: 0x143d2b, // Deep Academic Green
      roughness: 0.4,
      metalness: 0.05,
    });

    const pagesMaterial = new THREE.MeshStandardMaterial({
      color: 0xfaf6ee, // Warm Ivory / Cream
      roughness: 0.6,
      metalness: 0.02,
    });

    const goldTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Saffron Gold
      roughness: 0.3,
      metalness: 0.4,
    });

    const woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x8c6d46, // Sandstone / Earth tone
      roughness: 0.5,
    });

    // A. Left & Right Book Covers
    const coverGeo = new THREE.BoxGeometry(1.2, 0.06, 1.6);
    const leftCover = new THREE.Mesh(coverGeo, coverMaterial);
    leftCover.position.set(-0.62, -0.05, 0);
    leftCover.rotation.z = 0.12;
    rootGroup.add(leftCover);

    const rightCover = new THREE.Mesh(coverGeo, coverMaterial);
    rightCover.position.set(0.62, -0.05, 0);
    rightCover.rotation.z = -0.12;
    rootGroup.add(rightCover);

    // B. Left & Right Page Blocks
    const pageBlockGeo = new THREE.BoxGeometry(1.15, 0.14, 1.5);
    const leftPages = new THREE.Mesh(pageBlockGeo, pagesMaterial);
    leftPages.position.set(-0.6, 0.04, 0);
    leftPages.rotation.z = 0.12;
    rootGroup.add(leftPages);

    const rightPages = new THREE.Mesh(pageBlockGeo, pagesMaterial);
    rightPages.position.set(0.6, 0.04, 0);
    rightPages.rotation.z = -0.12;
    rootGroup.add(rightPages);

    // C. Book Spine & Gold Ribbon Bookmark
    const spineGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.62, 16);
    const spine = new THREE.Mesh(spineGeo, coverMaterial);
    spine.rotation.x = Math.PI / 2;
    spine.position.set(0, -0.07, 0);
    rootGroup.add(spine);

    const ribbonGeo = new THREE.BoxGeometry(0.12, 0.02, 1.8);
    const ribbon = new THREE.Mesh(ribbonGeo, goldTrimMaterial);
    ribbon.position.set(0.08, 0.15, 0.1);
    ribbon.rotation.y = 0.05;
    rootGroup.add(ribbon);

    // D. Minimalist Educational Pencil
    const pencilGroup = new THREE.Group();
    const pencilBodyGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.2, 6);
    const pencilBody = new THREE.Mesh(pencilBodyGeo, goldTrimMaterial);
    pencilGroup.add(pencilBody);

    const pencilTipGeo = new THREE.ConeGeometry(0.04, 0.15, 6);
    const pencilTip = new THREE.Mesh(pencilTipGeo, woodMaterial);
    pencilTip.position.set(0, 0.67, 0);
    pencilGroup.add(pencilTip);

    pencilGroup.position.set(0.7, 0.25, 0.5);
    pencilGroup.rotation.set(0.3, 0.2, -0.7);
    rootGroup.add(pencilGroup);

    // Soft initial angle
    rootGroup.rotation.x = 0.45;
    rootGroup.rotation.y = -0.2;

    setIsLoaded(true);

    // 6. Interactive Pointer Micro-tilt
    let targetRotY = -0.2;
    let targetRotX = 0.45;

    const handlePointerMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      // Strict limit: 1 to 3 degrees max
      targetRotY = -0.2 + x * 0.06;
      targetRotX = 0.45 - y * 0.04;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // 7. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const elapsedTime = clock.getElapsedTime();
        // Gentle subtle floating motion
        rootGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.04;

        // Smooth interpolation to target tilt
        rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
        rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 9. Cleanup
    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries and Materials to prevent memory leaks
      coverGeo.dispose();
      pageBlockGeo.dispose();
      spineGeo.dispose();
      ribbonGeo.dispose();
      pencilBodyGeo.dispose();
      pencilTipGeo.dispose();

      coverMaterial.dispose();
      pagesMaterial.dispose();
      goldTrimMaterial.dispose();
      woodMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return <Hero3DFallback />;
  }

  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-academic-green/15 bg-gradient-to-br from-canvas-surface via-canvas-surface to-amber-50/30 flex items-center justify-center">
      <div
        ref={mountRef}
        className={`w-full h-full cursor-default transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Visual Accent Monogram Tag */}
      <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-canvas-surface/95 backdrop-blur-md p-3 rounded-2xl border border-academic-green/15 shadow-elevated flex items-center gap-2.5 z-10 pointer-events-none">
        <div className="w-8 h-8 rounded-xl bg-academic-green text-canvas flex items-center justify-center font-serif font-bold text-xs">
          SD
        </div>
        <div>
          <p className="font-serif font-semibold text-xs text-academic-green leading-none mb-0.5">
            Spring Dales Academy
          </p>
          <p className="text-[10px] text-charcoal-subtle">
            Nursery to Class 5 • Tekar, Patawa
          </p>
        </div>
      </div>
    </div>
  );
};
