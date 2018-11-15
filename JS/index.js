// setting up our scene we need to  set up 
const scene = new THREE.Scene();

// create a camera to capture the scene
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);

// renderer and we set anti alias to true to avoid JAGGIES ...lol
const renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const sectionTag = document.querySelector('section')
sectionTag.appendChild(renderer.domElement)

				// LIGHTS
                var intensity = 5.5;
				var distance = 50;
                var decay = 2.0;
                
				var c1 = 0x00ffa1, c2 = 0xbf00ff, c3 = 0x9400ff;
				var sphere = new THREE.SphereBufferGeometry( 0.50, 16, 8 );
				light1 = new THREE.PointLight( c1, intensity, distance, decay );
				light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c1 } ) ) );
				scene.add( light1 );
				light2 = new THREE.PointLight( c2, intensity, distance, decay );
				light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c2 } ) ) );
				scene.add( light2 );
				light3 = new THREE.PointLight( c3, intensity, distance, decay );
				light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c3 } ) ) );
				scene.add( light3 );



				// GROUND
				var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
				var groundMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
				groundMat.color.setHSL( 0.095, 1, 0.75 );
				var ground = new THREE.Mesh( groundGeo, groundMat );
				ground.rotation.x = - Math.PI / 2;
				ground.position.y = - 33;
				scene.add( ground );
				

//creating the objects required for the scene

var geometry = new THREE.BoxGeometry( 5, 5, 5,10,7,3 );
var material = new THREE.MeshNormalMaterial( {
    wireframe: true,
} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

cube.position.y = 0
cube.position.x = -10

// cone
var geometry = new THREE.ConeGeometry(3,7,36,1,false,0,6.3);
var material = new THREE.MeshNormalMaterial( {
    wireframe: true,
} );

var cone = new THREE.Mesh( geometry, material );
scene.add( cone );

var geometry = new THREE.SphereGeometry( 3, 32, 32 );
var material = new THREE.MeshNormalMaterial( {
    wireframe: true,
} );

var sphere = new THREE.Mesh( geometry, material );

    scene.add( sphere );


sphere.position.y = 0
sphere.position.x = 10

var geometry = new THREE.SphereGeometry( 10, 32, 32 );
var material = new THREE.MeshNormalMaterial( {
    wireframe: true,
} );

camera.position.z = 30;



// render our scene

var render = function(){
    requestAnimationFrame(render);
    
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    sphere.rotation.x+=(0.02);
    sphere.rotation.y+=(0.02);

    cube.rotation.x+=(0.02);
    cube.rotation.y+=(0.02);

    // light animation
    var time = Date.now() * 0.00025;
    var d = 100;
    light1.position.x = Math.sin( time * 0.9 ) * d;
    light1.position.z = Math.cos( time * 0.3 ) * d;
    light2.position.x = Math.cos( time * 0.3 ) * d;
    light2.position.z = Math.sin( time * 0.9 ) * d;
    light3.position.x = Math.sin( time * 0.9 ) * d;
    light3.position.z = Math.sin( time * 0.5 ) * d;

 



    renderer.render(scene,camera)
}
render();
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  
    renderer.setSize(window.innerWidth, window.innerHeight)
  })