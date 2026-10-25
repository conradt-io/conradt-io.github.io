import { useEffect, useRef } from "react";
import * as THREE from "three";

const TEAL = new THREE.Color("#3fd4e6");
const BLUE = new THREE.Color("#2f7dff");
const GOLD = new THREE.Color("#ffc46b");

const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

function glowTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const context = canvas.getContext("2d");

  if (!context) return null;

  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.25, "rgba(255,255,255,0.75)");
  gradient.addColorStop(0.6, "rgba(255,255,255,0.12)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function points(
  positions: number[],
  colors: number[],
  size: number,
  opacity: number,
  sprite: THREE.Texture,
) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size,
    map: sprite,
    vertexColors: true,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  return new THREE.Points(geometry, material);
}

function buildHelix(sprite: THREE.Texture) {
  const group = new THREE.Group();
  const LENGTH = 136;
  const RADIUS = 8.5;
  const TURNS = 5;
  const PER_STRAND = 3600;
  const strand: number[] = [];
  const strandColors: number[] = [];
  const rungs: number[] = [];
  const rungPoints: number[] = [];
  const rungColors: number[] = [];
  const sparks: number[] = [];
  const sparkColors: number[] = [];

  const at = (t: number, phase: number) => {
    const angle = t * TURNS * Math.PI * 2 + phase;
    return [Math.cos(angle) * RADIUS, (t - 0.5) * LENGTH, Math.sin(angle) * RADIUS];
  };

  for (const phase of [0, Math.PI]) {
    for (let i = 0; i < PER_STRAND; i += 1) {
      const t = i / PER_STRAND;
      const [x, y, z] = at(t, phase);
      const spread = 0.45;
      strand.push(x + gauss() * spread, y + gauss() * spread, z + gauss() * spread);
      const color = TEAL.clone()
        .lerp(BLUE, 0.5 + 0.5 * Math.sin(t * 9 + phase))
        .multiplyScalar(0.9 + Math.random() * 0.6);
      strandColors.push(color.r, color.g, color.b);

      if (Math.random() < 0.012) {
        sparks.push(x, y, z);
        sparkColors.push(GOLD.r, GOLD.g, GOLD.b);
      }
    }
  }

  const RUNGS = Math.round(TURNS * 10);
  for (let i = 0; i <= RUNGS; i += 1) {
    const t = i / RUNGS;
    const a = at(t, 0);
    const b = at(t, Math.PI);
    rungs.push(...a, ...b);

    for (let k = 1; k < 12; k += 1) {
      const f = k / 12;
      rungPoints.push(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f);
      const color = BLUE.clone().lerp(TEAL, f);
      rungColors.push(color.r, color.g, color.b);
    }
  }

  group.add(points(strand, strandColors, 0.8, 1, sprite));
  group.add(points(rungPoints, rungColors, 0.5, 0.75, sprite));

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(rungs, 3));
  group.add(
    new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        color: TEAL,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    ),
  );

  const sparkPoints = points(sparks, sparkColors, 2.2, 1, sprite);
  group.add(sparkPoints);
  return { group, sparkPoints };
}

function buildDust(sprite: THREE.Texture) {
  const positions: number[] = [];
  const colors: number[] = [];

  for (let i = 0; i < 1600; i += 1) {
    positions.push((Math.random() - 0.5) * 150, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 60 - 10);
    const color = (Math.random() < 0.15 ? GOLD : TEAL.clone().lerp(BLUE, Math.random())).clone().multiplyScalar(0.5 + Math.random() * 0.5);
    colors.push(color.r, color.g, color.b);
  }

  return points(positions, colors, 0.4, 0.7, sprite);
}

function buildBokeh(sprite: THREE.Texture) {
  const positions: number[] = [];
  const colors: number[] = [];

  for (let i = 0; i < 42; i += 1) {
    positions.push((Math.random() - 0.5) * 155, (Math.random() - 0.5) * 100, -25 - Math.random() * 40);
    const color = (Math.random() < 0.35 ? GOLD : BLUE).clone().multiplyScalar(0.45);
    colors.push(color.r, color.g, color.b);
  }

  return points(positions, colors, 9, 0.45, sprite);
}

export const HelixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sprite = glowTexture();
    if (!canvas || !sprite) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0c0e, 0.008);
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 400);
    camera.position.set(0, 0, 46);

    const { group: helix, sparkPoints } = buildHelix(sprite);
    const tilt = new THREE.Group();
    tilt.rotation.set(0.3, 0, -1.05);
    tilt.position.set(2, 0, 0);
    tilt.add(helix);

    const dust = buildDust(sprite);
    const bokeh = buildBokeh(sprite);
    scene.add(tilt, dust, bokeh);

    const resize = () => {
      const width = canvas.clientWidth || 1;
      const height = canvas.clientHeight || 1;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    let time = 0;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += dt;
      helix.rotation.y += dt * 0.22;
      tilt.rotation.z = -1.05 + Math.sin(time * 0.08) * 0.05;
      dust.rotation.y += dt * 0.012;
      dust.position.y = Math.sin(time * 0.1) * 1.5;
      bokeh.position.x = Math.sin(time * 0.05) * 3;
      (sparkPoints.material as THREE.PointsMaterial).size = 2 + Math.sin(time * 2.1) * 0.6;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };

    const run = () => {
      if (!raf && !reducedMotion && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    const pause = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? pause() : run());

    document.addEventListener("visibilitychange", onVisibility);
    run();

    return () => {
      pause();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      scene.traverse((object) => {
        const mesh = object as THREE.Object3D & { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] };
        mesh.geometry?.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => material.dispose());
        } else {
          mesh.material?.dispose();
        }
      });
      sprite.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#090a0d]">
      <canvas ref={canvasRef} className="h-full w-full opacity-90" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(63,212,230,0.08),transparent_34%),linear-gradient(90deg,rgba(9,10,13,0.72),rgba(9,10,13,0.18)_50%,rgba(9,10,13,0.76))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,10,13,0.28),rgba(9,10,13,0.5))]" />
    </div>
  );
};
