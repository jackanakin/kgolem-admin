import { Button } from '@mfe/ui'
import { Layout, Page, Text, Code, Link } from '@vercel/examples-ui'

export default function About(): React.ReactNode {
  return (
    <Page>
      <Button>teste</Button>
      <Text variant="h1" className="mb-6">
        SHELL/PAGES/ABOUT
      </Text>
    </Page>
  )
}

About.Layout = Layout
