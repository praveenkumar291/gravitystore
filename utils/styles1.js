import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: '10px',
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize:'1.5rem',
  },
  grow: {
    flexGrow:'1',
  },
  main: {
    minHeight:'80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: '10px',
  },
  section: {
    marginTop: '10px',
    marginLeft: '20px',

  },
  form: {
    maxWidth: 800,
    margin:'0 auto'
  },

  navButton: {
    color: '#fff',
    textTransform: 'initial',
    // backgroundColor: 'black',
    // position: 'absolute',
  // zIndex: 1,
  },

});
export default useStyles;
