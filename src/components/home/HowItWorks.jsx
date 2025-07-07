import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Create Your Artist Profile',
    description: 'Sign up and build your artist profile in minutes. Connect your payment account for same-day deposits.',
    image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg',
  },
  {
    id: 2,
    title: 'Generate Your QR Codes',
    description: 'Create custom QR codes for each show, merch item, or special offer. Each code is tracked for analytics.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg',
  },
  {
    id: 3,
    title: 'Display at Shows & Online',
    description: 'Show your QR code on stage, merch table, or share digitally. Fans scan to support you instantly.',
    image: 'https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg',
  },
  {
    id: 4,
    title: 'Build Lasting Fan Relationships',
    description: "Use our tools to nurture relationships with fans who've supported you. Send exclusive content and offers.",
    image: 'https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg',
  },
]

const HowItWorks = () => {
  return (
    <SectionWrapper>
      <div className="container">
        <SectionHeader>
          <SectionTitle>How It Works</SectionTitle>
          <SectionDescription>
            Get started in minutes and start receiving direct fan support at your very next show.
          </SectionDescription>
        </SectionHeader>
        
        <StepsContainer>
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <StepNumber>{step.id}</StepNumber>
              <StepContent>
                <StepImageWrapper>
                  <StepImage src={step.image} alt={step.title} />
                </StepImageWrapper>
                <StepInfo>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepInfo>
              </StepContent>
            </StepItem>
          ))}
        </StepsContainer>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['5xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.trustworthyNavy} 0%, #0A1A2F 100%);
  color: white;
`

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.space['3xl']};
`

const SectionTitle = styled.h2`
  color: white;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SectionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.warmCream};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2xl']};
  max-width: 900px;
  margin: 0 auto;
`

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.revolutionaryGold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.space.md};
  }
`

const StepContent = styled.div`
  flex: 1;
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const StepImageWrapper = styled.div`
  width: 200px;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    height: 200px;
  }
`

const StepImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StepInfo = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  flex: 1;
`

const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.revolutionaryGold};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.warmCream};
  line-height: 1.6;
`

export default HowItWorks
