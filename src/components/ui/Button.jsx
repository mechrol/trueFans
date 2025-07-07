import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(220, 20, 60, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(220, 20, 60, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(220, 20, 60, 0);
  }
`

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  pulse = false,
  ...props 
}) => {
  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      iconPosition={iconPosition}
      pulse={pulse}
      {...props}
    >
      {icon && iconPosition === 'left' && <IconWrapper>{icon}</IconWrapper>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <IconWrapper>{icon}</IconWrapper>}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  
  ${({ pulse }) => pulse && css`
    animation: ${pulseAnimation} 2s infinite;
  `}
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.passionateCrimson};
          color: white;
          border: none;
          
          &:hover {
            background-color: ${theme.colors.revolutionaryGold};
            color: ${theme.colors.trustworthyNavy};
          }
        `
      case 'secondary':
        return css`
          background-color: transparent;
          color: ${theme.colors.passionateCrimson};
          border: 2px solid ${theme.colors.passionateCrimson};
          
          &:hover {
            background-color: ${theme.colors.passionateCrimson};
            color: white;
          }
        `
      case 'tertiary':
        return css`
          background-color: transparent;
          color: ${theme.colors.trustworthyNavy};
          border: none;
          
          &:hover {
            color: ${theme.colors.passionateCrimson};
          }
        `
      default:
        return css`
          background-color: ${theme.colors.passionateCrimson};
          color: white;
          border: none;
          
          &:hover {
            background-color: ${theme.colors.revolutionaryGold};
            color: ${theme.colors.trustworthyNavy};
          }
        `
    }
  }}
  
  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return css`
          font-size: ${theme.fontSizes.sm};
          padding: ${theme.space.xs} ${theme.space.md};
        `
      case 'md':
        return css`
          font-size: ${theme.fontSizes.md};
          padding: ${theme.space.sm} ${theme.space.lg};
        `
      case 'lg':
        return css`
          font-size: ${theme.fontSizes.lg};
          padding: ${theme.space.md} ${theme.space.xl};
        `
      default:
        return css`
          font-size: ${theme.fontSizes.md};
          padding: ${theme.space.sm} ${theme.space.lg};
        `
    }
  }}
  
  ${({ iconPosition }) => iconPosition === 'right' && css`
    flex-direction: row-reverse;
  `}
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-left: ${({ iconPosition }) => iconPosition === 'right' ? '0.5rem' : '0'};
  margin-right: ${({ iconPosition }) => iconPosition === 'left' ? '0.5rem' : '0'};
`

export default Button
