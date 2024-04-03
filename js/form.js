//declaracion de variables / declaration of variables

const options = document.querySelector(".options").children;
const formContainer = document.querySelector(".form-container");
const errorDiv = document.querySelector(".error");

let confirmPassword;
let showing = false;
let errorMessage = "El Email, nombre de usuario o contraseña es erroneo"

// funcion encargada de hacer funcionar el boton de ver contraseña

const actSeePassword = () => {

    const eye = document.querySelector(".see-password");

    eye.addEventListener("click", () => {

        eye.previousElementSibling.type == "password" ? eye.previousElementSibling.type = "text" : eye.previousElementSibling.type = "password";
        if (showing) {

            eye.classList = "fa-solid fa-eye see-password";
            showing = false;
        } else {

            eye.classList = "fa-solid fa-eye-slash see-password";
            showing = true;
        }
    });
};
actSeePassword();

// comprueba que los datos ingresados sean validos

const actChecker = () => {

    const submitButton = document.querySelector(".submit");
    const email = document.getElementById("user-id");
    const password = document.getElementById("user-password");

    submitButton.addEventListener("click", e => {

        e.preventDefault();
    
        let eV = email.value;
        let pV = password.value;
    
        try {
    
            if (confirmPassword != undefined) {
    
                if (confirmPassword.value != pV) {
        
                    throw new Error(errorMessage);
                }
            }

            if (pV.length < 1 || pV.length > 55) {

                throw new Error(errorMessage);
            }
    
            if (!eV.includes("@") || eV.includes("..")) {
    
                throw new Error(errorMessage);
            } else {
        
                let parts = eV.split("@");
        
                if (parts[0].length < 1 || parts[0].length > 64) {
        
                    throw new Error(errorMessage);
                } else {

                    if(parts[1].length < 4 || parts[1].length > 255) {

                        throw new Error(errorMessage);
                    } else {

                        if ((parts[1].slice(parts[1].lastIndexOf("."))).length < 2 || (parts[1].slice(parts[1].lastIndexOf("."))).length > 4) {

                            throw new EvalError(errorMessage);
                        }
                    }
                }
            }
        } catch (error) {
    
            errorDiv.innerHTML = errorMessage;
        }
    });
}

actChecker();

// cambiar el tipo de formulario / change form type

for (const option of options) {

    let code;
    if (option.innerHTML == "Log in") {

        code = `
        <div>
            <label for="user-id">Correo Electronico o Nombre Usuario</label>
            <input id="user-id" type="email">
        </div>
        <div>
            <label for="user-password">Contraseña</label>
            <input id="user-password" type="password">
            <i class="fa-solid fa-eye see-password"></i>
        </div>
        <button>Cancelar</button>
        <button type="submit" class="submit">Entrar</button>
        `;
    } else {

        code = `
        <div>
            <label for="user-id">Correo Electronico</label>
            <input id="user-id" type="email">
        </div>
        <div>
            <label for="user-password">Contraseña</label>
            <input id="user-password" type="password">
            <i class="fa-solid fa-eye see-password"></i>
        </div>
        <div>
            <label for="confirm-password">Confirmar contraseña</label>
            <input id="confirm-password" type="password">
        </div>
        <button>Cancelar</button>
        <button class="submit" type="submit">Entrar</button>
        `;
    }

    option.addEventListener("click", () => {

        if (!(option.classList == "selected")) {

            for (const owc of options) {

                if (owc.classList == "selected") {

                    owc.classList = " ";
                    break;
                }
            }
            option.classList = "selected";

            document.querySelector(".form-title").innerHTML = option.innerHTML;
            formContainer.innerHTML = code;

            if (document.getElementById("confirm-password") == undefined) {

                confirmPassword = undefined;
            } else {

                confirmPassword = document.getElementById("confirm-password");
            }

            errorDiv.innerHTML = "";

            actSeePassword();
            actChecker();
        }
    });
}

