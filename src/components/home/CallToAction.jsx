import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <ContentWrapper>
          <BackgroundShape />
          <CTAContent
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CTATitle>Ready to Transform Your Music Career?</CTATitle>
            <CTADescription>
              Join thousands of independent artists who are building sustainable careers through direct fan support.
            </CTADescription>
            
            <CTAFeatures>
              <CTAFeatureItem>
                <FeatureCheck>✓</FeatureCheck>
                <FeatureText>Get paid instantly at shows</FeatureText>
              </CTAFeatureItem>
              <CTAFeatureItem>
                <FeatureCheck>✓</FeatureCheck>
                <FeatureText>Build lasting fan relationships</FeatureText>
              </CTAFeatureItem>
              <CTAFeatureItem>
                <FeatureCheck>✓</FeatureCheck>
                <FeatureText>Same-day deposits to your account</FeatureText>
              </CTAFeatureItem>
              <CTAFeatureItem>
                <FeatureCheck>✓</FeatureCheck>
                <FeatureText>No more waiting for streaming pennies</FeatureText>
              </CTAFeatureItem>
            </CTAFeatures>
            
            <CTAButtons>
              <Button 
                as={Link} 
                to="/signup" 
                size="lg" 
                icon={<FaArrowRight />} 
                iconPosition="right"
              >
                Start Your Revolution
              </Button>
              <NoCardText>No credit card required to start</NoCardText>
            </CTAButtons>
          </CTAContent>
        </ContentWrapper>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['5xl']} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  overflow: hidden;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`

const BackgroundShape = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.passionateCrimson}20, ${({ theme }) => theme.colors.energyOrange}20);
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 150px;
    left: -250px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.revolutionaryGold}20, ${({ theme }) => theme.colors.successGreen}20);
  }
`

const CTAContent = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.space['3xl']};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.xl};
  }
`

const CTATitle = styled.h2`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CTADescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const CTAFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.lg};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const CTAFeatureItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`

const FeatureCheck = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.successGreen};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: ${({ theme }) => theme.space.md};
  flex-shrink: 0;
`

const FeatureText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
`

const NoCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: ${({ theme }) => theme.space.md};
`

export default CallToAction
