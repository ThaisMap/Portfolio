import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import { lightBlue, lightGreen, lime, teal } from '@material-ui/core/colors';

const theme = createMuiTheme(
  {
    palette: {
      type: 'light',
      primary: teal,
      secondary: {
        main: lime[50],
      },
    },
  },
  ptBR
);

export default theme;
