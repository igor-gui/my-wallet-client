import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignInForm, SignUpForm } from "@/components"
import { GlobalStyle } from '@/styles'
import { Home } from './pages'

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
