export const fetchProducts = async (dispatch) => {
  try {
    // Aquí deberías reemplazar la URL con tu endpoint real
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "zapatillas" 
    );
//
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    const data = await response.json();
    dispatch({
      type: "getProduct",
      payload: data,
    });
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
