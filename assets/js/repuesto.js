document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página recargue

        // Verifica si todos los campos están llenos
        let nombre = document.getElementById("nombre").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let marca = document.getElementById("marca").value.trim();
        let modelo = document.getElementById("modelo").value.trim();
        let anio = document.getElementById("anio").value.trim();
        let tipo = document.getElementById("tipo-mantenimiento").value;
        
        if (nombre && telefono && correo && marca && modelo && anio && tipo) {
            alert("✅ ¡Gracias por tu solicitud! En breve nos comunicaremos contigo.");
            this.reset(); // Limpia el formulario después de enviarlo
        } else {
            alert("⚠️ Por favor, completa todos los campos antes de enviar.");
        }
    });