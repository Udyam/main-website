import React from 'react';
import { useEffect } from 'react';
import { memo } from 'react';
import ThreeGlobe from 'three-globe';
import { WebGLRenderer, Scene } from 'three';
import { PerspectiveCamera, AmbientLight, Color, PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import countries from './files/globe-data-min.json';
import travelHistory from './files/my-flights.json';
var renderer, camera, scene, controls;
var Globe;

const eGlobe = memo(() => {
  useEffect(() => {
    init();
    initGlobe();
    animate();

    // SECTION Initializing core ThreeJS elements
    function init() {
      // Initialize renderer
      renderer = new WebGLRenderer({ antialias: false, alpha: true, canvas: document.querySelector('canvas') });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Initialize scene, light
      scene = new Scene();
      scene.add(new AmbientLight(0xbbbbbb, 0.3));

      // Initialize camera, light
      camera = new PerspectiveCamera();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      var dLight = new PointLight(0xffffff, 0.5);
      dLight.position.set(-500, 500, 800);
      camera.add(dLight);

      var dLight2 = new PointLight(0x16537e, 0.5);
      dLight2.position.set(-200, 500, 200);
      camera.add(dLight2);

      camera.position.z = 210;
      camera.position.x = 0;
      camera.position.y = 250;

      scene.add(camera);

      // Initialize controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = false;
      controls.dynamicDampingFactor = 0.01;
      controls.minDistance = 210;
      controls.maxDistance = 210;
      controls.rotateSpeed = 0.3;
      controls.autoRotate = true;
      controls.minPolarAngle = Math.PI / 3.5;
      controls.maxPolarAngle = Math.PI - Math.PI / 3;
    }

    // SECTION Globe
    function initGlobe() {
      // Initialize the Globe
      Globe = new ThreeGlobe({
        waitForGlobeReady: false,
        animateIn: false
      })
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.6)
        .hexPolygonColor(() => {
          return 'rgba(255,255,255, 1)';
        });

      // NOTE Arc animations are followed after the globe enters the scene
      setTimeout(() => {
        Globe.arcsData(travelHistory.flights)
          .arcColor((e) => {
            return e.status ? '#ffffff' : '#ffffff';
          })
          .arcAltitude((e) => {
            return e.arcAlt;
          })
          .arcStroke((e) => {
            return e.status ? 0.5 : 0.3;
          })
          .arcDashLength(0.9)
          .arcDashGap(4)
          .arcDashAnimateTime(2000)
          .arcsTransitionDuration(2000)
          .arcDashInitialGap((e) => e.order * 1)
          .labelDotRadius(0.3)
          .labelSize((e) => e.size)
          .labelText('city')
          .labelResolution(6)
          .pointColor(() => '#ffffff')
          .pointsMerge(true)
          .pointAltitude(0.07)
          .pointRadius(0.05);
      }, 1000);

      const globeMaterial = Globe.globeMaterial();
      // globe colour
      globeMaterial.color = new Color(0x3a228a);
      // globe colour
      globeMaterial.emissive = new Color(0x220038);
      globeMaterial.emissiveIntensity = 0.1;
      globeMaterial.shininess = 0.5;

      scene.add(Globe);
    }

    function animate() {
      camera.lookAt(scene.position);
      if (window.innerWidth <= 800) {
        controls.minDistance = 270;
        controls.maxDistance = 270;
        camera.position.y = 100;
      }
      if (window.innerWidth <= 900 && window.innerWidth > 800) {
        controls.minDistance = 270;
        controls.maxDistance = 270;
        camera.position.y = 100;
      }
      // if (window.innerWidth <= 950 && window.innerWidth > 900) {
      //   controls.minDistance = 400;
      //   controls.maxDistance = 400;
      //   camera.position.y = 100;
      // }
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
  });
  return (
    <div id="globe-div">
      <canvas id="globe"></canvas>
    </div>
  );
});

eGlobe.displayName = 'eGlobe';

export default eGlobe;
