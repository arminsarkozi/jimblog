function toggleNavigationBar() {
    let navigationBar = document.getElementsByClassName("nav")[0];
    let toggleIcon = document.getElementById("navigation-icon");
    let closeButton = '<i class="fa-solid fa-xmark" style="color: #ffff; font-size: 18px; vertical-align: middle"></i> Bezárás';
    if (toggleIcon.className.includes("opened")) {
        toggleIcon.className = "nav--item icon closed";
        let openedElements = document.getElementsByClassName("nav--item");
        for (let i = 0; i < openedElements.length; i++) {
            if (!openedElements[i].className.includes("logo") && !openedElements[i].className.includes("icon")) {
                openedElements[i].style.display = "none";
            }
        }
        let navigationHTML = navigationBar.innerHTML;
        navigationBar.style.justifyContent = "center";
        navigationBar.style.alignItems = "center";
        navigationBar.innerHTML = '<i class="fa-solid fa-spinner icon" style="font-size: 25px; animation: rotation 2s infinite linear; -webkit-animation: rotation 2s infinite linear"></i>';
        setTimeout(() => {
            navigationBar.style.display = "flex";
            navigationBar.style.height = "fit-content";
            navigationBar.style.justifyContent = "space-evenly";
            navigationBar.style.alignItems = "stretch";
            navigationBar.style.flexDirection = "row";
            navigationBar.innerHTML = navigationHTML.replace(closeButton, '<i class="fa fa-bars"></i>');
        }, 560);
    } else {
        toggleIcon.className = "nav--item icon opened";
        let closedElements = document.getElementsByClassName("nav--item");
        for (let i = 0; i < closedElements.length; i++) {
            closedElements[i].style.display = "inline-block";
        }
        navigationBar.style.height = "100vh";
        navigationBar.style.justifyContent = "stretch";
        navigationBar.style.alignItems = "space-evenly";
        navigationBar.style.flexDirection = "column";
        toggleIcon.style.color = "#ffff";
        toggleIcon.innerHTML = closeButton;
    }
}