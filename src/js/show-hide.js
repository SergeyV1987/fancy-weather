function showOutPut() {
  document.querySelector("#outPut").classList.remove("zoomOut");
  document.querySelector("#map").classList.remove("zoomOut");
  document.querySelector("#outPut").classList.add("zoomIn");
  document.querySelector("#map").classList.add("zoomIn");
  document.getElementById("outPut").style.display = "block";
}
function hideOutPut() {
  document.querySelector("#outPut").classList.toggle("zoomIn");
  document.querySelector("#map").classList.toggle("zoomIn");
  document.querySelector("#outPut").classList.add("zoomOut");
  document.querySelector("#map").classList.add("zoomOut");
}

export { showOutPut, hideOutPut };
