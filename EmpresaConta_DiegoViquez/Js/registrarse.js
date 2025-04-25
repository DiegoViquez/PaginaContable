function mostrarLogin() {
    document.getElementById("registro").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }

  function mostrarRegistro() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("registro").classList.remove("hidden");
  }

  function registrar() {
    const nombre = document.getElementById("nombre").value;
    const cedula = document.getElementById("cedula").value;
    const correo = document.getElementById("correoRegistro").value;
    const contrasena = document.getElementById("contrasenaRegistro").value;

    if (!nombre || !cedula || !correo || !contrasena) {
      document.getElementById("mensajeRegistro").textContent = "Por favor, completa todos los campos.";
      return;
    }

    const usuario = {
      nombre: nombre,
      cedula: cedula,
      correo: correo,
      contrasena: contrasena
    };

    localStorage.setItem("usuario_" + correo, JSON.stringify(usuario));
    document.getElementById("mensajeRegistro").style.color = "green";
    document.getElementById("mensajeRegistro").textContent = "Usuario registrado correctamente.";
  }

  function iniciarSesion() {
    const correo = document.getElementById("correoLogin").value;
    const contrasena = document.getElementById("contrasenaLogin").value;

    const datos = localStorage.getItem("usuario_" + correo);

    if (!datos) {
      document.getElementById("mensajeLogin").textContent = "Usuario no encontrado.";
      return;
    }

    const usuario = JSON.parse(datos);

    if (usuario.contrasena === contrasena) {
      document.getElementById("mensajeLogin").style.color = "green";
      document.getElementById("mensajeLogin").textContent = "¡Bienvenido, " + usuario.nombre + "!";
    } else {
      document.getElementById("mensajeLogin").style.color = "red";
      document.getElementById("mensajeLogin").textContent = "Contraseña incorrecta.";
    }
  }