// create a function to collect user input
var msgList = [];
var confirmedMsg = []
var msgAll = []
var items = []
console.log(items)
function collectUserInput() {
    var userInput = document.getElementById("user__input")
    console.log("user__input")
    var addButtom = document.getElementById("add")
    console.log("add")
    addButtom.addEventListener("click", function (e) {
        e.preventDefault();
        var msg = userInput.value
        console.log(userInput.value)
        // items.push(userInput.value)
        // console.log(items)
        // return userInput.value
        var msgCont = document.getElementById("app__cont");
        var item = document.createElement("li");
        if ((msg !== "") && (!msgList.includes(msg))) {
            msgList.push(msg);
            var list=document.createElement("ul")
            list.id="item__list"
            var message=new MassegGenerator((msgList.indexOf(msg) + 1),`${getDate()}`, `${getTime()}`,msg)
            msgAll.push(message)
            item.innerHTML=message.generatElement()
            list.appendChild(item)
            msgCont.appendChild(list);
            confirm() 
            removeItem()    
        }
        else if(msg === ""){
            var error=document.createElement("section");
            error.classList.add('error');
            error.textContent="please write something!!"
            var errorCont=document.getElementById("err")
            errorCont.appendChild(error)
        }
    
    })
}
collectUserInput()

//create a function to add item number
function itemNumber(array) {
    for (item of array)
        console.log(array.indexOf(item) + 1)
    return array.indexOf(item) + 1
}

// create a functio to get date
function getDate() {
    var today = new Date()
    var month=today.getMonth()+ 1;
    var year=today.getFullYear();
    var date=today.getDate();
    var currentDate=`${date}/${month}/${year}`;
    return currentDate;
}
getDate()


//create a function to get time
function getTime() {
    var date = new Date()
    var hrs = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours()
    var mins = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes()
    var secs = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : date.getSeconds()
    var currentTime=`${hrs}:${mins}:${secs}`;
    return currentTime;
}
getTime()

// create ann alert
// function addReminder() {
//     alert("YOU HAVE TO GO TO DOCTOR NOW");
// }
// addReminder()

// create a function to remove the item
function removeItem() {
    var but = document.getElementsByClassName("delet")
    but.textContent = "X"
    var error = document.getElementById("err")
    error.appendChild(but)
    err.appendChild(error)
    but.addEventListener("click", function () {
        
})
}
removeItem()

// create functionn to confirm item
var confirmButt = document.getElementsByClassName("button")
confirmButt.className = "pend"
confirmButt.textContent = "pending"
var err = document.getElementById("err")
err.appendChild(confirmButt)
confirmButt.addEventListener("click", function () {
    confirmButt.classList.toggle("confirmed")
    confirmButt.classList.contains("confirmed") ? confirmButt.textContent = "Confirmed" : confirmButt.textContent = "pending"

})
confirm()


function MassegGenerator(msgId, getDate, msgContent, getTime) {
    this.id = msgId
    this.date = getDate
    this.content = msgContent
    this.time = getTime
    this.generate = ()=>{
        console.log(`${msgId}- ${getDate}>> ${msgContent} ${getTime}`);
    }
    this.generatElement = ()=>{
        return `<span class="number">${msgId}</span><span>${getTime} ${getDate}</span>
    <h4 class="content">${msgContent}</h4><span class="delet">X</span><span class="button">confirm</span>`;
    }
}
