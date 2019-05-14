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
console.log(nav);