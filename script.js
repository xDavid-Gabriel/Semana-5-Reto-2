function pedido() {
  let eleccion = +prompt(`Elije tu hamburguesa preferida 1, 2 o 3`);
  let pedido = +prompt(`¿Cuántas hamburguesas quiere pedir?`);
  let pago = +prompt(`¿Metodo de pago?
        1. Efectivo
        2. Tarjeta (con un cargo del 5%)`);

  if (eleccion == 1 && pago == 1) {
    costo = 20;
  } else if (eleccion == 2 && pago == 1) {
    costo = 25;
  } else if (eleccion == 3 && pago == 1) {
    costo = 28;
  } else if (eleccion == 1 && pago == 2) {
    costo = 20 + 20 * 0.05;
  } else if (eleccion == 2 && pago == 2) {
    costo = 25 + 25 * 0.05;
  } else if (eleccion == 3 && pago == 2) {
    costo = 28 + 28 * 0.05;
  } else {
    console.log("Ingrese los datos correctamente");
  }

  if (eleccion == 1) {
    tipo = "Hamburguesa simple de S/20.00 Nuevos Soles";
  } else if (eleccion == 2) {
    tipo = "Hamburguesa doble de S/25.00 Nuevos Soles";
  } else {
    tipo = "Hamburguesa triple de S/28.00 Nuevos Soles";
  }

  if (pago == 1) {
    pago = "pago en efectivo es";
  } else {
    pago = "pago tiene un cargo del 5% (Paga con Tarjeta)";
  }

  swal(
    `¡PEDIDO LISTO!`,
    `ha elegido la ${tipo}, 
Ha pedido ${pedido} Hamburguesas, 
Su ${pago},
S/ ${costo * pedido} Nuevos Soles
confirme su pedido`,
    `success`,
    {
      dangerMode: true,
      buttons: true,
    }
  ).then((value) => {
    swal(`Gracias por su compra`);
  });
}
