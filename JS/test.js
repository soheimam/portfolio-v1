// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 30;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Cube Mesh with basic material
var geometry = new THREE.ConeGeometry( 5, 20, 32, false );
var material = new THREE.MeshBasicMaterial( {
    color: 0xffff00,
    wireframe: true
} );
var cone = new THREE.Mesh( geometry, material );
scene.add( cone );




// Render Loop
var render = function () {
  requestAnimationFrame( render );

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();