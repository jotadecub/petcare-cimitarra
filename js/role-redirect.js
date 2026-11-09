/* Maqueta navegable: no hay autenticación real.
   Cambia el destino del formulario según el rol elegido (dueño o veterinario). */
(function () {
  var destinos = {
    dueno: "panel.html",
    veterinario: "panel-veterinario.html"
  };

  document.querySelectorAll("form[data-role-form]").forEach(function (form) {
    function actualizarDestino() {
      var rol = form.querySelector('input[name="rol"]:checked');
      if (rol && destinos[rol.value]) {
        form.action = destinos[rol.value];
      }
    }

    form.addEventListener("change", actualizarDestino);
    actualizarDestino();
  });
})();
