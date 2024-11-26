import { Component, OnInit, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-globe',
  standalone: true,
  imports: [],
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css']
})
export class GlobeComponent implements OnInit {
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private renderer: THREE.WebGLRenderer | undefined;
  private sphere: THREE.Mesh | undefined;
  private controls: OrbitControls | undefined;

  ngOnInit() {
    this.initScene();
    this.animate();
    window.addEventListener('resize', () => this.onWindowResize());
  }

  private initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globeContainer')!.appendChild(this.renderer.domElement); 

    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("../../assets/images/OIP.jpg", () => {
      this.renderer?.render(this.scene!, this.camera!); 
    });

    const material = new THREE.MeshPhongMaterial({ map: texture });

    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    // Add a directional light to illuminate the globe
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5).normalize();
    this.scene.add(light);

    // Initialize OrbitControls for interactivity
    this.controls = new OrbitControls(this.camera!, this.renderer!.domElement);
    this.controls.enableDamping = true; 
    this.controls.dampingFactor = 0.25;
    this.controls.screenSpacePanning = false;
    this.controls.maxPolarAngle = Math.PI; 
    this.controls.minDistance = 2; 
    this.controls.maxDistance = 10; 
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.controls!.update();
    this.sphere!.rotation.y += 0.005; 
    this.renderer!.render(this.scene!, this.camera!);
  }

  private onWindowResize() {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
}
