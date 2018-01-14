var myApp = {
  mainMessage : "welcome to the app",

  mainGreeting() {
    console.log('hey! welcome to my app! you will');
  }
}

myApp.module1= {
  saySomething(message){
    console.log(myApp.mainMessage, message, "i am the secong file");

  }

  doSomething(){
    console.log('called module1 doSomething function')
  }
}

myApp.module2 = {
  doSomething(){
    console.log('called module1 doSomething function');
  }

}

// JavaScript Document

console.log("JS file is linked");