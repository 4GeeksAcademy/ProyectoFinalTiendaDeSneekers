export const initialStore=()=>{
  return{
    message: null,
    products: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
   case "getProduct": 
   return {
    ...store,
    products: action.payload
   }
    default:
      throw Error('Unknown action.');
  }    
}
