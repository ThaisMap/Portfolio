import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import { lightBlue, lightGreen, teal } from '@material-ui/core/colors';

const theme = createMuiTheme(
  {
    palette: {
      type: 'light',
      primary: teal,
      secondary: lightBlue,
      neutral: lightGreen[50]
    },
  },
  ptBR
);

export default theme;
