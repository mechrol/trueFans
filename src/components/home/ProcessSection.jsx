import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQrcode, FaHeart, FaTree } from 'react-icons/fa'

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>How the Magic Happens</SectionTitle>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ProcessSteps>
            <ProcessStep variants={itemVariants}>
              <StepIconWrapper>
                <FaQrcode />
              </StepIconWrapper>
              <StepContent>
                <StepNumber>Step 1</StepNumber>
                <StepTitle>Share Your Code</StepTitle>
                <StepDescription>
                  Display your personalized QR code at gigs, online, anywhere your music lives
                </StepDescription>
                <StepImage src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg" alt="Artist setting up QR code" />
              </StepContent>
            </ProcessStep>
            
            <ProcessStep variants={itemVariants}>
              <StepIconWrapper>
                <FaHeart />
              </StepIconWrapper>
              <StepContent>
                <StepNumber>Step 2</StepNumber>
                <StepTitle>Fans Connect Instantly</StepTitle>
                <StepDescription>
                  Supporters scan and donate in seconds - no apps, no friction, pure connection
                </StepDescription>
                <StepImage src="https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg" alt="Fan scanning QR code" />
              </StepContent>
            </ProcessStep>
            
            <ProcessStep variants={itemVariants}>
              <StepIconWrapper>
                <FaTree />
              </StepIconWrapper>
              <StepContent>
                <StepNumber>Step 3</StepNumber>
                <StepTitle>Build Your Empire</StepTitle>
                <StepDescription>
                  Transform one-time listeners into lifelong supporters of your artistic journey
                </StepDescription>
                <StepImage src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg" alt="Artist building fan relationships" />
              </StepContent>
            </ProcessStep>
          </ProcessSteps>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  padding: ${({ theme }) => theme.space['4xl']} 0;
  background-color: white;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space['3xl']};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const ProcessSteps = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const ProcessStep = styled(motion.div)`
  flex: 1;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const StepIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.passionateCrimson};
  color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
`

const StepContent = styled.div`
  padding: ${({ theme }) => theme.space.xl};
`

const StepNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.passionateCrimson};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.modernCharcoal};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const StepImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.md};
`

export default ProcessSection
