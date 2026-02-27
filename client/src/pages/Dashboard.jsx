import { useState, useEffect } from 'react';

const BACKGROUND_GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
];

const INITIAL_LIVE_ALERTS = [
  { type: "info", message: "Weather advisory: Heavy rain expected in coastal regions", source: "IMD" },
  { type: "warning", message: "Earthquake drill scheduled for next week", source: "NDMA" }
];

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [liveAlerts] = useState(() => INITIAL_LIVE_ALERTS);

  // Rotate background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_GRADIENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: "📚",
      label: "Courses Completed",
      value: "12",
      total: "35",
      percentage: 34,
      color: "#3b82f6",
      bgColor: "#eff6ff",
      trend: "+3 this week"
    },
    {
      icon: "⏱️",
      label: "Training Hours",
      value: "24",
      total: "100",
      percentage: 24,
      color: "#10b981",
      bgColor: "#f0fdf4",
      trend: "+5 hours"
    },
    {
      icon: "🏆",
      label: "Quiz Score",
      value: "85",
      total: "100",
      percentage: 85,
      color: "#f59e0b",
      bgColor: "#fffbeb",
      trend: "Above average"
    },
    {
      icon: "⭐",
      label: "Achievements",
      value: "8",
      total: "20",
      percentage: 40,
      color: "#8b5cf6",
      bgColor: "#faf5ff",
      trend: "2 unlocked"
    }
  ];

  const recentActivity = [
    {
      icon: "✅",
      title: "Completed Earthquake Safety Module",
      time: "2 hours ago",
      color: "#10b981"
    },
    {
      icon: "🎥",
      title: "Watched Fire Drill Training Video",
      time: "5 hours ago",
      color: "#3b82f6"
    },
    {
      icon: "📝",
      title: "Passed Flood Preparedness Quiz",
      time: "Yesterday",
      color: "#f59e0b"
    },
    {
      icon: "🏅",
      title: "Earned 'Safety First' Badge",
      time: "2 days ago",
      color: "#8b5cf6"
    }
  ];

  const upcomingTasks = [
    {
      icon: "📖",
      title: "Complete Cyclone Safety Guidelines",
      category: "Learning Module",
      progress: 60,
      color: "#3b82f6"
    },
    {
      icon: "🎯",
      title: "Take Emergency Response Quiz",
      category: "Assessment",
      progress: 0,
      color: "#f59e0b"
    },
    {
      icon: "🎬",
      title: "Watch Tsunami Evacuation Drill",
      category: "Mock Drill",
      progress: 30,
      color: "#10b981"
    }
  ];

  const quickActions = [
    {
      icon: "🚨",
      title: "Emergency Contacts",
      description: "Quick access",
      color: "#ef4444"
    },
    {
      icon: "📍",
      title: "Safe Zones Map",
      description: "View shelters nearby",
      color: "#3b82f6",
      href: "/map"
    },
    {
      icon: "🎒",
      title: "Emergency Kit",
      description: "Checklist",
      color: "#10b981"
    },
    {
      icon: "📞",
      title: "Report Issue",
      description: "Get help",
      color: "#f59e0b"
    }
  ];

  const learningPath = [
    { module: "Fire Safety", completed: true },
    { module: "Earthquake Prep", completed: true },
    { module: "Flood Response", completed: true },
    { module: "Cyclone Safety", completed: false, current: true },
    { module: "Tsunami Alert", completed: false },
    { module: "Medical First Aid", completed: false }
  ];

  // Educational YouTube videos embedded
  const educationalVideos = [
    {
      title: "Earthquake Safety Basics",
      videoId: "BLEPakj1YTY",
      thumbnail: "https://img.youtube.com/vi/BLEPakj1YTY/maxresdefault.jpg",
      duration: "5:23"
    },
    {
      title: "Fire Safety at Home",
      videoId: "zVKWgSIk8K0",
      thumbnail: "https://img.youtube.com/vi/zVKWgSIk8K0/maxresdefault.jpg",
      duration: "8:15"
    },
    {
      title: "Flood Preparedness Guide",
      videoId: "fet7EmxgWiE",
      thumbnail: "https://img.youtube.com/vi/fet7EmxgWiE/maxresdefault.jpg",
      duration: "6:42"
    }
  ];

  // External Resources
  const externalResources = [
    {
      icon: "🌐",
      title: "NDMA Official Portal",
      description: "National Disaster Management Authority",
      url: "https://ndma.gov.in",
      color: "#3b82f6"
    },
    {
      icon: "🌡️",
      title: "Weather Updates",
      description: "India Meteorological Department",
      url: "https://mausam.imd.gov.in",
      color: "#10b981"
    },
    {
      icon: "📱",
      title: "Emergency Alert App",
      description: "Download NDMA Mobile App",
      url: "https://play.google.com/store/apps",
      color: "#f59e0b"
    },
    {
      icon: "📞",
      title: "Emergency Helplines",
      description: "National Emergency Numbers",
      url: "https://www.india.gov.in/topics/emergency",
      color: "#ef4444"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Animated Background Decorations */}
      <div style={{
        ...styles.bgDecoration1,
        background: BACKGROUND_GRADIENTS[currentBgIndex],
        transition: "background 2s ease-in-out"
      }}></div>
      <div style={styles.bgDecoration2}></div>
      <div style={styles.bgDecoration3}></div>

      {/* Floating Particles Animation */}
      <div style={styles.particle1}>🌟</div>
      <div style={styles.particle2}>✨</div>
      <div style={styles.particle3}>💫</div>

      {/* Live Alerts Banner */}
      {liveAlerts.length > 0 && (
        <div style={styles.alertBanner}>
          <span style={styles.alertIcon}>🔔</span>
          <div style={styles.alertContent}>
            <strong>Live Alert:</strong> {liveAlerts[0].message}
            <span style={styles.alertSource}>— {liveAlerts[0].source}</span>
          </div>
          <button style={styles.alertClose}>×</button>
        </div>
      )}

      {/* Header Section */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>🌍 Dashboard</h1>
          <p style={styles.subtitle}>Welcome back! Track your disaster preparedness journey</p>
        </div>
        <div style={styles.headerActions}>
          <select 
            style={styles.periodSelector}
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button style={styles.profileButton}>👤</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            ...styles.statCard,
            animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
          }}>
            <div style={styles.statHeader}>
              <div style={{
                ...styles.statIcon,
                background: stat.bgColor
              }}>
                <span style={{ fontSize: "28px" }}>{stat.icon}</span>
              </div>
              <span style={styles.statLabel}>{stat.label}</span>
            </div>
            
            <div style={styles.statValue}>
              <span style={{ fontSize: "36px", fontWeight: "800", color: stat.color }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "20px", color: "#94a3b8" }}>/{stat.total}</span>
            </div>

            {/* Animated Progress Bar */}
            <div style={styles.progressBarContainer}>
              <div style={{
                ...styles.progressBar,
                width: `${stat.percentage}%`,
                background: stat.color,
                animation: "progressFill 1.5s ease-out"
              }}></div>
            </div>

            <div style={styles.statFooter}>
              <span style={{ color: "#64748b", fontSize: "14px" }}>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Educational Videos Section */}
      <div style={styles.videoSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>🎥 Featured Training Videos</h2>
          <a href="https://www.youtube.com/results?search_query=disaster+preparedness" 
             target="_blank" 
             rel="noopener noreferrer"
             style={styles.viewAllLink}>
            View All on YouTube →
          </a>
        </div>
        <div style={styles.videoGrid}>
          {educationalVideos.map((video, index) => (
            <a 
              key={index}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.videoCard}
            >
              <div style={styles.videoThumbnail}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  style={styles.thumbnailImage}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/480x360?text=Video+Thumbnail';
                  }}
                />
                <div style={styles.playButton}>▶</div>
                <span style={styles.videoDuration}>{video.duration}</span>
              </div>
              <div style={styles.videoInfo}>
                <h3 style={styles.videoTitle}>{video.title}</h3>
                <p style={styles.videoMeta}>Educational Content • YouTube</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={styles.mainGrid}>
        {/* Left Column */}
        <div style={styles.leftColumn}>
          {/* Recent Activity */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>📋 Recent Activity</h2>
              <button style={styles.viewAllButton}>View All</button>
            </div>
            <div style={styles.activityList}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{
                  ...styles.activityItem,
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}>
                  <div style={{
                    ...styles.activityIcon,
                    background: `${activity.color}15`
                  }}>
                    <span style={{ fontSize: "20px" }}>{activity.icon}</span>
                  </div>
                  <div style={styles.activityContent}>
                    <div style={styles.activityTitle}>{activity.title}</div>
                    <div style={styles.activityTime}>{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* External Resources */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>🔗 External Resources</h2>
            </div>
            <div style={styles.resourcesList}>
              {externalResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.resourceItem}
                >
                  <div style={{
                    ...styles.resourceIcon,
                    background: `${resource.color}15`
                  }}>
                    <span style={{ fontSize: "24px" }}>{resource.icon}</span>
                  </div>
                  <div style={styles.resourceContent}>
                    <div style={styles.resourceTitle}>{resource.title}</div>
                    <div style={styles.resourceDesc}>{resource.description}</div>
                  </div>
                  <span style={styles.externalLinkIcon}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>⚡ Quick Actions</h2>
            </div>
            <div style={styles.quickActionsGrid}>
              {quickActions.map((action, index) => {
                const content = (
                  <>
                    <span style={{ fontSize: "32px", marginBottom: "8px" }}>{action.icon}</span>
                    <span style={styles.quickActionTitle}>{action.title}</span>
                    <span style={styles.quickActionDesc}>{action.description}</span>
                  </>
                );

                if (action.href) {
                  return (
                    <a
                      key={index}
                      href={action.href}
                      style={{ ...styles.quickActionButton, textDecoration: "none", color: "inherit" }}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <button key={index} style={styles.quickActionButton}>
                    {content}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={styles.rightColumn}>
          {/* Weather Widget */}
          <div style={styles.weatherCard}>
            <div style={styles.weatherHeader}>
              <h3 style={styles.weatherTitle}>🌤️ Today's Weather</h3>
              <a href="https://mausam.imd.gov.in" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={styles.weatherLink}>
                IMD Live
              </a>
            </div>
            <div style={styles.weatherContent}>
              <div style={styles.weatherTemp}>28°C</div>
              <div style={styles.weatherDesc}>Partly Cloudy</div>
              <div style={styles.weatherMeta}>
                <span>💨 15 km/h</span>
                <span>💧 65%</span>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>🎯 Your Learning Path</h2>
            </div>
            <div style={styles.learningPathContainer}>
              {learningPath.map((item, index) => (
                <div key={index} style={styles.pathItem}>
                  <div style={{
                    ...styles.pathDot,
                    background: item.completed ? "#10b981" : item.current ? "#3b82f6" : "#e2e8f0",
                    animation: item.current ? "pulse 2s ease-in-out infinite" : "none"
                  }}>
                    {item.completed && <span style={{ color: "white", fontSize: "12px" }}>✓</span>}
                    {item.current && <span style={{ color: "white", fontSize: "12px" }}>→</span>}
                  </div>
                  <div style={{
                    ...styles.pathLabel,
                    color: item.current ? "#1e293b" : "#64748b",
                    fontWeight: item.current ? "700" : "500"
                  }}>
                    {item.module}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>📌 Upcoming Tasks</h2>
            </div>
            <div style={styles.tasksList}>
              {upcomingTasks.map((task, index) => (
                <div key={index} style={styles.taskItem}>
                  <div style={styles.taskHeader}>
                    <span style={{ fontSize: "24px" }}>{task.icon}</span>
                    <div style={styles.taskInfo}>
                      <div style={styles.taskTitle}>{task.title}</div>
                      <div style={styles.taskCategory}>{task.category}</div>
                    </div>
                  </div>
                  <div style={styles.taskProgressContainer}>
                    <div style={styles.taskProgressBar}>
                      <div style={{
                        ...styles.taskProgress,
                        width: `${task.progress}%`,
                        background: task.color
                      }}></div>
                    </div>
                    <span style={styles.taskProgressText}>{task.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div style={{
        ...styles.emergencyBanner,
        background: BACKGROUND_GRADIENTS[currentBgIndex],
        transition: "background 2s ease-in-out"
      }}>
        <div style={styles.emergencyContent}>
          <span style={{ fontSize: "32px", marginRight: "16px" }}>🚨</span>
          <div>
            <h3 style={styles.emergencyTitle}>Emergency Preparedness Score: 78%</h3>
            <p style={styles.emergencyText}>
              Great progress! Complete 3 more modules to reach expert level.
            </p>
          </div>
        </div>
        <button style={styles.emergencyButton}>Continue Learning</button>
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes progressFill {
            from {
              width: 0;
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes float2 {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-15px) translateX(10px);
            }
          }

          @keyframes float3 {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            50% {
              transform: translateY(-25px) translateX(-15px);
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#ffffff",
    padding: "40px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    position: "relative",
    overflow: "hidden"
  },

  bgDecoration1: {
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    opacity: 0.1,
    pointerEvents: "none",
    zIndex: 0,
    filter: "blur(60px)"
  },

  bgDecoration2: {
    position: "absolute",
    bottom: "-15%",
    left: "-10%",
    width: "800px",
    height: "800px",
    background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0
  },

  bgDecoration3: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0
  },

  particle1: {
    position: "absolute",
    top: "20%",
    left: "10%",
    fontSize: "24px",
    opacity: 0.6,
    animation: "float 3s ease-in-out infinite",
    zIndex: 0,
    pointerEvents: "none"
  },

  particle2: {
    position: "absolute",
    top: "60%",
    right: "15%",
    fontSize: "20px",
    opacity: 0.5,
    animation: "float2 4s ease-in-out infinite",
    zIndex: 0,
    pointerEvents: "none"
  },

  particle3: {
    position: "absolute",
    bottom: "30%",
    left: "20%",
    fontSize: "22px",
    opacity: 0.4,
    animation: "float3 5s ease-in-out infinite",
    zIndex: 0,
    pointerEvents: "none"
  },

  alertBanner: {
    background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    color: "white",
    padding: "16px 24px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
    boxShadow: "0 4px 16px rgba(251, 191, 36, 0.3)",
    position: "relative",
    zIndex: 2
  },

  alertIcon: {
    fontSize: "24px"
  },

  alertContent: {
    flex: 1,
    fontSize: "15px",
    fontWeight: "500"
  },

  alertSource: {
    marginLeft: "8px",
    opacity: 0.9,
    fontSize: "14px"
  },

  alertClose: {
    background: "rgba(255,255,255,0.2)",
    border: "none",
    color: "white",
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "20px",
    position: "relative",
    zIndex: 1
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "8px",
    letterSpacing: "-0.02em"
  },

  subtitle: {
    fontSize: "18px",
    color: "#64748b",
    margin: 0
  },

  headerActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center"
  },

  periodSelector: {
    padding: "12px 20px",
    borderRadius: "12px",
    border: "2px solid #e2e8f0",
    background: "white",
    fontSize: "15px",
    fontWeight: "600",
    color: "#475569",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease"
  },

  profileButton: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    border: "2px solid #e2e8f0",
    background: "white",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
    position: "relative",
    zIndex: 1
  },

  statCard: {
    background: "white",
    padding: "28px",
    borderRadius: "20px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    border: "1px solid #f1f5f9",
    transition: "all 0.3s ease"
  },

  statHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "20px"
  },

  statIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  statLabel: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#64748b"
  },

  statValue: {
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
    marginBottom: "16px"
  },

  progressBarContainer: {
    width: "100%",
    height: "8px",
    background: "#f1f5f9",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "12px"
  },

  progressBar: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.5s ease"
  },

  statFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  videoSection: {
    marginBottom: "40px",
    position: "relative",
    zIndex: 1
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
  },

  sectionTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0
  },

  viewAllLink: {
    color: "#3b82f6",
    fontSize: "15px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "color 0.3s ease"
  },

  videoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px"
  },

  videoCard: {
    background: "white",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    border: "1px solid #f1f5f9",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer"
  },

  videoThumbnail: {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%",
    background: "#000",
    overflow: "hidden"
  },

  thumbnailImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "#ef4444",
    paddingLeft: "4px"
  },

  videoDuration: {
    position: "absolute",
    bottom: "12px",
    right: "12px",
    background: "rgba(0,0,0,0.8)",
    color: "white",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600"
  },

  videoInfo: {
    padding: "16px"
  },

  videoTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "6px"
  },

  videoMeta: {
    fontSize: "13px",
    color: "#64748b",
    margin: 0
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "24px",
    marginBottom: "40px",
    position: "relative",
    zIndex: 1
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },

  card: {
    background: "white",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    border: "1px solid #f1f5f9"
  },

  weatherCard: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
    color: "white"
  },

  weatherHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },

  weatherTitle: {
    fontSize: "18px",
    fontWeight: "700",
    margin: 0
  },

  weatherLink: {
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    textDecoration: "none",
    opacity: 0.9
  },

  weatherContent: {
    textAlign: "center"
  },

  weatherTemp: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "8px"
  },

  weatherDesc: {
    fontSize: "18px",
    marginBottom: "16px",
    opacity: 0.95
  },

  weatherMeta: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    fontSize: "15px"
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
  },

  cardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0
  },

  viewAllButton: {
    background: "transparent",
    border: "none",
    color: "#3b82f6",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  },

  activityList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },

  activityItem: {
    display: "flex",
    gap: "16px",
    padding: "16px",
    background: "#fafafa",
    borderRadius: "14px",
    transition: "all 0.2s ease"
  },

  activityIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },

  activityContent: {
    flex: 1
  },

  activityTitle: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "4px"
  },

  activityTime: {
    fontSize: "13px",
    color: "#94a3b8"
  },

  resourcesList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  resourceItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    background: "#fafafa",
    borderRadius: "14px",
    textDecoration: "none",
    transition: "all 0.3s ease"
  },

  resourceIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },

  resourceContent: {
    flex: 1
  },

  resourceTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "4px"
  },

  resourceDesc: {
    fontSize: "13px",
    color: "#64748b"
  },

  externalLinkIcon: {
    fontSize: "20px",
    color: "#94a3b8"
  },

  quickActionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px"
  },

  quickActionButton: {
    background: "#fafafa",
    border: "2px solid #f1f5f9",
    padding: "24px",
    borderRadius: "16px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease"
  },

  quickActionTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "4px"
  },

  quickActionDesc: {
    fontSize: "13px",
    color: "#64748b"
  },

  learningPathContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  pathItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    position: "relative"
  },

  pathDot: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    border: "3px solid white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  pathLabel: {
    fontSize: "15px",
    fontWeight: "600"
  },

  tasksList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  taskItem: {
    padding: "20px",
    background: "#fafafa",
    borderRadius: "16px"
  },

  taskHeader: {
    display: "flex",
    gap: "12px",
    marginBottom: "16px"
  },

  taskInfo: {
    flex: 1
  },

  taskTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "4px"
  },

  taskCategory: {
    fontSize: "13px",
    color: "#64748b"
  },

  taskProgressContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  taskProgressBar: {
    flex: 1,
    height: "8px",
    background: "#e2e8f0",
    borderRadius: "4px",
    overflow: "hidden"
  },

  taskProgress: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.5s ease"
  },

  taskProgressText: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#64748b",
    minWidth: "40px"
  },

  emergencyBanner: {
    padding: "32px",
    borderRadius: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 12px 32px rgba(102, 126, 234, 0.3)",
    flexWrap: "wrap",
    gap: "20px",
    position: "relative",
    zIndex: 1
  },

  emergencyContent: {
    display: "flex",
    alignItems: "center",
    color: "white"
  },

  emergencyTitle: {
    fontSize: "22px",
    fontWeight: "800",
    marginBottom: "6px",
    color: "white"
  },

  emergencyText: {
    fontSize: "16px",
    opacity: 0.95,
    margin: 0
  },

  emergencyButton: {
    background: "white",
    color: "#667eea",
    border: "none",
    padding: "16px 32px",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease"
  }
};