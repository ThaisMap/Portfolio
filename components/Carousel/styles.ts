import { createStyles, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      width: '100%',
    },

    controls: {
      display: 'flex',
      height: '100%',
      width: '100%',
    },

    navIcons: {
      display: 'grid',
      placeItems: 'center',
    },

    dots: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },

    center: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    imageBackground: {
      height: '100%',
      width: '100%',
      flexGrow: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
    },
  })
);

export default useStyles;
