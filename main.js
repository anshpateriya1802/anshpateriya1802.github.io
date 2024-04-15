const body = document.body;
const setModeImg = () => {
  const darkModeToggle = document.querySelector(".darkModeToggle");
  const isDarkMode = localStorage.getItem("DarkMode") == "true";
  if (isDarkMode) {
    darkModeToggle.innerHTML = '<img src="assets/moon.svg" alt="Light mode">';
  } else {
    darkModeToggle.innerHTML = '<img src="assets/sun.svg" alt="Dark mode">';
  }
};
setModeImg();
const darkModeToggle = () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("DarkMode", isDarkMode);
  const darkModeToggle = document.querySelector(".darkModeToggle");
  if (isDarkMode) {
    darkModeToggle.innerHTML = '<img src="assets/moon.svg" alt="Light mode">';
  } else {
    darkModeToggle.innerHTML = '<img src="assets/sun.svg" alt="Dark mode">';
  }
};

// Check if dark mode is enabled from local storage
const isDarkMode = localStorage.getItem("DarkMode") === "true";
if (isDarkMode) {
  body.classList.add("dark");
}


// for to-top

const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})