import React, { useState, useEffect, useRef, Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import FileSystemNavigator from "../TreeView";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({ 
    root: {

    }
    }))


const Drawer = () => {
const classes = useStyles();


  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div
        style={{
          position: "relative",
          transform: drawerTransfer,
          transitionDuration: ".5s",
          AnimationTimingFunction: "ease"
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider
          style={{
            marginBottom: 34
          }}
        />
        <label htmlFor="Orientation">Orientacja:</label>
        <ButtonGroup
          variant="contained"
          size="small"
          aria-label="small contained button group"
          style={{
            display: "grid",
            gridTemplateColumn: "1fr 1fr",
            gridTemplateRow: "1fr 1fr"
          }}
        >
          <Button style={{ display: "block" }}>Pozioma</Button>
          <Button style={{ display: "block" }}>Pionowa</Button>
          <Button style={{ display: "block" }}>Kwadratowa</Button>
          <Button active style={{ display: "block" }}>
            Wszystkie
          </Button>
        </ButtonGroup>
        <Divider
          style={{
            marginTop: 55,
            marginBottom: 34
          }}
        />
        <label htmlFor="Orientation">Tematy:</label>
        <List>
          <ListItem>
            <FileSystemNavigator></FileSystemNavigator>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Drawer;
