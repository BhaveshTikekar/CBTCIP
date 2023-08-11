var str = "";
var btn = document.querySelectorAll(".icon_box");
var input = document.querySelector("input");

Array.from(btn).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      
      input.value = "";
      str="";
    }
    
    else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      input.value = str;
      
    }
    else if(e.target.innerHTML=="="){

      console.log(e.target);
      str=eval(str);
      input.value=str;
  
    }
     else {
      console.log(e.target);
      str = str + e.target.innerHTML;
      console.log(str);
      input.value = str;
    }
  });
});
