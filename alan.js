
const request = new XMLHttpRequest();
function sendText() {
    let text = document.getElementById("text").value
    let msg = "https://api.telegram.org/API_KEY/sendMessage?chat_id=@username&text=" + text
    request.open("GET",msg)
request.send();
    
}