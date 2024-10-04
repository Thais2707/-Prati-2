document.getElementById('Formulario_de_Contato').addEventListener('input', function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    const isFormValid = name && email && message && terms;

    document.getElementById('submitbtn').disabled = !isFormValid;
});