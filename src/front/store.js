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
    default:
      throw Error('Unknown action.');
  }    
}
