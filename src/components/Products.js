import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux";
import {addToCart} from "../services/actions/Action";

const useStyles = makeStyles({
  root: {
    marginTop:20,
    maxWidth: 345,
  },
  media: {
    height: 250,
    
  },
});

 function MediaCard(props) {
  const classes = useStyles();

  return (
    <Container>
    
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.detail}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="secondary" onClick={()=>props.addToCart(props)}>
                Add To Cart 
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
      </Container>
     
  );
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    addToCart: (data) => addToCart(data) ,
    
  }
}
export default connect (null,mapDispatchToProps) (MediaCard);