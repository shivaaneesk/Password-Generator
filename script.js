const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?","/"];

function GenPass(){
    let pass1 ="";
    for(let i = 0; i < 15; i++){
        pass1 += characters[Math.floor(Math.random()*characters.length)];
    }

    let pass2 ="";
    for(let i = 0; i < 15; i++){
        pass2 += characters[Math.floor(Math.random()*characters.length)];
    }
    let passEl1 = document.getElementById("btn1");
    passEl1.innerText = pass1;

    let passEl2 = document.getElementById("btn2");
    passEl2.innerText = pass2;
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }
}

