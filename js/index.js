document.getElementById("lableSignUp").addEventListener("click", function () {
  document.getElementById("divLogin").classList.replace("d-flex", "d-none");
  document.getElementById("divSignUp").classList.replace("d-none", "d-flex");
});

document.getElementById("lableSignIn").addEventListener("click", function () {
  document.getElementById("divSignUp").classList.replace("d-flex", "d-none");
  document.getElementById("divLogin").classList.replace("d-none", "d-flex");
});

/* Add Users SignUp*/

var nameSingUp=document.getElementById("nameSingUp")
var emailSignUp=document.getElementById("emailSignUp")
var passwordSignUp=document.getElementById("passwordSignUp")

var emailLogIn=document.getElementById("emailLogIn")
var passwordLogIn=document.getElementById("passwordLogIn")


var allUsers = [];

if (localStorage.getItem("dataBase") != null) {
  allUsers = JSON.parse(localStorage.getItem("dataBase"));

  

} else {
  allUsers = [];
}

document.getElementById("btnSignUp").addEventListener("click", function () {

if (emailSignUp.value=='' || nameSingUp.value=='' || passwordSignUp.value==''){
 document.getElementById('allInputRequired').classList.remove('d-none')
 
}
else{

  document.getElementById('allInputRequired').classList.add('d-none')



  var user = {
    nameSingUp: nameSingUp.value,
    emailSignUp:emailSignUp.value,
    password: passwordSignUp.value,
  }


if(checkEmailTrue()===true){
  document.getElementById('emailSignUpHave').classList.remove('d-none')
}   

else {

   allUsers.push(user)
    console.log(allUsers);
    saveDataOnLocalStorage()
    clearInputSignUp()
    document.getElementById('emailSignUpHave').classList.add('d-none')
    document.getElementById('link').classList.add('text-success')
}  
}
})

/********************btnLogin**************/

document.getElementById('btnLogin').addEventListener('click',function(){

 

  
  if(checkLoginEmailPasswordTrue()===true){
    console.log("loginTrue");

   
    document.getElementById('userData').classList.replace('d-none','d-flex')
    document.getElementById('logIn').classList.replace('d-flex','d-none')



var printUserName ="";

printUserName +=`<h2>Welcome ${emailLogInTrue}</h2>`
    document.getElementById('divUserName').innerHTML=printUserName;
  }   
  
  else {
    console.log("loginFalse");
    
  }  
  }
  )


/**LogOut */

document.getElementById('logOut').addEventListener('click',function(){

  document.getElementById('userData').classList.replace('d-flex','d-none')
  document.getElementById('logIn').classList.replace('d-none','d-flex')
})






function checkEmailTrue(){
var emailSignUp2=document.getElementById("emailSignUp").value
for (let i = 0; i < allUsers.length; i++) {

if (allUsers[i].emailSignUp.toLowerCase().includes(emailSignUp2.toLowerCase()) ===true)
{

console.log("We Have This Email Alredy");
  return true;
}

} }


function checkEmailFalse(){
  var emailSignUp2=document.getElementById("emailSignUp").value
  for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].emailSignUp.toLowerCase().includes(emailSignUp2.toLowerCase()) ===false)
  {

  console.log("We Don't Have This Email");
    return false;
  }
   }
  }
  
  var emailLogInTrue
  function checkLoginEmailPasswordTrue(){
    
    var emailLogIn2=document.getElementById("emailLogIn").value
    var passwordLogIn2=document.getElementById("passwordLogIn").value
    for (let i = 0; i < allUsers.length; i++) 
    {
    if ((allUsers[i].emailSignUp.toLowerCase().includes(emailLogIn2.toLowerCase()) ===true) && allUsers[i].password.toLowerCase().includes(passwordLogIn2.toLowerCase()) ===true)
    {
      emailLogInTrue=emailLogIn2
        return true;
    }
     }
    }


















  // function checkAllDataEmpty(){
   
    
  //   if (allUsers.length<1)
  //   {
     
  //   console.log("We Don't Have Any Data");
  //     return true;
  //   }
     
  //   }
  


function saveDataOnLocalStorage() {
  localStorage.setItem("dataBase", JSON.stringify(allUsers));
}

function clearInputSignUp() {
  document.getElementById("nameSingUp").value="";
  document.getElementById("emailSignUp").value="";
  document.getElementById("passwordSignUp").value="";
}




































// var textName = document.getElementById("textName");
// var textPhone = document.getElementById("textPhone");
// var textAddress = document.getElementById("textAddress");
// var textImage = document.getElementById("textImage");

// var allData = [];
// document.getElementById("submit").addEventListener("click", function () {
//   console.log("hello");

//   var data = {
//     id: Date.now(),
//     name: textName.value,
//     Phone: textPhone.value,
//     Address: textAddress.value,
//   };
//   allData.push(data);
//   saveDataOnLocalStorage();
//   displyData();
//   clearData();
// });

// function displyData() {
//   var trs = "";
//   for (var i = 0; i < allData.length; i++) {
//     trs += `

//     <div class="col-3 p-2 text-white text-center my-2" >

// <h6>${allData[i].id}</h6>
// <h2>${allData[i].name}</h2>
// <h3>${allData[i].Phone}</h3>
// <h4>${allData[i].Address}</h4>

//         <button  onclick="updateProduct(${allData[i].id})" class="btn btn-warning">Update</button>
//    <button onclick="deleteData(${allData[i].id})" class="btn btn-success"">Delete</button>
//    </div>
//   `;

//     //  `<tr>
//     // <td>${allData[i].id}</td>
//     // <td>${allData[i].name}</td>
//     // <td>${allData[i].Phone}</td>
//     // <td>${allData[i].Address}</td>
//     //   <td> <button  onclick="updateProduct(${allData[i].id})" class="btn btn-outline-danger">Update</button></td>
//     //   <td> <button onclick="deleteData(${allData[i].id})" class="btn btn-warning"">Delete</button></td>
//     //    </td>
//     //   </tr>`;
//   }

//   document.getElementById("databody").innerHTML = trs;
// }

// function checkDataEmpty() {
//   if (allData.length < 1) {
//     document.getElementById("result").style.background = "red";
//     document.getElementById("result").style.padding = "10px";
//     document.getElementById("result").style.color = "white";
//     document.getElementById("result").style.borderRadius = "10px";
//     document.getElementById("result").style.marginTop = "10px";

//     document.getElementById("result").innerHTML = "Array Is Empty";
//     console.log("Array Is Empty");
//   }
// }

// function checkInputEmpty() {
//   var searchInputText2 = document.getElementById("searchInputText").value;

//     if (searchInputText2.length<1)
//     {
//       return true;
//     }

// }

// function checkResultTrue() {
//   var searchInputText2 = document.getElementById("searchInputText").value;

//   for (var i = 0; i < allData.length; i++) {
//     if (
//       allData[i].name.toLowerCase().includes(searchInputText2.toLowerCase()) ==
//       true
//     ) {
//       return true;
//     }
//   }
// }
// function checkResultFalse() {
//   var searchInputText2 = document.getElementById("searchInputText").value;
//   for (var i = 0; i < allData.length; i++) {
//     if (
//       allData[i].name.toLowerCase().includes(searchInputText2.toLowerCase()) !=
//       true
//     ) {
//       return false;
//     }
//   }
// }

// document.getElementById("searchResult").addEventListener("click", function () {
//   checkDataEmpty();

//   if (checkResultTrue() === true) {
//     document.getElementById("result").style.background = "green";
//     document.getElementById("result").style.padding = "10px";
//     document.getElementById("result").style.color = "white";
//     document.getElementById("result").style.borderRadius = "10px";
//     document.getElementById("result").style.marginTop = "10px";

//     document.getElementById("result").innerHTML = "Have Data";
//     console.log("TRUE");
//     alert("TRUE");
//   } else if (checkResultFalse() === false) {
//     document.getElementById("result").innerHTML = "Don't Have Data";

//     document.getElementById("result").style.background = "blue";
//     document.getElementById("result").style.padding = "10px";
//     document.getElementById("result").style.color = "white";
//     document.getElementById("result").style.borderRadius = "10px";
//     document.getElementById("result").style.marginTop = "10px";

//     alert("FALSE");
//   }
//   else if (checkInputEmpty() === true) {

//     document.getElementById("result").innerHTML = "Search Input Is Impty";

//     document.getElementById("result").style.background = "blue";
//     document.getElementById("result").style.padding = "10px";
//     document.getElementById("result").style.color = "white";
//     document.getElementById("result").style.borderRadius = "10px";
//     document.getElementById("result").style.marginTop = "10px";
//     console.log("Search Input Is Impty");
//   }

// });

// function deleteData(id) {
//   for (var i = 0; i < allData.length; i++) {
//     if (allData[i].id == id) {
//       allData.splice(i, 1);
//       saveDataOnLocalStorage();
//       // localStorage.setItem("dataBase", JSON.stringify(allData));
//       displyData();
//     }
//   }
// }

// function clearData() {
//   document.getElementById("textName").value = "";
//   document.getElementById("textPhone").value = "";
//   document.getElementById("textAddress").value = "";
// }

// function saveDataOnLocalStorage() {
//   localStorage.setItem("dataBase", JSON.stringify(allData));
// }

// function out() {
//   console.log("out");
// }
