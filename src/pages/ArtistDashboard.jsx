import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ArtistDashboard = () => {
  // Mock data for demonstration
  const upcomingShows = [
    { id: 1, venue: 'The Blue Note', location: 'New York, NY', date: '2023-06-15', time: '8:00 PM', status: 'confirmed' },
    { id: 2, venue: 'Jazz Alley', location: 'Seattle, WA', date: '2023-06-22', time: '7:30 PM', status: 'confirmed' },
    { id: 3, venue: 'The Fillmore', location: 'San Francisco, CA', date: '2023-07-05', time: '9:00 PM', status: 'pending' },
  ]
  
  const fanStats = {
    total: 1245,
    newThisMonth: 87,
    engagement: '23%',
    topCities: ['New York', 'Los Angeles', 'Chicago', 'Austin']
  }
  
  const recentMessages = [
    { id: 1, from: 'The Blue Note', subject: 'Upcoming show details', date: '2023-05-28', read: true },
    { id: 2, from: 'Jane Smith (Fan)', subject: 'Loved your last album!', date: '2023-05-27', read: false },
    { id: 3, from: 'Booking Agent', subject: 'New opportunity in Miami', date: '2023-05-25', read: true },
  ]

  return (
    <PageWrapper
      as={motion.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <DashboardHeader>
          <WelcomeSection>
            <ArtistAvatar src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Artist" />
            <WelcomeText>
              <Greeting>Welcome back, Sarah</Greeting>
              <Status>Your artist profile is <StatusHighlight>90% complete</StatusHighlight></Status>
            </WelcomeText>
          </WelcomeSection>
          <ActionButtons>
            <ActionButton>Edit Profile</ActionButton>
            <ActionButton primary>Book a Venue</ActionButton>
          </ActionButtons>
        </DashboardHeader>
        
        <DashboardGrid>
          <DashboardCard>
            <CardHeader>
              <CardTitle>Upcoming Shows</CardTitle>
              <ViewAllLink>View All</ViewAllLink>
            </CardHeader>
            <ShowsList>
              {upcomingShows.map(show => (
                <ShowItem key={show.id}>
                  <ShowDate>
                    <ShowDay>{new Date(show.date).toLocaleDateString('en-US', { day: 'numeric' })}</ShowDay>
                    <ShowMonth>{new Date(show.date).toLocaleDateString('en-US', { month: 'short' })}</ShowMonth>
                  </ShowDate>
                  <ShowDetails>
                    <ShowVenue>{show.venue}</ShowVenue>
                    <ShowLocation>{show.location} • {show.time}</ShowLocation>
                  </ShowDetails>
                  <ShowStatus status={show.status}>
                    {show.status.charAt(0).toUpperCase() + show.status.slice(1)}
                  </ShowStatus>
                </ShowItem>
              ))}
            </ShowsList>
          </DashboardCard>
          
          <DashboardCard>
            <CardHeader>
              <CardTitle>Fan Analytics</CardTitle>
              <ViewAllLink>Full Report</ViewAllLink>
            </CardHeader>
            <StatsGrid>
              <StatItem>
                <StatValue>{fanStats.total}</StatValue>
                <StatLabel>Total Fans</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>+{fanStats.newThisMonth}</StatValue>
                <StatLabel>New This Month</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{fanStats.engagement}</StatValue>
                <StatLabel>Engagement Rate</StatLabel>
              </StatItem>
            </StatsGrid>
            <TopCities>
              <TopCitiesTitle>Top Cities</TopCitiesTitle>
              <CityList>
                {fanStats.topCities.map((city, index) => (
                  <CityItem key={index}>{city}</CityItem>
                ))}
              </CityList>
            </TopCities>
          </DashboardCard>
          
          <DashboardCard>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <ViewAllLink>View All</ViewAllLink>
            </CardHeader>
            <MessagesList>
              {recentMessages.map(message => (
                <MessageItem key={message.id} unread={!message.read}>
                  <MessageSender>{message.from}</MessageSender>
                  <MessageSubject>{message.subject}</MessageSubject>
                  <MessageDate>{new Date(message.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</MessageDate>
                </MessageItem>
              ))}
            </MessagesList>
            <ComposeButton>Compose New Message</ComposeButton>
          </DashboardCard>
        </DashboardGrid>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.space.xl} 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.lg};
`

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.lg};
  }
`

const WelcomeSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};
`

const ArtistAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`

const WelcomeText = styled.div``

const Greeting = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.darkText};
`

const Status = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
`

const StatusHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    flex-direction: column;
  }
`

const ActionButton = styled.button`
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  background-color: ${({ theme, primary }) => primary ? theme.colors.primary : 'transparent'};
  color: ${({ theme, primary }) => primary ? 'white' : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme, primary }) => primary ? theme.colors.primaryDark : 'rgba(26, 115, 232, 0.1)'};
    border-color: ${({ theme, primary }) => primary ? theme.colors.primaryDark : theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const DashboardCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space.lg};
  height: 100%;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const ViewAllLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

const ShowsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const ShowItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`

const ShowDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.radii.md};
  margin-right: ${({ theme }) => theme.space.md};
`

const ShowDay = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;
`

const ShowMonth = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
`

const ShowDetails = styled.div`
  flex: 1;
`

const ShowVenue = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const ShowLocation = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const ShowStatus = styled.div`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  background-color: ${({ theme, status }) => 
    status === 'confirmed' ? 'rgba(76, 175, 80, 0.1)' : 
    status === 'pending' ? 'rgba(255, 193, 7, 0.1)' : 
    'rgba(244, 67, 54, 0.1)'
  };
  color: ${({ theme, status }) => 
    status === 'confirmed' ? theme.colors.success : 
    status === 'pending' ? theme.colors.warning : 
    theme.colors.error
  };
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const TopCities = styled.div`
  margin-top: ${({ theme }) => theme.space.lg};
`

const TopCitiesTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const CityList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`

const CityItem = styled.div`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
`

const MessageItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.md};
  border-left: 3px solid ${({ theme, unread }) => unread ? theme.colors.primary : 'transparent'};
  background-color: ${({ theme, unread }) => unread ? 'rgba(26, 115, 232, 0.05)' : theme.colors.background};
  margin-bottom: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const MessageSender = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const MessageSubject = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin: ${({ theme }) => theme.space.xs} 0;
`

const MessageDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
  align-self: flex-end;
`

const ComposeButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-top: ${({ theme }) => theme.space.lg};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`

export default ArtistDashboard
