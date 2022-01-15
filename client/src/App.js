import StyledApp from "./components/styled/App.styled"; //I might use App.css
import GlobalStyle from "./components/styled/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle/>
      <StyledApp>This is the Styled App thus so far.</StyledApp>
    </>
  );
}

export default App;
