import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useForm from 'react-hook-form';


const styles  = theme => ({
  root: {
    flexGrow: 1,
    position: '-webkit-sticky',
    position: 'sticky',
    marginTop: "-40px",
    zIndex: "100"
  },

  appBar: {
    backgroundColor: "#fff",
    boxShadow: "0px 1px 1px -1px rgba(0,0,0,0.1),0px 1px 2px 0px rgba(0,0,0,0.04),0px 1px 3px 0px rgba(0,0,0,0.12)",
   
    width: "100vw",


   
  
},

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    
    height: '63px',
    color: "#393536",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.05),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.12),
    },

    marginRight: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#393536",
  },
  inputRoot: {
    color: 'inherit',
    fontSize: "22px",
 
  },
  title: {
    color: "#393536",
    padding: theme.spacing(1, 1, 1, 7),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    height: "2.2234em",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 160,
      '&:focus': {
        width: 240,
      },
    },
  },
});



class NavBar extends React.Component {
  constructor(props) {
  super(props);
  this.listenScrollEvent = this.listenScrollEvent.bind(this);    

  this.state = {
    inputValue: "",
    inputCategory: {},
    inputOrientation: "horizontal",
    marginTop: "-40px",
  };
  }
  listenScrollEvent = e => {
    const { pageYOffset } = window;
    if (pageYOffset > 20) {
        this.setState({ marginTop: "-120px",
           });
    } else if (pageYOffset < 20) {
        this.setState({marginTop: "-80px", 
            });
    }
};

componentDidMount() {
  window.addEventListener('scroll', this.listenScrollEvent);
}
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    // this.props.onSubmit(this.state.inputCategory); 

    console.log(this.state.inputOrientation);
  };

  handleFormOriantation = (value) => {

    this.setState({inputOrientation: value});
  }
render(props) {


  const {classes} = this.props;
  return (
    <div  style={{position: "sticky"}} className={classes.root}
    style={{marginTop: this.state.marginTop }}
    >
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>*/}
          <Typography className={classes.title} variant="h6" noWrap>
           Tel. +48 733 020 636
          </Typography> 
          <Typography className={classes.title} variant="h6" noWrap>
           E-mail.  info@fotodream.pl
          </Typography> 
          <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
             component="input"
              name= "query"
              placeholder="Szukane zdjęcie"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              type="text"
              inputProps={{ 'aria-label': 'search' }}
              value={this.state.inputValue}
              onChange={e => this.setState
                ({ inputValue: e.target.value })}
            />
          </div>
          </form>
     

        </Toolbar>
      </AppBar>
    </div>
  );
}
}

export default withStyles(styles)(NavBar);