export const fetchProducts = async (genero,dispatch) => {
  try {
    // Aquí deberías reemplazar la URL con tu endpoint real
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/zapatillas/gender/${genero}`, 
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
  } catch (err) {
    console.log(err.message);
  }
};
