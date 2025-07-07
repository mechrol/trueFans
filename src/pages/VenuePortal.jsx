import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const VenuePortal = () => {
  // Mock data for demonstration
  const upcomingEvents = [
    { id: 1, artist: 'Sarah Johnson', genre: 'Jazz', date: '2023-06-15', time: '8:00 PM', ticketsSold: 120, capacity: 150 },
    { id: 2, artist: 'The Midnight Crew', genre: 'Rock', date: '2023-06-18', time: '9:00 PM', ticketsSold: 85, capacity: 150 },
    { id: 3, artist: 'Electronic Dreams', genre: 'Electronic', date: '2023-06-22', time: '10:00 PM', ticketsSold: 65, capacity: 150 },
  ]
  
  const artistRequests = [
    { id: 1, artist: 'Luna & The Stars', genre: 'Indie Pop', date: '2023-07-10', time: '8:30 PM', status: 'pending' },
    { id: 2, artist: 'Rhythm Section', genre: 'R&B', date: '2023-07-15', time: '9:00 PM', status: 'pending' },
  ]
  
  const venueStats = {
    eventsThisMonth: 12,
    totalRevenue: '$24,850',
    averageAttendance: '78%',
    topGenres: ['Jazz', 'Rock', 'Electronic', 'Hip Hop']
  }

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
          <VenueInfo>
            <VenueLogo src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Venue Logo" />
            <VenueDetails>
              <VenueName>The Blue Note</VenueName>
              <VenueAddress>123 Music Ave, New York, NY</VenueAddress>
            </VenueDetails>
          </VenueInfo>
          <ActionButtons>
            <ActionButton>Edit Venue Profile</ActionButton>
            <ActionButton primary>Find Artists</ActionButton>
          </ActionButtons>
        </DashboardHeader>
        
        <DashboardGrid>
          <DashboardCard>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <ViewAllLink>View Calendar</ViewAllLink>
            </CardHeader>
            <EventsList>
              {upcomingEvents.map(event => (
                <EventItem key={event.id}>
                  <EventDate>
                    <EventDay>{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}</EventDay>
                    <EventMonth>{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</EventMonth>
                  </EventDate>
                  <EventDetails>
                    <EventArtist>{event.artist}</EventArtist>
                    <EventInfo>{event.genre} • {event.time}</EventInfo>
                  </EventDetails>
                  <EventTickets>
                    <TicketProgress value={(event.ticketsSold / event.capacity) * 100} />
                    <TicketText>{event.ticketsSold}/{event.capacity} tickets</TicketText>
                  </EventTickets>
                </EventItem>
              ))}
            </EventsList>
          </DashboardCard>
          
          <DashboardCard>
            <CardHeader>
              <CardTitle>Venue Analytics</CardTitle>
              <ViewAllLink>Full Report</ViewAllLink>
            </CardHeader>
            <StatsGrid>
              <StatItem>
                <StatValue>{venueStats.eventsThisMonth}</StatValue>
                <StatLabel>Events This Month</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{venueStats.totalRevenue}</StatValue>
                <StatLabel>Total Revenue</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{venueStats.averageAttendance}</StatValue>
                <StatLabel>Avg. Attendance</StatLabel>
              </StatItem>
            </StatsGrid>
            <TopGenres>
              <TopGenresTitle>Popular Genres</TopGenresTitle>
              <GenreList>
                {venueStats.topGenres.map((genre, index) => (
                  <GenreItem key={index}>{genre}</GenreItem>
                ))}
              </GenreList>
            </TopGenres>
          </DashboardCard>
          
          <DashboardCard>
            <CardHeader>
              <CardTitle>Artist Booking Requests</CardTitle>
              <ViewAllLink>View All</ViewAllLink>
            </CardHeader>
            {artistRequests.length > 0 ? (
              <RequestsList>
                {artistRequests.map(request => (
                  <RequestItem key={request.id}>
                    <RequestInfo>
                      <RequestArtist>{request.artist}</RequestArtist>
                      <RequestDetails>{request.genre} • {new Date(request.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {request.time}</RequestDetails>
                    </RequestInfo>
                    <RequestActions>
                      <ApproveButton>Approve</ApproveButton>
                      <DeclineButton>Decline</DeclineButton>
                    </RequestActions>
                  </RequestItem>
                ))}
              </RequestsList>
            ) : (
              <EmptyState>
                <EmptyIcon>📅</EmptyIcon>
                <EmptyText>No pending booking requests</EmptyText>
                <EmptySubtext>When artists request to perform at your venue, they'll appear here.</EmptySubtext>
              </EmptyState>
            )}
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

const VenueInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.lg};
`

const VenueLogo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radii.md};
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`

const VenueDetails = styled.div``

const VenueName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.darkText};
`

const VenueAddress = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
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

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const EventItem = styled.div`
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

const EventDate = styled.div`
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

const EventDay = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;
`

const EventMonth = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
`

const EventDetails = styled.div`
  flex: 1;
`

const EventArtist = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
`

const EventInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const EventTickets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space.xs};
`

const TicketProgress = styled.div`
  width: 80px;
  height: 6px;
  background-color: #E0E0E0;
  border-radius: ${({ theme }) => theme.radii.full};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ value }) => `${value}%`};
    background-color: ${({ theme, value }) => 
      value >= 80 ? theme.colors.success : 
      value >= 50 ? theme.colors.primary : 
      theme.colors.warning
    };
    border-radius: ${({ theme }) => theme.radii.full};
  }
`

const TicketText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
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

const TopGenres = styled.div`
  margin-top: ${({ theme }) => theme.space.lg};
`

const TopGenresTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  margin-bottom: ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.darkText};
`

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`

const GenreItem = styled.div`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkText};
`

const RequestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const RequestItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`

const RequestInfo = styled.div`
  margin-bottom: ${({ theme }) => theme.space.md};
`

const RequestArtist = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.xs};
`

const RequestDetails = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
`

const RequestActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const ApproveButton = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.space.xs};
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    opacity: 0.9;
  }
`

const DeclineButton = styled.button`
  flex: 1;
  padding: ${({ theme }) => theme.space.xs};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.error};
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(244, 67, 54, 0.1);
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.space.xl} 0;
`

const EmptyIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.space.md};
`

const EmptyText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const EmptySubtext = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 300px;
`

export default VenuePortal
