import { Button, DataTable } from '@mfe/ui'
import { Layout, Page } from '@vercel/examples-ui'
import { LINK_FLOWS_FORM } from 'data/links'
import Link from 'next/link'

export default function FlowForm(): React.ReactNode {
  return (
    <Page>
      <span>Form</span>
    </Page>
  )
}

FlowForm.Layout = Layout
