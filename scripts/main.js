const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello wolrd!";

/*document.querySelector("html").
addEventListener
("click",() => {alert("Stop touching me")});*/

const myImage = document.querySelector("img");
myImage.onclick = function(){
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/RMIT_University_logo.jpg"){
        myImage.setAttribute("src","images/thunderbird-logo.png");
    }else{
        myImage.setAttribute("src","images/RMIT_University_logo.jpg");

    }
    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");

    function setUserName(){
        const myName = prompt("Please enter your name.");
        if(!myName){
            setUserName();
        }
        localStorage.setItem("name", myName);
        myHeading.textContent =  `RMIT University, ${myName}`;
    }
    if(!localStorage.getItem("name")){
        setUserName();
    }else{
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `RMIT University, ${storedName}`;
    }
    myButton.onclick = function(){
        setUserName();
    };
};