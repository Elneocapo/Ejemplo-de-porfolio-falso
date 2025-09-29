const follower = document.getElementById("follow");
const cuerpo = document.getElementById("ey");
let seve = false;
document.body.addEventListener('mousemove', (event)=>{
    if(!seve){seve = !seve; follower.style.visibility = "visible"}
    const rect = cuerpo.getBoundingClientRect();
    const x = event.clientX - rect.left; 
    const y = event.clientY - rect.top; 
    follower.style.top = `${y}px`;
    follower.style.left = `${x}px`;
    follower.style.transform = "translate(-50%, -50%)";
})
