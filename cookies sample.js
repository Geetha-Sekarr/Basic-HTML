function getCookie(name) {
    let cookieArr = document.cookie.split(";"); 
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Example to get a specific cookie (e.g., "session-id")
console.log(getCookie("session-id"));

//session storage
let username = sessionStorage.getItem('username');
console.log(username);
