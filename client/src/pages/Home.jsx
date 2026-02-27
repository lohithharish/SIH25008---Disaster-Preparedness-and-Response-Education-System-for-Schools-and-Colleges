import { useState, useEffect } from 'react';
import { AlertTriangle, BookOpen, Video, GraduationCap, Brain, ChevronRight, Shield, Zap, Users, Award } from 'lucide-react';

const EMERGENCY_TIPS = [
  {
    icon: "⚡",
    disaster: "Earthquake",
    tip: "Drop, Cover and Hold On. Stay away from windows and heavy objects.",
    color: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
  },
  {
    icon: "🌊",
    disaster: "Flood",
    tip: "Move to higher ground immediately. Never walk or drive through flood waters.",
    color: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)"
  },
  {
    icon: "🔥",
    disaster: "Fire",
    tip: "Stay low to the ground. Cover your mouth with a cloth and exit quickly.",
    color: "#ef4444",
    bgGradient: "linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)"
  },
  {
    icon: "🌪️",
    disaster: "Cyclone",
    tip: "Stay indoors away from windows. Shelter in a small interior room or closet.",
    color: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)"
  }
];

function Home() {
  const [currentTip, setCurrentTip] = useState(0);
  const [hoverCard, setHoverCard] = useState(null);

  const features = [
    {
      icon: <BookOpen size={40} strokeWidth={1.5} />,
      title: "Safety Guidelines",
      description: "Learn step-by-step safety measures for earthquakes, floods, fires and more.",
      color: "#3b82f6",
      bgColor: "#eff6ff",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
    },
    {
      icon: <Video size={40} strokeWidth={1.5} />,
      title: "Mock Drills",
      description: "Watch training videos and animations that teach real-life emergency response.",
      color: "#10b981",
      bgColor: "#f0fdf4",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
      icon: <GraduationCap size={40} strokeWidth={1.5} />,
      title: "Learning Modules",
      description: "Interactive modules designed to improve disaster awareness.",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
    },
    {
      icon: <Brain size={40} strokeWidth={1.5} />,
      title: "Disaster Quiz",
      description: "Test your knowledge and level up your preparedness skills.",
      color: "#8b5cf6",
      bgColor: "#faf5ff",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % EMERGENCY_TIPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Decorative Background Elements */}
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <Shield size={16} />
            <span>Your Safety Partner</span>
          </div>
          
          <h1 style={styles.title}>
            🛟 Stay Safe. Stay Prepared.
          </h1>
          
          <p style={styles.subtitle}>
            Learn how to respond during disasters and protect your family with comprehensive training, interactive modules, and expert guidance.
          </p>

          <div style={styles.heroButtons}>
            <button style={styles.primaryButton}>
              Get Started
              <ChevronRight size={20} />
            </button>
            <button style={styles.secondaryButton}>
              <Video size={20} />
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={styles.trustBar}>
            <div style={styles.trustItem}>
              <Users size={18} />
              <span>10K+ Trained</span>
            </div>
            <div style={styles.trustDivider}></div>
            <div style={styles.trustItem}>
              <Award size={18} />
              <span>Expert Certified</span>
            </div>
            <div style={styles.trustDivider}></div>
            <div style={styles.trustItem}>
              <Zap size={18} />
              <span>24/7 Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionBadge}>WHAT YOU'LL LEARN</span>
          <h2 style={styles.sectionTitle}>Everything You Need to Stay Safe</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive disaster preparedness training at your fingertips
          </p>
        </div>

        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoverCard === index ? {
                  transform: "translateY(-12px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
                } : {})
              }}
              onMouseEnter={() => setHoverCard(index)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <div style={{
                ...styles.cardIconWrapper,
                background: hoverCard === index ? feature.gradient : feature.bgColor
              }}>
                <div style={{
                  color: hoverCard === index ? "white" : feature.color,
                  transition: "color 0.3s ease"
                }}>
                  {feature.icon}
                </div>
              </div>

              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDescription}>{feature.description}</p>

              <div style={styles.cardFooter}>
                <span style={{...styles.learnMore, color: feature.color}}>
                  Learn more
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Tip Section */}
      <div style={styles.tipSection}>
        <div style={styles.tipContainer}>
          <div style={{
            ...styles.tipBox,
            background: EMERGENCY_TIPS[currentTip].bgGradient
          }}>
            <div style={styles.tipHeader}>
              <div style={{
                ...styles.tipIconBadge,
                borderColor: EMERGENCY_TIPS[currentTip].color
              }}>
                <AlertTriangle size={24} color={EMERGENCY_TIPS[currentTip].color} />
              </div>
              <div>
                <div style={styles.tipLabel}>EMERGENCY TIP</div>
                <h2 style={{
                  ...styles.tipDisasterName,
                  color: EMERGENCY_TIPS[currentTip].color
                }}>
                  {EMERGENCY_TIPS[currentTip].icon} {EMERGENCY_TIPS[currentTip].disaster}
                </h2>
              </div>
            </div>

            <p style={styles.tipText}>
              {EMERGENCY_TIPS[currentTip].tip}
            </p>

            <div style={styles.tipDots}>
              {EMERGENCY_TIPS.map((_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.dot,
                    background: index === currentTip 
                      ? EMERGENCY_TIPS[currentTip].color 
                      : "#cbd5e1",
                    width: index === currentTip ? "32px" : "10px",
                    height: "10px"
                  }}
                  onClick={() => setCurrentTip(index)}
                  aria-label={`Tip ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>📊</div>
            <div style={styles.statNumber}>10,000+</div>
            <div style={styles.statLabel}>Lives Trained</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>📚</div>
            <div style={styles.statNumber}>35+</div>
            <div style={styles.statLabel}>Learning Resources</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>⭐</div>
            <div style={styles.statNumber}>98%</div>
            <div style={styles.statLabel}>Success Rate</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>🏆</div>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Expert Modules</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaSubtitle}>
            Join thousands who have already improved their disaster preparedness
          </p>
          <button style={styles.ctaButton}>
            Start Learning Now
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

const styles = {
  container: {
    minHeight: "100vh",
    background: "#ffffff",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif",
    position: "relative",
    overflow: "hidden"
  },

  bgDecoration1: {
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0
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

  hero: {
    padding: "100px 24px 80px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
    background: "linear-gradient(180deg, #fafafa 0%, #ffffff 100%)"
  },

  heroContent: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "8px 20px",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "24px",
    boxShadow: "0 4px 16px rgba(102, 126, 234, 0.3)"
  },

  title: {
    fontSize: "64px",
    fontWeight: "800",
    marginBottom: "24px",
    lineHeight: "1.1",
    color: "#1e293b",
    letterSpacing: "-0.02em"
  },

  subtitle: {
    fontSize: "20px",
    color: "#64748b",
    lineHeight: "1.7",
    marginBottom: "40px",
    maxWidth: "700px",
    margin: "0 auto 40px"
  },

  heroButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "48px"
  },

  primaryButton: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    padding: "18px 36px",
    fontSize: "17px",
    fontWeight: "600",
    borderRadius: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
    transition: "all 0.3s ease"
  },

  secondaryButton: {
    background: "white",
    color: "#667eea",
    border: "2px solid #667eea",
    padding: "16px 34px",
    fontSize: "17px",
    fontWeight: "600",
    borderRadius: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease"
  },

  trustBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "32px",
    flexWrap: "wrap",
    padding: "24px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    maxWidth: "600px",
    margin: "0 auto"
  },

  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#64748b",
    fontSize: "15px",
    fontWeight: "600"
  },

  trustDivider: {
    width: "1px",
    height: "24px",
    background: "#e2e8f0"
  },

  section: {
    padding: "100px 24px",
    maxWidth: "1280px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "64px"
  },

  sectionBadge: {
    display: "inline-block",
    color: "#8b5cf6",
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginBottom: "16px"
  },

  sectionTitle: {
    fontSize: "48px",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "16px",
    letterSpacing: "-0.02em"
  },

  sectionSubtitle: {
    fontSize: "18px",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "1px solid #f1f5f9",
    position: "relative",
    overflow: "hidden"
  },

  cardIconWrapper: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "24px",
    transition: "all 0.3s ease"
  },

  cardTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#1e293b"
  },

  cardDescription: {
    fontSize: "16px",
    color: "#64748b",
    lineHeight: "1.7",
    marginBottom: "24px"
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  learnMore: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "15px",
    fontWeight: "600",
    transition: "gap 0.3s ease"
  },

  tipSection: {
    padding: "60px 24px",
    background: "#fafafa",
    position: "relative",
    zIndex: 1
  },

  tipContainer: {
    maxWidth: "900px",
    margin: "0 auto"
  },

  tipBox: {
    padding: "48px",
    borderRadius: "28px",
    boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
    transition: "all 0.5s ease",
    border: "1px solid rgba(255,255,255,0.8)"
  },

  tipHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "28px"
  },

  tipIconBadge: {
    width: "64px",
    height: "64px",
    borderRadius: "18px",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
  },

  tipLabel: {
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    color: "#64748b",
    marginBottom: "6px"
  },

  tipDisasterName: {
    fontSize: "28px",
    fontWeight: "800",
    margin: 0
  },

  tipText: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#475569",
    marginBottom: "32px",
    fontWeight: "500"
  },

  tipDots: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },

  dot: {
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    padding: 0
  },

  statsSection: {
    padding: "80px 24px",
    background: "white",
    position: "relative",
    zIndex: 1
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto"
  },

  statCard: {
    textAlign: "center",
    padding: "40px 24px",
    background: "#fafafa",
    borderRadius: "20px",
    transition: "all 0.3s ease"
  },

  statIcon: {
    fontSize: "48px",
    marginBottom: "16px"
  },

  statNumber: {
    fontSize: "48px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "8px"
  },

  statLabel: {
    fontSize: "16px",
    color: "#64748b",
    fontWeight: "600"
  },

  ctaSection: {
    padding: "100px 24px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textAlign: "center",
    position: "relative",
    zIndex: 1
  },

  ctaContent: {
    maxWidth: "700px",
    margin: "0 auto"
  },

  ctaTitle: {
    fontSize: "48px",
    fontWeight: "800",
    color: "white",
    marginBottom: "16px",
    letterSpacing: "-0.02em"
  },

  ctaSubtitle: {
    fontSize: "20px",
    color: "rgba(255,255,255,0.9)",
    marginBottom: "40px",
    lineHeight: "1.6"
  },

  ctaButton: {
    background: "white",
    color: "#667eea",
    border: "none",
    padding: "20px 44px",
    fontSize: "18px",
    fontWeight: "700",
    borderRadius: "16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease"
  }
};