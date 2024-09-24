import Header from '@/components/ui/header'
import { SessionProvider } from 'next-auth/react'
import LandingPage from './landing-page'
import { db } from '@/db';


export default  function Home() {
  const forms = db.query.forms.findMany();

  return (
    <SessionProvider> <Header/>
    <main className="flex min-h-screen flex-col items-center">
      <LandingPage />
    
    </main>
    </SessionProvider>
  
  )
}
