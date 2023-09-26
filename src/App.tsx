import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInForm/>} />
          <Route path='/sign-up' element={<SignUpForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
