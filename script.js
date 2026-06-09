const notifyBtn =
    document.getElementById("notifyBtn");

const panel =
    document.getElementById("panel");

/* Toggle Panel */

notifyBtn.addEventListener("click", () => {

    panel.classList.toggle("show");
});

/* Close Outside */

window.addEventListener("click", (e) => {

    if(
        !notifyBtn.contains(e.target) &&
        !panel.contains(e.target)
    ){

        panel.classList.remove("show");
    }
});