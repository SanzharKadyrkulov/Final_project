import { makeStyles, TextField, Button, Fade, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { CircularProgress, IconButton } from "@material-ui/core";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import SendIcon from "@material-ui/icons/Send";
import { Rating } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100vh",
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    marginBottom: theme.spacing(0),
  },
  //   image: {
  //     width: 200,
  //     height: "100%",
  //   },
  img: {
    margin: "auto",
    display: "block",
    maxHeight: "50vh",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper_modal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    color: "#000",
    borderRightColor: "#FFF",
  },
  input__label: {
    color: "#c53f45",
    borderRightColor: "#FFF",
  },
}));

const ProductRating = () => {
  const {
    getProductDetails,
    getProductsData,
    productDetails,
    history,
    editProduct,
  } = useProducts();
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, [id]);
  const [product, setProduct] = useState(productDetails);
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  const classes = useStyles();
  const [value, setValue] = React.useState(5);
  const [rating, setRating] = useState({
    email: user.email,
    rating: 5,
    productId: product.id,
  });
  const handleInput = (newValue) => {
    if (productDetails) {
      setRating({
        email: user.email,
        rating: newValue,
        productId: product.id,
      });
      console.log(rating);
    }
  };
  const sendRating = async (e, id, productos) => {
    e.preventDefault();
    // if(e.target.parentNode.firstChild.lastChild.firstChild && e.target.parentNode.firstChild.lastChild.firstChild.value.trim()){
    //     e.target.parentNode.firstChild.lastChild.firstChild.value = ''
    let newRating = [...productos.ratings];
    newRating.push(rating);
    let productWithRating = {
      ...productos,
      ratings: newRating,
    };
    const data = await axios.post(
      "http://localhost:8001/api/v1/rating",
      rating
    );
    getProductsData();
    setProduct(productWithRating);
    console.log(productWithRating);
    getProductDetails(id);
    // }
  };

  return (
    <>
      {productDetails ? (
        <Paper
          style={{
            backgroundColor: "#fff",
            color: "white",
            maxWidth: "600px",
            minWidth: "500px",
            marginTop: "10px",
          }}
          spacing={2}
        >
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{ display: "flex", alignItems: "center" }}>
                {/* <form style={{marginTop: '6px'}}> */}

                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(newValue);
                    handleInput(newValue);
                  }}
                />
                <Button
                  type="submit  "
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={(e) => sendRating(e, product.id, product)}
                >
                  <AddIcon style={{ color: "#e96a1b" }} />
                </Button>
                {/* </form> */}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ProductRating;
