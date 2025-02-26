function showEmail() {
    var user = "probst404";
    var domain = "gmail.com";
    var email = user + "@" + domain;
    document.getElementById("email-link").href = "mailto:" + email;
}