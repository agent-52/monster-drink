import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.to(".p1MainText", {
    xPercent: -8,
    
    scrollTrigger:{
        scrub:2,
        trigger:".page1",
        // markers: true,
        start:"10% 10%",
        end:"bottom top"
    }
})
gsap.to(".p21,.p23", {
    xPercent: 6,
    
    scrollTrigger:{
        scrub:2,
        trigger:".page1",
        // markers: true,
        start:"10% 10%",
        end:"bottom top"
    }
})
gsap.to(".p22", {
    xPercent: -3,
    
    scrollTrigger:{
        scrub:2,
        trigger:".page1",
        // markers: true,
        start:"10% 10%",
        end:"bottom top"
    }
})

/**
 * Base
 */
// Debug


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath("/draco/")
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

let mixer = null
gltfLoader.load(
    "/model/6/scene.gltf",
    (gltf) => 
    {
        // mixer = new THREE.AnimationMixer(gltf.scene)
        // const action = mixer.clipAction(gltf.animations[0])
        // const action1 = mixer.clipAction(gltf.animations[1])
        // const action2 = mixer.clipAction(gltf.animations[2])
        // action.play()
        // action1.play()
        // action2.play()
        console.log(gltf)
        // console.log(action)

        // gltf.scene.scale.set(12.25, 12.25, 12.25)
        // gltf.scene.scale.set(0.08,0.08,0.08)
        const can1 = gltf.scene
        gltf.scene.scale.set(0.65,0.65,0.65)
        gltf.scene.position.y = -1.2
        gltf.scene.rotation.y = Math.PI*0.5
        gltf.scene.rotation.x = -Math.PI*0.16
        gltf.scene.rotation.z = Math.PI*0.1
        gltf.scene.camera
        scene.add(gltf.scene)
        

        gsap.to(can1.position, {
            y: -4.5,
            x: -2,
            scrollTrigger:{
                scrub:1.5,
                trigger:".page1",
                // markers: true,
                start:"10% 10%",
                end:"bottom top"
            }
        })
        gsap.to(can1.rotation, {
            y: Math.PI*2.5,
            z: -Math.PI*0.04,
            x: Math.PI*0.00,
            scrollTrigger:{
                scrub:1.5,
                trigger:".page1",
                // markers: true,
                start:"10% 10%",
                end:"bottom top"
            }
        })
        gsap.to(can1.scale, {
            y: 1,
            z: 1,
            x: 1,
            
            scrollTrigger:{
                scrub:1.5,
                trigger:".page1",
                // markers: true,
                start:"10% 10%",
                end:"bottom top"
            }
        })
        gsap.fromTo(can1.position,{y: -4.5,
            x: -2,},
             {
            y: 6,
            // z: 0,
            // x: 0,
            
            scrollTrigger:{
                scrub:1,
                trigger:".page3",
                // markers: true,
                start:"top top",
                end:"bottom top"
            }
        })

        //

        // gsap.fromTo(can1.rotation,{y: Math.PI*2.5,
        //     z: -Math.PI*0.04,
        //     x: Math.PI*0.00,}, {
        //     y: Math.PI*3.5,
            
        //     scrollTrigger:{
        //         scrub:1.5,
        //         trigger:".page2",
        //         // markers: true,
        //         start:"10% 10%",
        //         end:"bottom top"
        //     }
        // })
        

        
    }
)
gltfLoader.load(
    "/model/6/scene.gltf",
    (gltf) => 
    {
        // mixer = new THREE.AnimationMixer(gltf.scene)
        // const action = mixer.clipAction(gltf.animations[0])
        // const action1 = mixer.clipAction(gltf.animations[1])
        // const action2 = mixer.clipAction(gltf.animations[2])
        // action.play()
        // action1.play()
        // action2.play()
        console.log(gltf)
        // console.log(action)

        // gltf.scene.scale.set(12.25, 12.25, 12.25)
        // gltf.scene.scale.set(0.08,0.08,0.08)
        const can2 = gltf.scene
        gltf.scene.scale.set(0.6,0.6,0.6)
        gltf.scene.position.y = -1
        gltf.scene.position.x = -1
        gltf.scene.rotation.y = Math.PI*0.5
        gltf.scene.rotation.x = Math.PI*0.16
        gltf.scene.rotation.z = -Math.PI*0.1
        gltf.scene.camera
        scene.add(gltf.scene)

        gsap.to(can2.position, {
            y: 4,
            scrollTrigger:{
                scrub:1.5,
                trigger:".page1",
                // markers: true,
                start:"10% 10%",
                end:"bottom top"
            }
        })
        gsap.to(can2.rotation, {
            y: Math.PI*2,
            z: Math.PI*0.2,
            scrollTrigger:{
                scrub:1.5,
                trigger:".page1",
                // markers: true,
                start:"10% 10%",
                end:"bottom top"
            }
        })
        gsap.to(can2.scale, {
            y: 0.3,
            z: 0.4,
            
            scrollTrigger:{
                scrub:1.5,
                trigger:".page1",
                // markers: true,
                start:"10% 10%",
                end:"bottom top"
            }
        })
        
    }
)


/**
 * Floor
 */
// const floor = new THREE.Mesh(
//     new THREE.PlaneGeometry(10, 10),
//     new THREE.MeshStandardMaterial({
//         color: '#444444',
//         metalness: 0,
//         roughness: 0.5
//     })
// )
// floor.receiveShadow = true
// floor.rotation.x = - Math.PI * 0.5
// scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 0, 0)
scene.add(directionalLight)

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
directionalLight1.castShadow = true
directionalLight1.shadow.mapSize.set(1024, 1024)
directionalLight1.shadow.camera.far = 15
directionalLight1.shadow.camera.left = - 7
directionalLight1.shadow.camera.top = 7
directionalLight1.shadow.camera.right = 7
directionalLight1.shadow.camera.bottom = - 7
directionalLight1.position.set( 5, 2, 0)
scene.add(directionalLight1)

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1)
directionalLight2.castShadow = true
directionalLight2.shadow.mapSize.set(1024, 1024)
directionalLight2.shadow.camera.far = 15
directionalLight2.shadow.camera.left = - 7
directionalLight2.shadow.camera.top = 7
directionalLight2.shadow.camera.right = 7
directionalLight2.shadow.camera.bottom = - 7
directionalLight2.position.set( 5, 0, 0)
scene.add(directionalLight2)

const hemiLight = new THREE.HemisphereLight("white", "white", 1)
hemiLight.position.set(0,2,0)
scene.add(hemiLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, 2)
scene.add(camera)

gsap.to(camera.position, {
    
    x: 3,
    z: 1.5,
    
    
    scrollTrigger:{
        scrub:1.5,
        trigger:".page2",
        // markers: true,
        start:"top top",
        end:"bottom top"
    }
})
gsap.to(camera.rotation, {
    
    
    z: -Math.PI*0.2,
    x: -Math.PI*0.2,
    
    
    scrollTrigger:{
        scrub:1.5,
        trigger:".page2",
        // markers: true,
        start:"top top",
        end:"bottom top"
    }
})
gsap.from(".p3Image", {
    
    
    yPercent: 100,
    
    
    
    scrollTrigger:{
        scrub:1.5,
        trigger:".page2",
        // markers: true,
        start:"top top",
        end:"bottom top"
    }
})
gsap.to(".p3Image", {
    
    
    rotate: 3,
    
    
    
    scrollTrigger:{
        scrub:1.5,
        trigger:".page2",
        // markers: true,
        start:"top top",
        end:"bottom top"
    }
})


// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true
controls.enableZoom = false

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    //update can
    
    

    //Update mixer
    // if(mixer !== null){
    //     mixer.update(deltaTime)
    // }
   

    // Update controls
    controls.update() 

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()