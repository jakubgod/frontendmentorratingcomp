
const buttons = document.querySelectorAll('.btn');
let button1 =  document.querySelector(".submit-btn");
let button2 =  document.querySelector(".rateAgain-btn");
const buttons1 = document.querySelectorAll('.btn');
let closebtn = document.querySelector(".close-btn");
let modal = document.querySelector(".modalxd")

// 5 buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// which button user clicked on

    buttons1.forEach(function(button) {
        button.addEventListener("click", function() {
             let buttonNumber =button.getAttribute("data-number")

             if (buttonNumber) {
                document.getElementById("message").textContent = "You selected " + buttonNumber + " out of 5";
             }
             
             button1.addEventListener("click", function(){
                document.getElementById("screen1").style.display = "none";
                document.getElementById("screen2").style.display = "block";
            })
            
            button2.addEventListener("click", function() {
                document.getElementById("screen1").style.display = "block";
                document.getElementById("screen2").style.display = "none";
            })
        })
    })

// screen changing



// modal close button

closebtn.addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
})
