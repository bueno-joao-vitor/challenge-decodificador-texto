document.getElementById("btnCriptografar").addEventListener("click", function() {
    const inputTexto = document.getElementById("inputTexto").value;
    const outputTexto = document.getElementById("outputTexto");
    const placeholder = document.getElementById("placeholder");
    const btnCopiar = document.getElementById("btnCopiar");
    const mensagem = document.getElementById("mensagem");
    const instrucaoMensagem = document.getElementById("instrucaoMensagem");

    if (inputTexto === "") {
        placeholder.style.display = "block";
        mensagem.style.display = "block";
        instrucaoMensagem.style.display = "block";
        outputTexto.value = "";
        btnCopiar.style.display = "none";
    } else {
        const textoCriptografado = criptografar(inputTexto);
        outputTexto.value = textoCriptografado;
        placeholder.style.display = "none";
        mensagem.style.display = "none";
        instrucaoMensagem.style.display = "none";
        btnCopiar.style.display = "block";
    }

    document.getElementById("inputTexto").value = "";
});

document.getElementById("btnDescriptografar").addEventListener("click", function() {
    const inputTexto = document.getElementById("inputTexto").value;
    const outputTexto = document.getElementById("outputTexto");
    const placeholder = document.getElementById("placeholder");
    const btnCopiar = document.getElementById("btnCopiar");
    const mensagem = document.getElementById("mensagem");
    const instrucaoMensagem = document.getElementById("instrucaoMensagem");

    if (inputTexto === "") {
        placeholder.style.display = "block";
        mensagem.style.display = "block";
        instrucaoMensagem.style.display = "block";
        outputTexto.value = "";
        btnCopiar.style.display = "none";
    } else {
        const textoDescriptografado = descriptografar(inputTexto);
        outputTexto.value = textoDescriptografado;
        placeholder.style.display = "none";
        mensagem.style.display = "none";
        instrucaoMensagem.style.display = "none";
        btnCopiar.style.display = "block";
    }

    document.getElementById("inputTexto").value = "";
});

document.getElementById("btnCopiar").addEventListener("click", function() {
    const outputTexto = document.getElementById("outputTexto");
    outputTexto.select();
    document.execCommand("copy");
});

function criptografar(texto) {
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoCriptografado;
}

function descriptografar(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDescriptografado;
}