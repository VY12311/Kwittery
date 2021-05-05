function addUser() {
    var iuser = localStorage.getItem("Username");
    var user = document.getElementById("user_name").value;
    if (iuser == user) {
        window.location = "kwitter_room.html";
    } else {
        localStorage.setItem("Username",user);
        window.location = "kwitter_room.html";
    }
}