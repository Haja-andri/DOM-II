// Your code goes here
// Mouseover listner on the nav list

// get the nav list and chage the font size/weight when the mouse 
// go over back to normal when it leaves

const nav = document.querySelectorAll('nav a');
nav.forEach(anchor =>{
    anchor.addEventListener('mouseover', () =>{
        anchor.style.fontSize = '2rem';
        anchor.style.fontweight = 'bold';
    })
    anchor.addEventListener('mouseleave', () =>{
        anchor.style.fontSize = '1.6rem';
        anchor.style.fontweight = 'normal';
    })
});

// Load event on window that would hide part of the content (Pick destination section)
const pickPara = document.querySelector('.content-destination > p')

window.addEventListener('load', ()=> {
    pickPara.style.display = 'none'
});

// Click event on image
// will display or hide the paragraphe when clicking on the associated image
const pickImage = document.querySelector('.content-destination > img')

pickImage.addEventListener('click', ()=>{
    if(pickPara.style.display == 'none'){
        pickPara.style.display = 'block';
    } 
    else{
        pickPara.style.display = 'none';
    }
})

//Drag & Drop
// define draggable erea

const draggableZone = document.querySelector('body');

draggableZone.addEventListener("drag", function( event ) {

}, false);

// when starting dragging
const dropableZone = document.querySelector('.dropzone');
let dragged;

draggableZone.addEventListener('dragstart', function (event){
    // higlight the dropping zone
    dropableZone.style.border = '1px solid green';
    dropableZone.style.padding = '.5rem';
    dropableZone.style.margin = '.5rem';
    dropableZone.style.textAlign = 'center';
    dropableZone.style.fontSize = '1.5rem';
    dropableZone.style.height = '15rem';
    dropableZone.textContent = 'You can move this image here';
    dragged = event.target;
});

// When stop dragging
draggableZone.addEventListener('dragend', function(event){
    // set back everything to normal
    dropableZone.style.border = 'none';
    dropableZone.style.padding = '0rem';
    dropableZone.style.height = '';
    dropableZone.textContent = '';
})



draggableZone.addEventListener('dragenter', function(event){
    if ( event.target.className == "dropzone" ) {
        dropableZone.style.backgroundColor = 'purple';     
    }
})

// when dropping in the drop zone
draggableZone.addEventListener('drop', function(event){
    event.preventDefault();
    // move dragged elem to the selected drop target
    console.log(event.target.className);
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        console.log('In the drop zone');
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }  
})