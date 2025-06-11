export const initialStore = () => {
  return {
    message: null,
    products: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "getProduct":
      return {
        ...store,
        products: action.payload
      };
    case "addProduct":
      const { marca, zapatilla } = action.payload;
      const products = [...store.products];
      const marcaIndex = products.findIndex(p => p.marca === marca);

      if (marcaIndex >= 0) {
        products[marcaIndex] = {
          ...products[marcaIndex],
          zapatillas: [...products[marcaIndex].zapatillas, zapatilla]
        };
      } else {
        products.push({
          marca,
          zapatillas: [zapatilla]
        });
      }

      return {
        ...store,
        products
      };
    case "delete":
      const { id } = action.payload;
      const updatedProducts = store.products.map(product => {
        if (product.marca === action.payload.marca) {
          return {
            ...product,
            zapatillas: product.zapatillas.filter(z => z.id !== id)
          };
        }
        return product;
      }).filter(product => product.zapatillas.length > 0);

      return {
        ...store,
        products: updatedProducts
      };
    case "updateProduct":
      const updateZapa  = action.payload;
      const updatedProductsList = store.products.map(product => {
        if (product.marca === updateZapa.marca) {
          return {
            ...product,
            zapatillas: product.zapatillas.map(z => z.id === updateZapa.id ? updateZapa : z)
          };
        }
        return product;
      });

      return {
        ...store,
        products: updatedProductsList
      };
    default:
      throw new Error('Unknown action.');
  }
}
