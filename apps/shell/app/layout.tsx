import { AppHeader, Link } from '@mfe/ui'

import './globals.scss'
import { ReactElement } from 'react'
import { LINKS } from 'data/links'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
}

interface Props {
  children: ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <AppHeader links={LINKS} />
        {children}
      </body>
    </html>
  )
}
