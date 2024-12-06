function OpenForm(){
     window.location.href = 'AccForm.html'
}
function OpenAcc(){
    window.location.href = "https://example.com/"
}
if (window.location.pathname.includes('AccForm.html')) {

    window.updateParentText = function () {
        const newText = document.getElementById('nameInput').value
        sessionStorage.setItem("newText", newText);
        window.location.href = "index.html"
    }
}

if (window.location.pathname.includes("index.htm") && sessionStorage.getItem("newText") != null){
    const newText = sessionStorage.getItem("newText")

    document.querySelector("#loginButton p").textContent = newText;
    document.getElementById("loginButton").onclick = OpenAcc;
}
