import { Button, DataTable } from '@mfe/ui'
import { Layout, Page } from '@vercel/examples-ui'
import { LINK_FLOWS_FORM } from 'data/links'
import Link from 'next/link'

export default function Flows(): React.ReactNode {
  return (
    <Page>
      <Link href={LINK_FLOWS_FORM.path}>
        <Button>New</Button>
      </Link>
      <DataTable />
    </Page>
  )
}

Flows.Layout = Layout
