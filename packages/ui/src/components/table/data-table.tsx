'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@carbon/react'
import type { FC } from 'react'

interface Props {}

interface DataTableItem {
  id: string
  name: string
  rule: string
  status: string
  other: string
  example: string
}

interface DataTableHeader {
  id: string
  label: string
}

const DataTable: FC<Props> = ({}) => {
  const rows: DataTableItem[] = [
    {
      id: 'load-balancer-1',
      name: 'Load Balancer 1',
      rule: 'Round robin',
      status: 'Starting',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-2',
      name: 'Load Balancer 2',
      rule: 'DNS delegation',
      status: 'Active',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-3',
      name: 'Load Balancer 3',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-4',
      name: 'Load Balancer 4',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-5',
      name: 'Load Balancer 5',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-6',
      name: 'Load Balancer 6',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
    {
      id: 'load-balancer-7',
      name: 'Load Balancer 7',
      rule: 'Round robin',
      status: 'Disabled',
      other: 'Test',
      example: '22',
    },
  ]

  const headers: DataTableHeader[] = [
    {
      id: 'name',
      label: 'Name',
    },
    {
      id: 'rule',
      label: 'Rule',
    },
    {
      id: 'status',
      label: 'Status',
    },
    {
      id: 'other',
      label: 'Other',
    },
    {
      id: 'example',
      label: 'Example',
    },
  ]

  const getRow = (row: DataTableItem) => {
    const keys = Object.keys(row).filter(
      (key) => key !== 'id'
    ) as (keyof DataTableItem)[]

    return (
      <TableRow key={row.id}>
        {keys.map((key) => (
          <TableCell key={key}>{row[key]}</TableCell>
        ))}
      </TableRow>
    )
  }

  return (
    <Table size="lg" useZebraStyles={false} aria-label="sample table">
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader id={header.id} key={header.id}>
              {header.label}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {Object.keys(row)
              .filter((key) => key !== 'id')
              .map((key) => {
                return <TableCell key={key}>{row['name']}</TableCell>
              })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DataTable
