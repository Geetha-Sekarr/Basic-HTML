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


// specific clear cookies
document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=example.com; secure";


//delete all cookies 
function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    cookies.forEach(function(cookie) {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}


// Example to get a specific cookie (e.g., "session-id")
console.log(getCookie("session-id"));

//session storage
let username = sessionStorage.getItem('username');
console.log(username);
