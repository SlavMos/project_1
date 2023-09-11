// показывает нажатые клавиши without(UP DOWN RIGHY LEFT.CL)
document.querySelector(".i-1").onkeypress = (event) => {
  console.log("charCode: " + event.charCode);
  console.log("code: " + event.code);
  console.log("key: " + event.key);
  console.log("keyCode: " + event.code);
};
// Показывает все клавиши without(EventCode)
document.querySelector(".i-1").onkeydown = (event) => {
  console.log("charCode: " + event.charCode);
  console.log("code: " + event.code);
  console.log("key: " + event.key);
  console.log("keyCode: " + event.code);
};
