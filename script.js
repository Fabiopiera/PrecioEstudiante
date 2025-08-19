// Cargar precios desde JSON y crear la tabla
fetch("precios.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("lista-precios");
    let html = "<table><tr><th>Servicio</th><th>Precio</th></tr>";
    data.forEach((item) => {
      html += `<tr><td>${item.servicio}</td><td>${item.precio}</td></tr>`;
    });
    html += "</table>";
    container.innerHTML = html;
  })
  .catch((error) => {
    console.error("Error cargando precios:", error);
    document.getElementById("lista-precios").innerHTML =
      "<p>No se pudieron cargar los precios.</p>";
  });
