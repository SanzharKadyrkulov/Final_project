// import { makeStyles, TextField, Button, Fade } from '@material-ui/core';
// import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useProducts } from '../../contexts/ProductContext';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import { CircularProgress, IconButton } from '@material-ui/core';
// import RestoreIcon from '@material-ui/icons/Restore';
// import { useState } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
// import SendIcon from '@material-ui/icons/Send';
// import SaveIcon from '@material-ui/icons/Save';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import HeaderLayout from "../../layouts/HeaderLayout";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       margin: 'auto',
//       maxWidth: '100%',
//       maxHeight: '100%',
//       height: "100vh",
//       position: 'relative',
//       color: theme.palette.common.white,
//       marginBottom: theme.spacing(4),
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'top',
//       marginBottom: theme.spacing(0)
//     },
//     //   image: {
//     //     width: 200,
//     //     height: "100%",
//     //   },
//     img: {
//       margin: 'auto',
//       display: 'block',
//       maxHeight: '50vh',
//     },
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper_modal: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
//     input: {
//       color: "#000",
//       borderRightColor: '#FFF'
//   },
//   input__label: {
//       color: "#c53f45",
//       borderRightColor: '#FFF'
//   },
//   }));

// const ProductComments = () => {
//     const { getProductDetails, productDetails, history, editProduct } = useProducts()
//     const {user} = useAuth()
//     const  id  = 20
//     useEffect(() => {
//         getProductDetails(id)
//     }, [id])
//     const [product, setProduct] = useState(productDetails)
//     useEffect(() => {
//         setProduct(productDetails)
//     }, [productDetails])
//     const classes = useStyles();
//     const [comment, setComment] = useState({})
//     const handleInput = (e) => {

//         if(productDetails){
//             setComment({
//                 email: user.email,
//                 comment: e.target.value,
//                 date: new Date().toLocaleString()
//             })
//             console.log(comment);
//         }
//     }
//     const sendComment = async (e, id, productos) => {
//         e.preventDefault()
//         if(e.target.parentNode.firstChild.lastChild.firstChild && e.target.parentNode.firstChild.lastChild.firstChild.value.trim()){
//             e.target.parentNode.firstChild.lastChild.firstChild.value = ''
//             let newComment = [...productos.comments]
//             newComment.push(comment)
//             let productWithComment = {
//                 ...productos,
//                 comments: newComment
//             }
//             const data = await editProduct(id, productWithComment)
//             setProduct(productWithComment);
//         }

//     }
//     const deleteComment = async (index, id, productos) => {
//         let deletedComment = [...productos.comments]
//         const del = deletedComment.splice(index, 1)
//         let productWithoutComment = {
//             ...productos,
//             comments: deletedComment
//         }
//         const data = await editProduct(id, productWithoutComment)
//             setProduct(productWithoutComment);

//     }
//     const editComment = async (index, id, productos) => {
//         handleClose()
//         let editedComment = [...productos.comments]
//         console.log(index);
//         const del = editedComment.splice(index, 1, comment)
//         let productWithEditedComment = {
//             ...productos,
//             comments: editedComment
//         }
//         const data = await editProduct(id, productWithEditedComment)
//             setProduct(productWithEditedComment);
//     }
//     const whoIsAuthor = (commentixx) => {
//         if(user && commentixx.email===user.email){
//             return true
//         }else{
//             return false
//         }
//     }
//     const marginOfComment = (commentixx) => {
//         if(whoIsAuthor(commentixx)){
//             return{
//                 marginLeft: '100px',
//                 maxWidth: '350px'
//             }
//         }else{
//             return {
//                 maxWidth: "350px"
//             }
//         }
//     }
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
// let loginContainer = {
//     padding: "60px",
//     margin: "auto",
//     width: "100%",
//     maxWidth: "550px",
//     minHeight: "600px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     // backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
//     // background: "rgba(1, 1, 1, .7)",
//     boxShadow: "0 40px 60px -20px rgba(0, 0, 0, 0.8)",
//     borderRadius: "45px",
// };

// return (
//     <>
//     <HeaderLayout>

//   {productDetails ?

//       // <Paper style={{ backgroundImage: `url(${productDetails.animation})`}} className={classes.paper}>
//         <Paper style={loginContainer}  spacing={2}>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 {product ? product.comments.map((commentix, index) => (
//                     <div style={marginOfComment(commentix)}>
//                         <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'flex-start'}}>
//                             <p style={{color:'#c10921'}}>{commentix.email}</p>
//                             <p style={{ fontSize: '12px', color: 'gray', marginLeft: '10px'}}>{commentix.date}</p>

//                         </div>
//                         <div><p style={{color: '#000', marginBottom: '2px'}}>{commentix.comment}</p></div>
//                         {whoIsAuthor(commentix) ?<button onClick={() => deleteComment(index, product.id, product)} style={{transform: 'scale(0.7)', color: '#fff', backgroundColor:"#c10921",borderRadius:'5px'}}>delete</button>:<></>}
//                         {whoIsAuthor(commentix) ?<button type="button" onClick={() => handleOpen()} style={{transform: 'scale(0.7)', color: '#fff', backgroundColor:"#c10921",borderRadius:'5px'}}>edit</button>:<></>}
//                 <Modal
//                     aria-labelledby="spring-modal-title"
//                     aria-describedby="spring-modal-description"
//                     className={classes.modal}
//                     open={open}
//                     onClose={handleClose}
//                     closeAfterTransition
//                     BackdropComponent={Backdrop}
//                     BackdropProps={{
//                     timeout: 500,
//                     }}
//                 >
//                     <Fade in={open}>
//                     <div className={classes.paper_modal}>
//                     <TextField
//                         variant='outlined'
//                         label='Edit Comment'
//                         color='secondary'
//                         style={{width:'420px'}}
//                         onChange={(e) => handleInput(e)}
//                         />
//                         <Button
//                   type='submit  '
//                   edge="end"

//                   aria-label="account of current user"
//                   aria-haspopup="true"
//                   color="inherit"
//                   onClick={(e) => editComment(index, product.id, product)}
//                 >
//                   <SaveIcon color="white" />

//                 </Button>
//                     </div>
//                     </Fade>
//                 </Modal>
//                     </div>
//                 )):
//                 <></>
//                 }
//                 <form style={{marginTop: '6px'}}>

//                 <TextField
//                 variant='outlined'
//                 label='Message'
//                 color='secondary'
//                 style={{width:'83%'}}
//                 onChange={(e) => handleInput(e)}
//                 InputLabelProps={{className: classes.input__label}}
//                         inputProps={{ className: classes.input }}
//                 />
//                 <Button
//                   type='submit  '
//                   edge="end"

//                   aria-label="account of current user"
//                   aria-haspopup="true"
//                   color="inherit"
//                   onClick={(e) => sendComment(e, product.id, product)}
//                 >
//                   <SendIcon color="secondary" />

//                 </Button>
//                 </form>

//                 {/* <Typography variant="h4">{productDetails.price}$</Typography> */}
//               </Grid>
//               {/* <Grid item>
//                 <IconButton
//                   edge="end"
//                   aria-label="account of current user"
//                   aria-haspopup="true"
//                   color="inherit"
//                   onClick={() => history.push('/productlist')}
//                 >
//                   <RestoreIcon style={{border:'2px solid rgba(52, 52, 52, 0.5)', borderRadius:"50%"}} color="white" />

//                 </IconButton>
//               </Grid> */}
//             </Grid>
//           </Grid>
//         </Paper>
//       // </Paper>

//     :
//     <CircularProgress />
//   }
//     </HeaderLayout>
// </>
// );
// };

// export default ProductComments;

import React, { useRef, useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import HeaderLayout from '../../layouts/HeaderLayout';

const useStyles = makeStyles((theme) => ({
	input: {
		color: '#000',
		borderRightColor: '#FFF',
	},
	input__label: {
		color: '#e96a1b',
		borderRightColor: '#FFF',
	},
}));
const ProductComments = () => {
	const classes = useStyles();
	const [messages, setMessages] = useState([]);
	const [value, setValue] = useState('');
	const socket = useRef();
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState('');

	function connect() {
		socket.current = new WebSocket('ws://localhost:5000');

		socket.current.onopen = () => {
			setConnected(true);
			const message = {
				event: 'connection',
				username,
				id: Date.now(),
			};
			socket.current.send(JSON.stringify(message));
		};
		socket.current.onmessage = (event) => {
			const message = JSON.parse(event.data);
			setMessages((prev) => [...prev, message]);
		};
		socket.current.onclose = () => {
			console.log('Socket закрыт');
		};
		socket.current.onerror = () => {
			console.log('Socket произошла ошибка');
		};
	}

	const sendMessage = async (e) => {
		e.preventDefault();
		e.target.parentNode.firstChild.lastChild.firstChild.value = '';
		const message = {
			username,
			message: value,
			id: Date.now(),
			event: 'message',
			date: new Date().toLocaleString(),
		};
		socket.current.send(JSON.stringify(message));
		setValue('');
	};

	let loginContainer = {
		padding: '60px',
		margin: 'auto',
		width: '100%',
		maxWidth: '550px',
		minHeight: '600px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		// backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
		background: '#ecd694',
		boxShadow: '0 40px 60px -20px rgba(0, 0, 0, 0.8)',
		borderRadius: '45px',
	};

	const marginOfComment = (mess) => {
		if (username === mess.username) {
			return {
				marginLeft: '85px',
				width: '350px',
				background: '#f9eabd',
				borderRadius: '10px',
				padding: '2px',
				marginTop: '5px',
			};
		} else {
			return {
				width: '350px',
				background: '#f9eabd',
				borderRadius: '10px',
				padding: '2px',
				marginTop: '5px',
			};
		}
	};
	const lastRef = useRef();
	const listRef = useRef();
	const scrollToBottom = () => {
		lastRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	if (!connected) {
		return (
			<div style={{ width: '100%' }}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						connect();
					}}
					style={{ margin: '25px auto', width: 'fit-content' }}
				>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type='text'
						placeholder='Введите ваше имя'
					/>
					<button type='submit'>Войти</button>
				</form>
			</div>
		);
	}
	return (
		<>
			<HeaderLayout>
				<Paper style={loginContainer} spacing={2}>
					<h1 style={{ position: 'absolute', top: '110px' }}>Let's chat!</h1>
					<Grid item xs={12} sm container>
						<Grid item xs container direction='column' spacing={2}>
							<Grid
								className='no-scroll'
								style={{ overflow: 'scroll' }}
								item
								xs
								ref={listRef}
							>
								{messages.map((mess) => (
									<div key={mess.id}>
										{mess.event === 'connection' ? (
											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													alignItems: 'center',
													justifyContent: 'center',
													color: 'gray',
												}}
											>
												<span>
													Пользователь{' '}
													<span style={{ color: '#d28036' }}>
														{mess.username}
													</span>{' '}
													подключился
												</span>
											</div>
										) : (
											<div style={marginOfComment(mess)}>
												<div
													style={{
														display: 'flex',
														flexDirection: 'row',
														alignItems: 'center',
														justifyContent: 'flex-start',
													}}
												>
													<p style={{ color: '#d28036' }}>{mess.username}</p>
													<p
														style={{
															fontSize: '12px',
															color: 'gray',
															marginLeft: '10px',
														}}
													>
														{mess.date}
													</p>
												</div>
												<div>
													<p style={{ color: '#000', marginBottom: '2px' }}>
														{mess.message}
													</p>
												</div>
											</div>
										)}
									</div>
								))}
								<div style={{ position: 'relative' }}>
									<div
										ref={lastRef}
										style={{ position: 'absolute', top: '100px', left: 0 }}
									></div>
								</div>
							</Grid>
							<form style={{ marginTop: '6px' }}>
								<TextField
									variant='outlined'
									label='Message'
									color='secondary'
									style={{ width: '83%' }}
									value={value}
									onChange={(e) =>
										value.length < 35 && setValue(e.target.value)
									}
									InputLabelProps={{ className: classes.input__label }}
									inputProps={{ className: classes.input }}
								/>
								<Button
									type='submit  '
									edge='end'
									aria-label='account of current user'
									aria-haspopup='true'
									onClick={(e) => {
										e.preventDefault();
										setTimeout(scrollToBottom, 100);
										value && sendMessage(e);
									}}
								>
									<SendIcon style={{ color: '#e96a1b' }} />
								</Button>
							</form>
						</Grid>
					</Grid>
				</Paper>
			</HeaderLayout>
		</>
	);

	// return (
	//   <div className="center">
	//     <div>
	//       <div className="form">
	//         <input
	//           value={value}
	//           onChange={(e) => setValue(e.target.value)}
	//           type="text"
	//         />
	//         <button onClick={sendMessage}>Отправить</button>
	//       </div>
	//       <div className="messages">
	//         {messages.map((mess) => (
	//           <div key={mess.id}>
	//             {mess.event === "connection" ? (
	//               <div className="connection_message">
	//                 Пользователь {mess.username} подключился
	//               </div>
	//             ) : (
	//               <div className="message">
	//                 {mess.username}. {mess.message}
	//               </div>
	//             )}
	//           </div>
	//         ))}
	//       </div>
	//     </div>
	//   </div>
	// );
};

export default ProductComments;
