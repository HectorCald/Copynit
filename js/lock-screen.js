//********************FUNCION PARA VALIDAR EL CODIGO */
function validateCode() {
    const digit1 = document.getElementById("digit1").value;
    const digit2 = document.getElementById("digit2").value;
    const digit3 = document.getElementById("digit3").value;
    const digit4 = document.getElementById("digit4").value;

    const code = digit1 + digit2 + digit3 + digit4;

    if (code === "1234") { // Código correcto
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";
    } else {
        document.getElementById("errorMessage").textContent = "Código incorrecto. Inténtalo de nuevo.";
    }
}
//********************CODIGO PARA PASAR DE UN CUADRO A OTRO AL INGRESAR EL CODIGO */
const inputs = document.querySelectorAll('.code-input');
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});
