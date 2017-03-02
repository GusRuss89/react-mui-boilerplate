export default function todos (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return action.payload
    default:
      return state
  }
}
