
 function reducer (state=[{color:{true:'success',false:'danger'},text:{password:'password not match',empty:'you need fill all the inputs'}}],action) {

    switch(action.type){
        case 'SAVECOLOR':
        const color = [...state ,action.patload]
        return color 
      
        default:
      return state;
  }
}




export default reducer