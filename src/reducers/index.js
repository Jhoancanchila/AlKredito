export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        users: action.payload,
      }
    case 'REGISTER':
      return {
        ...state,
        users: action.payload,
      }
    case 'UPDATE_INFO_USER':
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state;
  }
}
