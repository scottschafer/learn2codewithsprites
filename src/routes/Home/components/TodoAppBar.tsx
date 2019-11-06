// import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { observer } from 'mobx-react-lite';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// type TodoAppBarParams = {
//   remaining: number;
//   total: number;
// }

// // type TodoAppBarParams = {
// //   hasCounts: {
// //     remainingTodos: number;
// //     totalTodos: number;
// //   }
// // }

// //function Footer({ remaining, total }: FooterParams) {

// const TodoAppBar = observer(({ remaining, total }: TodoAppBarParams) => {
//   const classes = useStyles();


//   useEffect(() => {
//     console.log('TodoAppBar was re-rendered');
//   });

//   //const { remainingTodos, totalTodos } = hasCounts;

//   const remainingTodos = remaining;
//   const totalTodos = total;

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             {remainingTodos} / {totalTodos} left
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// });


// export default TodoAppBar
