/*
  creador de acciones y creador de reducers
  params: path
  return: obj::createActionCreator,createRedux
*/
function createFlux(path) {

  const resetState = `${path}/SET_INITIALSTATE`;

  return {
    /*
      creador de creador accion para setear estado inicial
      params:  none
      return func::actionCreator
    */
    createActionInitialState: () => () => ({type:resetState}),


    /*
      create action creator
      params: string::actiontype
      return: func::createactionCreator
    */
    createActionCreator: function (actionType){
      const completePath = `${path}/${actionType}`;
      return (data) => ({
        type: completePath,
        payload: data,
      })
    },



    /*
      createReducer
      params: string::actionType
      return func::createReducer
    */
    createReducer: function (initialState, actionType, type='REMPLACE'){
      const completePath = `${path}/${actionType}`;
      if (type === 'REMPLACE'){
        function reducer (state = initialState, action={}){
          if (completePath === action.type){
            return action.payload;
          } else if (resetState === action.type){
            return initialState;
          } else {
            return state;
          }
        }
        return reducer;
      } else {
        function reducer (state = initialState, action={}){
          if (completePath === action.type){
            return state.concat(action.payload);
          } else if (resetState === action.type){
            return initialState;
          } else {
            return state;
          }
        }
        return reducer;
      }
    }
  }
}

export default createFlux;
