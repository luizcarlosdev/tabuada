function tabuada() {
    const num = document.querySelector("#num");
    const seltab = document.querySelector("#select");
    seltab.textContent = " ";
    if(Number(num.value) == " ") {
        alert("Defina algum algarismo para prosseguir.")
    } else {
        for(let s = 0; s <= 10; s++) {
            const item = document.createElement("li");
            item.textContent += `${Number(num.value)} x ${s} = ${Number(num.value)*s}`;
            seltab.appendChild(item);
        }
    }

    num.value = " ";
}