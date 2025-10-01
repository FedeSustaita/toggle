let osc = document.getElementById("oscuro");
let cont = document.getElementById("cont");

// Creamos el circulo solo una vez
let circu = document.createElement("div");
circu.classList.add("circu");
cont.appendChild(circu);
let oscur= document.getElementById("oscur")
// Estilos base
const style = document.createElement("style");
style.innerHTML = `
.circu {
    transform: translateX(-50%);
    position: absolute;
    top: 235px;
    left:47%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(120deg, white, rgba(255, 230, 0, 1));
}
`;
document.head.appendChild(style);

osc.addEventListener("change", function(){
    if (osc.checked) {
        oscur.style.background = "linear-gradient(135deg, rgb(60, 60, 220), rgb(25, 0, 130), rgb(15, 5, 70))";
        document.body.style.backgroundColor = "rgba(27, 29, 34, 1)";
        document.body.style.color = "white";
        circu.style.animation = "girar 0.2s linear forwards";
        circu.style.background="linear-gradient(120deg, white, rgba(2, 2, 24, 1))"
        style.innerHTML += `
            @keyframes girar {
                0% { transform: translateX(-15px); background: linear-gradient(120deg, white, rgba(255, 220, 0, 1)); }
                100% { transform: translateX(65px); background: linear-gradient(120deg, white, rgba(2, 2, 24, 1));}
            }
        `;
    } else {
        oscur.style.background = "linear-gradient(120deg, rgb(255, 220, 0), rgb(255, 120, 20), rgb(180, 20, 10))";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        circu.style.animation = "girarBack 0.2s linear forwards";
        circu.style.background="linear-gradient(120deg, white, rgba(255, 230, 0, 1))"
        style.innerHTML += `
            @keyframes girarBack {
                0% { transform: translateX(65px); background: linear-gradient(120deg, white, rgba(2, 2, 24, 1)); }
                100% { transform: translateX(-5px); background: linear-gradient(120deg, white, rgba(255, 220, 0, 1)); }
            }
        `;
    }
});
