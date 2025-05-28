export const initialStore=()=>{
  return{
    message: null,
    products: []//variable-fetch
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
   case "getProduct": //dispatch
   return {
    ...store,
    products: action.payload
   }
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
    
    default:
      throw Error('Unknown action.');
  }    
}
