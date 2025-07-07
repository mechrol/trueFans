import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const TransformationSection = () => {
  const [activePanel, setActivePanel] = useState('before')
  
  return (
    <SectionWrapper>
      <div className="container">
        <SectionTitle>The Broken vs. Beautiful Reality</SectionTitle>
        
        <TransformationContainer>
          <PanelToggle>
            <ToggleButton 
              isActive={activePanel === 'before'} 
              onClick={() => setActivePanel('before')}
            >
              Before
            </ToggleButton>
            <ToggleButton 
              isActive={activePanel === 'after'} 
              onClick={() => setActivePanel('after')}
            >
              After
            </ToggleButton>
          </PanelToggle>
          
          <PanelsContainer>
            <Panel 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activePanel === 'before' ? 1 : 0,
                x: activePanel === 'before' ? 0 : -20
              }}
              transition={{ duration: 0.5 }}
              isVisible={activePanel === 'before'}
            >
              <PanelImage src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg" alt="Empty coffee shop performance" />
              <PanelContent>
                <PanelTitle>The Struggle is Real</PanelTitle>
                <PanelDescription>
                  Playing to distracted patrons in noisy venues, competing with espresso machines and laptop keyboards.
                </PanelDescription>
                
                <MetricsContainer>
                  <Metric>
                    <MetricValue negative>$47</MetricValue>
                    <MetricLabel>Average earnings for 3-hour gig</MetricLabel>
                  </Metric>
                  <Metric>
                    <MetricValue negative>3</MetricValue>
                    <MetricLabel>New fan connections</MetricLabel>
                  </Metric>
                  <Metric>
                    <MetricValue negative>0</MetricValue>
                    <MetricLabel>Follow-up opportunities</MetricLabel>
                  </Metric>
                </MetricsContainer>
                
                <EmptyTipJar>
                  <TipJarLabel>Tip Jar Status:</TipJarLabel>
                  <TipJarStatus>Nearly Empty</TipJarStatus>
                </EmptyTipJar>
              </PanelContent>
            </Panel>
            
            <Panel 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activePanel === 'after' ? 1 : 0,
                x: activePanel === 'after' ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              isVisible={activePanel === 'after'}
            >
              <PanelImage src="https://images.pexels.com/photos/7097446/pexels-photo-7097446.jpeg" alt="Engaged house concert audience" />
              <PanelContent>
                <PanelTitle>The Beautiful Transformation</PanelTitle>
                <PanelDescription>
                  Performing for engaged fans who are there specifically to experience your music and support your journey.
                </PanelDescription>
                
                <MetricsContainer>
                  <Metric>
                    <MetricValue>$623</MetricValue>
                    <MetricLabel>Average earnings same night</MetricLabel>
                  </Metric>
                  <Metric>
                    <MetricValue>27</MetricValue>
                    <MetricLabel>New fan connections</MetricLabel>
                  </Metric>
                  <Metric>
                    <MetricValue>18</MetricValue>
                    <MetricLabel>Recurring supporters</MetricLabel>
                  </Metric>
                </MetricsContainer>
                
                <QRCodeContainer>
                  <QRCodeImage src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://truefansconnect.com/demo" alt="QR Code" />
                  <QRCodeText>
                    Fans scan your unique code to support you instantly
                  </QRCodeText>
                </QRCodeContainer>
              </PanelContent>
            </Panel>
          </PanelsContainer>
          
          <TransitionButton>
            <Button variant="gold" size="lg">
              Choose Your Future
            </Button>
          </TransitionButton>
        </TransformationContainer>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.space['4xl']} 0;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space['2xl']};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const TransformationContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`

const PanelToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const ToggleButton = styled.button`
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.passionateCrimson : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? 'white' : theme.colors.trustworthyNavy};
  border: 2px solid ${({ theme }) => theme.colors.passionateCrimson};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:first-child {
    border-radius: ${({ theme }) => theme.radii.md} 0 0 ${({ theme }) => theme.radii.md};
  }
  
  &:last-child {
    border-radius: 0 ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md} 0;
  }
  
  &:hover {
    background-color: ${({ isActive, theme }) => 
      isActive ? theme.colors.passionateCrimson : `${theme.colors.passionateCrimson}20`};
  }
`

const PanelsContainer = styled.div`
  position: relative;
  min-height: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 800px;
  }
`

const Panel = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
`

const PanelImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const PanelContent = styled.div`
  padding: ${({ theme }) => theme.space.xl};
`

const PanelTitle = styled.h3`
  color: ${({ theme }) => theme.colors.trustworthyNavy};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const PanelDescription = styled.p`
  color: ${({ theme }) => theme.colors.modernCharcoal};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.space.xl};
`

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const Metric = styled.div`
  text-align: center;
  flex: 1;
`

const MetricValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ negative, theme }) => 
    negative ? theme.colors.passionateCrimson : theme.colors.successGreen};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const MetricLabel = styled.div`
  color: ${({ theme }) => theme.colors.modernCharcoal};
`

const EmptyTipJar = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TipJarLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.modernCharcoal};
`

const TipJarStatus = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.passionateCrimson};
`

const QRCodeContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.md};
  }
`

const QRCodeImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`

const QRCodeText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.trustworthyNavy};
`

const TransitionButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.xl};
`

export default TransformationSection
