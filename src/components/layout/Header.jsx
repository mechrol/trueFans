import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const location = useLocation()
  
  return (
    <HeaderWrapper>
      <Container>
        <Logo to="/">
          <LogoText>TrueFans Connect™</LogoText>
        </Logo>
        <Navigation>
          <NavList>
            <NavItem isActive={location.pathname === '/'}>
              <NavLink to="/">Home</NavLink>
              {location.pathname === '/' && <ActiveIndicator layoutId="activeNav" />}
            </NavItem>
            <NavItem isActive={location.pathname === '/artist-dashboard'}>
              <NavLink to="/artist-dashboard">Artist Dashboard</NavLink>
              {location.pathname === '/artist-dashboard' && <ActiveIndicator layoutId="activeNav" />}
            </NavItem>
            <NavItem isActive={location.pathname === '/venue-portal'}>
              <NavLink to="/venue-portal">Venue Portal</NavLink>
              {location.pathname === '/venue-portal' && <ActiveIndicator layoutId="activeNav" />}
            </NavItem>
            <NavItem isActive={location.pathname.includes('/community')}>
              <NavLink to="/community">Community</NavLink>
              {location.pathname.includes('/community') && <ActiveIndicator layoutId="activeNav" />}
            </NavItem>
          </NavList>
        </Navigation>
        <AuthButtons>
          <LoginButton>Log In</LoginButton>
          <SignupButton>Sign Up</SignupButton>
        </AuthButtons>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`

const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const LogoText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`

const Navigation = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.space.lg};
`

const NavItem = styled.li`
  position: relative;
  padding: ${({ theme }) => theme.space.xs} 0;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkText};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
`

const AuthButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
`

const LoginButton = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

const SignupButton = styled.button`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.md}`};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

export default Header
