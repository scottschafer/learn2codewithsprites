// import React from 'react'
// import ReactDOM from 'react-dom'
// import { observer, useObservable } from 'mobx-react-lite'

// import TodoList from './components/TodoList'
// import Footer from './components/Footer'
// import './styles.css'

// export const App = observer(() => {
//   const store = useObservable({
//     todos: [
//       { id: 1, text: 'Buy eggs', completed: true },
//       { id: 2, text: 'Write a post', completed: false }
//     ],
//     toggleTodoCompletion(index) {
//       store.todos[index].completed = !store.todos[index]
//         .completed
//     },
//     get remainingTodos() {
//       return store.todos.filter(t => !t.completed).length
//     }
//   })
//   return (
//     <div className="App">
//       <h2>A Todo App yet again!</h2>
//       <TodoList
//         todos={store.todos}
//         toggleTodoCompletion={store.toggleTodoCompletion}
//       />
//       <Footer
//         remaining={store.remainingTodos}
//         total={store.todos.length}
//       />
//     </div>
//   )
// })

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
