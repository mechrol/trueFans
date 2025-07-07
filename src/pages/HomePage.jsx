import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HeroSection from '../components/home/HeroSection'

const HomePage = () => {
  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
`

export default HomePage
