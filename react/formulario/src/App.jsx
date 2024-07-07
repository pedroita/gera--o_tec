import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BasicTextFields from "./components/inputs/BasicTextFields";
import BasicButtons from "./components/buttons/BasicButtons";
import MultilineTextFields from "./components/textArea/MultilineTextFields";
import EmailField from "./components/inputs/EmailField"
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light', // Pode ser 'light' ou 'dark'
    primary: {
      main: '#1976d2', // Cor principal (azul)
    },
    background: {
      default: '#f0f0f0', // Cor de fundo padrão
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Página de Feedback</h1>

      <BasicTextFields label="Nome" />
      <EmailField label="Email" />


      <MultilineTextFields label="Descrição" customDefaultValue="Faça aqui uma descrição sobre o produto" />

      <BasicButtons text="Enviar" />
      <BasicButtons text="Cancelar" />
      <BasicButtons text="Limpar" />

    </ThemeProvider>
  );
}

export default App;
