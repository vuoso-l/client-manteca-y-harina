const closeSes = document.querySelector("#closeSession");

const closeSession = () => {
    closeSes.addEventListener("click", () => {
        localStorage.removeItem("token");
        location.href = "/index.html";
    })
}

export { closeSession };