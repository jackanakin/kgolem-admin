'use client'

import type { FC, ButtonHTMLAttributes } from 'react'
import { Button as CarbonButton } from '@carbon/react'

export interface ButtonProps {
  /**
   * This is a description
   */
  secondary?: boolean
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  secondary = false,
  ...props
}) => {
  return <CarbonButton {...props}>{children}</CarbonButton>
}

export default Button
