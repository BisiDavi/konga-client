import React from 'react';
import {Link} from 'react-router-dom';
import { Button,makeStyles,Breadcrumbs,
// Typography 
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import classes from './essentials.module.css'

export const LinkText = props => 
    <Link to={props.linkto}>{props.text}</Link>;


export const LinkButton = props => {
       return (
         <div className={classes.LinkButton}>
           <Link to={props.linkto}>
             <Button
               onClick={props.onClick}
               color={props.color}
               type={props.type}
               variant={props.variant}
             >
               {props.text}
             </Button>
           </Link>
         </div>
       );};


export const BreadCrumb = (props) => {
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs 
      separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link 
        color="inherit" 
        to={props.categoryLink} 
        onClick={handleClick}>
          {props.category}
        </Link>
        <Link color="inherit" 
        to={props.subcategoryLink} 
        onClick={handleClick}>
          {props.subcategory}
        </Link>
      </Breadcrumbs>
    </div>
  );
}