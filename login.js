document.getElementById("login").innerHTML = '<div id="notLoged"><button onclick="login()">Log in</button>   <input type="email" id="username"></input>   <input type="password" id="password"></input></div><div id="loged" hidden><button>Log out</button> <div id="logedText"></div></div>'
document.head.innerHTML = document.head.innerHTML + '<link rel="stylesheet" href="login.css" />'

var user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
    document.getElementById('loged').removeAttribute("hidden");
    document.getElementById('notLoged').setAttribute("hidden", true);
    document.getElementById('logedText').innerHTML = "Bonjour " //+ CeQuIlFautAllerChercherDansUser
} else {
    // No user is signed in.
}

function login() {
    console.log("login cliqué")
    var email = document.getElementById("username").value
    var password = document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log("user s'est connecté")
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("error " + errorCode + ":", errorMessage)
            // ...
    });
}