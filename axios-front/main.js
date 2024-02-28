//window.location.href = "//www.devmedia.com.br";
let render = document.getElementById("render");


function imprimir(){
    alert("Ola")
     var link = "/teste";
     handleFile("login.html")
    
}

function handleFile(files){
    const reader = new FileReader();
    reader.onload = (event) => {
        let data = event.target.result;
        document.getElementById("texto").value = data; 
    };
    reader.readAsText(files[0]);
}