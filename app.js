
let currentDate =  new Date();
let currentYear = currentDate.getFullYear();
let copyright = document.getElementById("copyright")
function getCopyright() {
    return copyright.innerText = currentYear;
}
getCopyright()