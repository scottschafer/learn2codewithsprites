// import React, { useEffect } from 'react'
// import { observer } from 'mobx-react-lite'
// import { Todo } from '../../../models/Sprite';
// import Button from '@material-ui/core/Button';
// import { Grid, Container, makeStyles, Paper, Input } from '@material-ui/core';
// // import mem from 'mem';
// // import { memoize, curry } from 'lodash/fp';

// type TodoListParams = {
//   todos: Array<Todo>;
//   todoToAdd: string;

//   toggleTodoCompletion: (index: number) => void,
//   setEditingId: (index: number) => void,
//   setTodoToAdd: (text: string) => void,
// }

// // function 
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   todoGrid: {
//     marginTop: 10,
//     paddingLeft: 10,
//     paddingRight: 20
//   }
// }));

// const TodoList = observer(({
//   todos,
//   todoToAdd,

//   toggleTodoCompletion,
//   setEditingId,
//   setTodoToAdd
// }: TodoListParams) => {
//   const classes = useStyles();

//   useEffect(() => {
//     console.log('TodoList was re-rendered');
//   });


//   // TODO: work out how to memoize these event handlers. The following needs more testing, and seems wrong (will these resolve to same func)?
//   //
//   // const handleClickToggleTodoCompletion = memoize(curry((id: number) => {
//   //   return (e: React.MouseEvent<HTMLElement>) => {
//   //     toggleTodoCompletion(id);
//   //   };
//   // }));

//   // const handleClickEdit = memoize(curry((id: number) => {
//   //   return (e: React.MouseEvent<HTMLElement>) => {
//   //     setEditingId(id);
//   //   };
//   // }));

//   const handleClickEdit = (e: React.MouseEvent<HTMLElement>) => {
//     const { id } = (e.currentTarget.dataset as any);
//     setEditingId(parseInt(id, 10))
//   };

//   const handleClickToggleCompletion = (e: React.MouseEvent<HTMLElement>) => {
//     const { id } = (e.currentTarget.dataset as any);
//     toggleTodoCompletion(parseInt(id, 10));
//   }

//   const handleChangeAddTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTodoToAdd(e.target.value);
//   }

//   return (
//     <Paper className={classes.root}>
//       <Grid container spacing={3} className={classes.todoGrid}>
//         {/* Existing TODOS */}
//         {todos && todos.map((t, i) =>
//           <Grid container spacing={3} key={t.id} style={{ margin: 0, marginBottom: 4, opacity: t.completed ? 0.5 : 1 }}>
//             <Grid item xs style={{ height: 40 }}>
//               <span
//                 data-id={t.id}
//                 onClick={handleClickToggleCompletion /*handleClickToggleTodoCompletion(t.id) */}
//                 style={{
//                   margin: 10,
//                   cursor: 'pointer',
//                   textDecoration: t.completed
//                     ? 'line-through'
//                     : 'none'
//                 }}>
//                 {t.text}
//               </span>
//             </Grid>
//             <Button
//               variant="outlined"
//               data-id={t.id}
//               onClick={handleClickEdit}
//               disabled={t.completed}>
//               Edit
//           </Button>
//             {/* createHandleClickEdit(t.id)} */}
//           </Grid>)}

//         <Grid container spacing={3} style={{ margin: 0, marginBottom: 4 }}>
//           <Grid item xs style={{ height: 40 }}>
//             <Input fullWidth={true} placeholder='Add a new TODO'
//               value={todoToAdd}
//               onChange={handleChangeAddTodoText}
//             >
//             </Input>
//           </Grid>
//           <Button
//             variant="outlined">
//             Add
//           </Button>
//         </Grid>
//       </Grid>
//     </Paper>
//   )
// })

// export default TodoList
