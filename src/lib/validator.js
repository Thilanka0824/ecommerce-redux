import { CheckCircleOutlineRounded } from "@mui/icons-material";
import React from "react";


const checker = (key, element) => {

  switch (key) {
    case "firstname":
      console.log(element);
      return false;
    case "lastname":
      console.log(element);
      return false;
    case "username":
      console.log(element);
      return false;
      case "email":
        console.log(element);
        return false;
    case "password":
      console.log(element);
      return false;
    default:
      break;
  }
};

export const validator = (props) => {
  //this is a function that takes in an object and checks if the object has the correct keys and values
  for (const key in props) {
    const element = props[key];
    checker(key, element);
  
  }
  
  return true;
};
