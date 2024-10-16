'use client'

import { type FC, useState } from 'react'
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
  HeaderPanel,
  Switcher,
  SwitcherItem,
} from '@carbon/react'
import { Switcher as SwitcherIcon } from '@carbon/icons-react'
import { AppHeaderProps } from '../../interfaces/components/app-header.props'

const AppHeader: FC<AppHeaderProps> = ({ links }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  console.log(links)

  return (
    <Header aria-label="K-Golem">
      <HeaderName prefix="K-Golem">[Admin]</HeaderName>
      <HeaderGlobalBar>
        {/* <HeaderGlobalAction
          aria-label="Search"
          // onClick={action('search click')}
        >
          <Search size="md" labelText="labletex" />
        </HeaderGlobalAction> */}

        <HeaderGlobalAction
          aria-label={expanded ? 'Close switcher' : 'Open switcher'}
          aria-expanded={expanded}
          isActive={expanded}
          onClick={toggleExpanded}
          tooltipAlignment="end"
        >
          <SwitcherIcon size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel
        expanded={expanded}
        onHeaderPanelFocus={toggleExpanded}
        href="#switcher-button"
      >
        <Switcher aria-label="Switcher Container">
          {links.map((link) => (
            <SwitcherItem
              key={link.path}
              aria-label={link.label}
              href={link.path}
            >
              {link.label}
            </SwitcherItem>
          ))}
        </Switcher>
      </HeaderPanel>
    </Header>
  )
}

export default AppHeader
