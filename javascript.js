var cookies = ['The early bird gets the worm, but the second mouse gets the cheese.', 
               'Be on the alert to recognize your prime at whatever time of your life it may occur.', 
               'Your road to glory will be rocky, but fulfilling.', 
               'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
               'Patience is your alley at the moment. Don’t worry!', 
               'Nothing is impossible to a willing heart.', 
               'Don’t worry about money. The best things in life are free.', 
               'Don’t pursue happiness – create it.', 
               'Courage is not the absence of fear; it is the conquest of it.',
               'Nothing is so much to be feared as fear.', 
               'All things are difficult before they are easy.', 
               'The real kindness comes from within you.', 
               'A ship in harbor is safe, but that’s not why ships are built.', 
               'You don’t need strength to let go of something. What you really need is understanding.', 
               'If you want the rainbow, you have to tolerate the rain.', 
               'Fear is interest paid on a debt you may not owe.'
              ]
function newCookie() {
    var randomNumber = Math.floor(Math.random() * (cookies.length));
    document.getElementById('cookieDisplay').innerHTML = cookies[randomNumber];
}
function red(){
    document.getElementById('myStyle').style.borderColor = "darkred";
    document.getElementById('myStyle').style.backgroundColor = "rgb(255, 102, 102)";
    document.getElementById('myStyle').style.font = "italic bold 20px arial,serif";
}
function blue(){
    document.getElementById('myStyle').style.borderColor = "darkblue";
    document.getElementById('myStyle').style.backgroundColor = "deepskyblue";
    document.getElementById('myStyle').style.font = "bold 22px sans serif";
}
function green(){
    document.getElementById('myStyle').style.borderColor = "green";
    document.getElementById('myStyle').style.backgroundColor = "lightgreen";
    document.getElementById('myStyle').style.font = " 25px arial,serif";
}
function yellow(){
    document.getElementById('myStyle').style.borderColor = "darkgoldenrod";
    document.getElementById('myStyle').style.backgroundColor = "lightyellow";
    document.getElementById('myStyle').style.font = "italic bold 26px sans serif";
}

