function saklar() {
   let toggle1 = document.getElementById("default-toggle1");
   let toggle2 = document.getElementById("default-toggle2");
   let toggle3 = document.getElementById("default-toggle3");

   let lampu1 = document.getElementById("lampu1");
   let lampu2 = document.getElementById("lampu2");
   let lampu3 = document.getElementById("lampu3");

   if (toggle1.checked) {
      lampu1.src = "assets/img/on.gif";
   } else {
      lampu1.src = "assets/img/off.gif";
   }

   if (toggle2.checked) {
      lampu2.src = "assets/img/on.gif";
   } else {
      lampu2.src = "assets/img/off.gif";
   }

   if (toggle3.checked) {
      lampu3.src = "assets/img/on.gif";
   } else {
      lampu3.src = "assets/img/off.gif";
   }

   // Pake Button

   // let lampu1 = document.getElementById("lampu1");
   // let lampu2 = document.getElementById("lampu2");
   // let lampu3 = document.getElementById("lampu3");

   // if (action == "on") {
   //    if (lamp == 1) {
   //       lampu1.src = "assets/img/on.gif";
   //    }
   //    if (lamp == 2) {
   //       lampu2.src = "assets/img/on.gif";
   //    }
   //    if (lamp == 3) {
   //       lampu3.src = "assets/img/on.gif";
   //    }
   // }
   // if (action == "off") {
   //    if (lamp == 1) {
   //       lampu1.src = "assets/img/off.gif";
   //    }
   //    if (lamp == 2) {
   //       lampu2.src = "assets/img/off.gif";
   //    }
   //    if (lamp == 3) {
   //       lampu3.src = "assets/img/off.gif";
   //    }
   // }
} 