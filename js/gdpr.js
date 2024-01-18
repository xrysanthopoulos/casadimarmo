function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie() {
    let cookie = getCookie("csdmx");
    if (cookie == "" || cookie == null ) {
        setCookie("csdmx", 0, 180);
    }
}

document.addEventListener("DOMContentLoaded", function () {
checkCookie();
let gdpr = `<p>Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να παρακολουθούμε τη χρήση του ιστότοπου.</p>
                    <button class="bttn btn-blue" onclick="myFunction()">Συμφωνώ</button>`;

if (getCookie("csdmx") == "0") {
    document.getElementById("gdpr").innerHTML += gdpr;
} else {
    document.getElementById("gdpr").remove();
}
});

function myFunction() {
    let cookie = getCookie("csdmx");
    console.log(cookie);
    let myobj = document.getElementById("gdpr");
    setCookie("csdmx", 1, 180);
    myobj.remove();
}