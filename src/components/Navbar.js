import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@material-ui/core/Typography";
import ToolBar from "@material-ui/core/ToolBar";
import { Container,  AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <AppBar color="Secondary">
          <ToolBar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/">
              <Button style={{ color: "white", fontSize: "20px" }}>
                MyShopping.com
              </Button>
              </Link>
            </Typography>
            <Link to = "Cart">
            <Button style={{ color: "white", fontSize: "60px" }}
              color="primary"
              className={classes.button}
              startIcon={<ShoppingCartIcon />}
               >{props.cartData.length||""}</Button></Link>
          </ToolBar>
        </AppBar>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  const { cartItems } = state;
  return { cartData: cartItems.cartData };
}

export default connect(mapStateToProps)(Navbar);

