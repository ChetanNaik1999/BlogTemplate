console.log("This is my first responsive website");
let burger=document.querySelector(".burger");
let navbar=document.querySelector(".navbar");
let rightNav=document.querySelector(".rightNav");
let navlist=document.querySelector(".navlist");
burger.addEventListener("click",ToggleScreen);

function ToggleScreen(){
    navlist.classList.toggle("v-class");
    rightNav.classList.toggle("v-class");
    navbar.classList.toggle("h-nav")

}

// let submit=document.getElementById("submit");
// submit.addEventListener("submit",onSubmit);




// function UserData(name,email,password,text)
// {
//    this.name=name;
//    this.email=email;
//    this.password=password;
//    this.text=text;
// }
// function onSubmit(e)
// {
//     e.preventDefault();
//     console.log("YOUR FORM IS SUBMITED");
//     let name=document.getElementById("name").value;
//     let email=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     let text=document.getElementById("text").value;

//     let Data=new UserData(name,email,password,text);
//     console.log(Data);
// // }
// $(document).ready(function(){
// $('button').click(function(){
//     alert("MY FIRST JQUERY CODE");
// })
// })

async function Chetan()
{
    console.log("Inside Chetan Function");
    const response=await fetch('https://api.github.com/users');
    console.log("Before Response");
    const users=await response.json();
    console.log("Users Resolved");
    return users;
}
console.log("Before Calling Chetan naik");
let a=Chetan();
console.log("After Calling Chetan naik");
console.log(a);
a.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Sorry cannot Resolved");
})