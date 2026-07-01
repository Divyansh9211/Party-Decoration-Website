document.querySelectorAll('.service-card').forEach((card,index)=>{
    card.style.animation=`fadeUp .6s ease ${index*0.1}s forwards`;
});
