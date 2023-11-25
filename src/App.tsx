import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignInForm, SignUpForm } from "@/components"
import { GlobalStyle } from '@/styles'
import { Home } from './pages'
import { AuthContextProvider } from './contexts'
import { NewTransaction } from '@/pages'

function App() {

  return (
    <AuthContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/new_transaction/:type' element={<NewTransaction/>}/>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
