import { SessionProvider } from "next-auth/react"
import React from "react"
import { auth } from "../auth"

async function AppSession({ children }) {
  const session = await auth()

  return (
    <SessionProvider
      session={session}
      basePath="/api/auth"
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      {children}
    </SessionProvider>
  )
}

export default AppSession
