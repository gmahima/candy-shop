import logo from './logo.svg';
import { GlobalStyles } from 'twin.macro'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
${tw `
 bg-gray-100 min-h-screen text-gray-700 flex flex-col items-center justify-center
`}
`
function App() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <div>cra + twin.macro</div>
    </Container>
    </div>
  );
}

export default App;
