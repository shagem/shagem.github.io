
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
		

var cube_geometry = new THREE.BoxGeometry();
var cube_material = new THREE.MeshBasicMaterial( { color: 0x6899e8 } );
	cube = new THREE.Mesh( cube_geometry, cube_material );
	
scene.add( cube );

camera.position.z = 5;




const animate = function () {
	requestAnimationFrame( animate );

	

	

	renderer.render( scene, camera );
	};

animate();