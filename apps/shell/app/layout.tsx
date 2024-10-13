import { AppHeader, Link } from '@mfe/ui'

import './globals.scss'
import { ReactElement } from 'react'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
}

const links: Link[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Remote 1',
    path: '/remote1',
  },
]

interface Props {
  children: ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <AppHeader links={links} />
        {children}
      </body>
    </html>
  )
}
