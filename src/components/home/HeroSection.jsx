import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroBackground />
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroTitle>Connect with your true fans</HeroTitle>
          <HeroSubtitle>
            The platform that brings artists, venues, and fans together for authentic music experiences
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </PrimaryButton>
            <SecondaryButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </SecondaryButton>
          </HeroButtons>
        </motion.div>
        
        <FeaturesGrid>
          <FeatureCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureIcon>🎵</FeatureIcon>
            <FeatureTitle>For Artists</FeatureTitle>
            <FeatureDescription>
              Connect with venues, manage bookings, and grow your fanbase all in one place.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FeatureIcon>🏢</FeatureIcon>
            <FeatureTitle>For Venues</FeatureTitle>
            <FeatureDescription>
              Discover talented artists, schedule performances, and attract more music lovers.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FeatureIcon>👥</FeatureIcon>
            <FeatureTitle>For Fans</FeatureTitle>
            <FeatureDescription>
              Find your favorite artists, discover new music, and never miss a show again.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </HeroContent>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.warmCream} 0%, ${({ theme }) => theme.colors.background} 100%);
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    filter: saturate(0.8) brightness(1.05);
    z-index: -1;
  }
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  z-index: 1;
`

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.fontSizes['6xl']});
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
  line-height: 1.1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, ${({ theme }) => theme.fontSizes.xl});
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
`

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    max-width: 300px;
  }
`

const SecondaryButton = styled.button`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(26, 115, 232, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    max-width: 300px;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  margin-top: ${({ theme }) => theme.space['3xl']};
`

const FeatureCard = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const FeatureIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0;
`

export default HeroSection
