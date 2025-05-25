export const fetchProducts = async (dispatch) => {
  try {
    // Aquí deberías reemplazar la URL con tu endpoint real
    const response = await fetch(
      "https://improved-fishstick-x5vqrqvj4vxwh67vg-3001.app.github.dev/zapatillas"
    );

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    const data = await response.json();
    dispatch({//traemos data resultado del fetch
      type: "getProduct",
      payload: data,
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
