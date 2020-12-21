import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router-dom";
import FaceSharpIcon from "@material-ui/icons/FaceSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import Header from "../components/Header";

const Basic = (props) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(props);
    if (newValue === 0) {
      props.history.push("/clothes");
      // window.location="/clothes"
    } else if (newValue === 1) {
      props.history.push("/kids");
    }
  };

  return (
    
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor=""
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Women" icon={<FaceSharpIcon />} />
        <Tab label="Hot-Arrive" icon={<FavoriteSharpIcon />} />
      </Tabs>
    </Paper>
  );
};

export default withRouter(Basic);
