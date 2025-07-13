import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  User, 
  BarChart3, 
  Calendar, 
  Music, 
  Users, 
  Settings,
  Play,
  Pause,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  DollarSign,
  Eye,
  MapPin,
  Clock,
  Star
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`

const DashboardContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  }
`

const TabNavigation = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const Tab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  color: white;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

const ContentArea = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  min-height: 600px;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  
  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    opacity: 0.8;
    font-size: 0.9rem;
  }
`

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`

const ActionCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  
  h3 {
    margin: 0 0 1rem 0;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1rem;
  }
  
  button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`

const MusicTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1rem;
  
  .track-info {
    flex: 1;
    
    h4 {
      margin: 0 0 0.25rem 0;
      color: #333;
    }
    
    p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }
  }
  
  .track-stats {
    display: flex;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
  
  .play-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

const GigCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
  
  .gig-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    h3 {
      margin: 0;
      color: #333;
    }
    
    .gig-date {
      background: #667eea;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  
  .gig-details {
    display: flex;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    
    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
  
  .gig-status {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #e8f5e8;
    color: #2d5a2d;
  }
`

const FanCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  .fan-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
  }
  
  .fan-info {
    flex: 1;
    
    h4 {
      margin: 0 0 0.25rem 0;
      color: #333;
    }
    
    p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }
  }
  
  .fan-stats {
    display: flex;
    gap: 1rem;
    color: #666;
    font-size: 0.9rem;
  }
`

const ArtistDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [playingTrack, setPlayingTrack] = useState(null)
  const navigate = useNavigate()

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'gigs', label: 'Gigs', icon: Calendar },
    { id: 'fans', label: 'Fans', icon: Users },
    { id: 'actions', label: 'Actions', icon: Settings }
  ]

  const stats = [
    { label: 'Total Streams', value: '2.4M', icon: Play, trend: '+12%' },
    { label: 'Monthly Listeners', value: '156K', icon: Users, trend: '+8%' },
    { label: 'Revenue', value: '$12,450', icon: DollarSign, trend: '+15%' },
    { label: 'Upcoming Gigs', value: '8', icon: Calendar, trend: '+3' }
  ]

  const tracks = [
    { id: 1, title: 'Midnight Dreams', album: 'Nocturnal', plays: '1.2M', likes: '45K' },
    { id: 2, title: 'Electric Pulse', album: 'Synth Wave', plays: '890K', likes: '32K' },
    { id: 3, title: 'Neon Lights', album: 'City Nights', plays: '756K', likes: '28K' },
    { id: 4, title: 'Digital Love', album: 'Future Sound', plays: '623K', likes: '21K' }
  ]

  const gigs = [
    { 
      id: 1, 
      venue: 'Blue Note Jazz Club', 
      date: 'Dec 15', 
      time: '9:00 PM', 
      location: 'New York, NY',
      status: 'Confirmed',
      fee: '$2,500'
    },
    { 
      id: 2, 
      venue: 'The Fillmore', 
      date: 'Dec 22', 
      time: '8:30 PM', 
      location: 'San Francisco, CA',
      status: 'Pending',
      fee: '$3,200'
    },
    { 
      id: 3, 
      venue: 'House of Blues', 
      date: 'Jan 5', 
      time: '10:00 PM', 
      location: 'Chicago, IL',
      status: 'Confirmed',
      fee: '$2,800'
    }
  ]

  const topFans = [
    { id: 1, name: 'Sarah Johnson', engagement: '95%', spent: '$245' },
    { id: 2, name: 'Mike Chen', engagement: '87%', spent: '$189' },
    { id: 3, name: 'Emma Davis', engagement: '82%', spent: '$156' },
    { id: 4, name: 'Alex Rodriguez', engagement: '79%', spent: '$134' }
  ]

  const handlePlayTrack = (trackId) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId)
  }

  const handleVisitCommunity = () => {
    navigate('/customize-community')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="stat-header">
                    <stat.icon size={24} />
                    <span style={{ color: '#4ade80', fontSize: '0.9rem', fontWeight: '600' }}>
                      {stat.trend}
                    </span>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </StatCard>
              ))}
            </StatsGrid>

            <ActionGrid>
              <ActionCard
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Music size={20} /> Upload New Track</h3>
                <p>Share your latest creation with your fans and grow your audience.</p>
                <button>Upload Music</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Calendar size={20} /> Book a Gig</h3>
                <p>Find and book venues for your upcoming performances.</p>
                <button>Find Venues</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Users size={20} /> Engage Fans</h3>
                <p>Connect with your audience through messages and exclusive content.</p>
                <button>Message Fans</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><TrendingUp size={20} /> Analytics</h3>
                <p>Track your performance metrics and audience insights.</p>
                <button>View Analytics</button>
              </ActionCard>
            </ActionGrid>
          </div>
        )

      case 'profile':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Artist Profile</h2>
            <ActionGrid>
              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><User size={20} /> Profile Information</h3>
                <p>Update your artist bio, photos, and contact information.</p>
                <button>Edit Profile</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Settings size={20} /> Account Settings</h3>
                <p>Manage your account preferences and privacy settings.</p>
                <button>Manage Settings</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Eye size={20} /> Public Profile</h3>
                <p>Preview how your profile appears to fans and venues.</p>
                <button>Preview Profile</button>
              </ActionCard>
            </ActionGrid>
          </div>
        )

      case 'music':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Your Music</h2>
            {tracks.map((track, index) => (
              <MusicTrack
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <button 
                  className="play-button"
                  onClick={() => handlePlayTrack(track.id)}
                >
                  {playingTrack === track.id ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <div className="track-info">
                  <h4>{track.title}</h4>
                  <p>{track.album}</p>
                </div>
                <div className="track-stats">
                  <span><Play size={14} /> {track.plays}</span>
                  <span><Heart size={14} /> {track.likes}</span>
                </div>
              </MusicTrack>
            ))}
          </div>
        )

      case 'gigs':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Upcoming Gigs</h2>
            {gigs.map((gig, index) => (
              <GigCard
                key={gig.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="gig-header">
                  <h3>{gig.venue}</h3>
                  <div className="gig-date">{gig.date}</div>
                </div>
                <div className="gig-details">
                  <span><MapPin size={14} /> {gig.location}</span>
                  <span><Clock size={14} /> {gig.time}</span>
                  <span><DollarSign size={14} /> {gig.fee}</span>
                </div>
                <span className="gig-status">{gig.status}</span>
              </GigCard>
            ))}
          </div>
        )

      case 'fans':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Top Fans</h2>
            {topFans.map((fan, index) => (
              <FanCard
                key={fan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="fan-avatar">
                  {fan.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="fan-info">
                  <h4>{fan.name}</h4>
                  <p>Engagement: {fan.engagement}</p>
                </div>
                <div className="fan-stats">
                  <span><DollarSign size={14} /> {fan.spent}</span>
                  <span><Star size={14} /> Top Fan</span>
                </div>
              </FanCard>
            ))}
          </div>
        )

      case 'actions':
        return (
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Quick Actions</h2>
            <ActionGrid>
              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Users size={20} /> Visit Community</h3>
                <p>Access your community space to connect with fans and manage your presence.</p>
                <button onClick={handleVisitCommunity}>Visit Community</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Music size={20} /> Release Management</h3>
                <p>Plan and schedule your upcoming releases and promotional campaigns.</p>
                <button>Manage Releases</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><MessageCircle size={20} /> Fan Engagement</h3>
                <p>Send updates, exclusive content, and messages to your fan base.</p>
                <button>Engage Fans</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Share2 size={20} /> Social Media</h3>
                <p>Cross-post your content and manage your social media presence.</p>
                <button>Manage Social</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><Calendar size={20} /> Tour Planning</h3>
                <p>Plan your tour dates and coordinate with venues and promoters.</p>
                <button>Plan Tour</button>
              </ActionCard>

              <ActionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3><DollarSign size={20} /> Revenue Analytics</h3>
                <p>Track your earnings from streams, merchandise, and live performances.</p>
                <button>View Revenue</button>
              </ActionCard>
            </ActionGrid>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <DashboardContainer>
      <DashboardContent>
        <Header>
          <h1>Artist Dashboard</h1>
        </Header>

        <TabNavigation>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon size={18} />
              {tab.label}
            </Tab>
          ))}
        </TabNavigation>

        <ContentArea
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </ContentArea>
      </DashboardContent>
    </DashboardContainer>
  )
}

export default ArtistDashboard
