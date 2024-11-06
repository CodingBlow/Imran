import React from 'react';

const RentServicesHomepage = ({ onSummerClick, onWinterClick }) => {
  return (
    <div style={styles.container}>
      {/* Heading for the Page */}
      <h1 style={styles.title}>Select Seasonal Services</h1>

      <div style={styles.cardContainer}>
        {/* Summer Rentals Card */}
        <div 
          style={{ ...styles.card, ...styles.summerCard }}
          onClick={onSummerClick}
        >
          <div style={styles.icon}>☀️</div>
          <h2 style={styles.cardTitle}>Summer Rentals</h2>
          <p style={styles.cardText}>
            Premium equipment for your summer adventures, from water sports to camping gear.
          </p>
          <div style={styles.action}>
            <span>View Equipment</span> →
          </div>
        </div>

        {/* Winter Rentals Card */}
        <div 
          style={{ ...styles.card, ...styles.winterCard }}
          onClick={onWinterClick}
        >
          <div style={styles.icon}>❄️</div>
          <h2 style={styles.cardTitle}>Winter Rentals</h2>
          <p style={styles.cardText}>
            High-quality winter sports equipment and gear for the perfect snow season.
          </p>
          <div style={styles.action}>
            <span>View Equipment</span> →
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles as a JavaScript object
const styles = {
  container: {
    minHeight: '60vh',
    backgroundColor: '#f7fafc',
    padding: '2rem 2rem', // Increased vertical padding for more top and bottom space
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '2rem', // Increased margin-bottom for more space below the heading
    textAlign: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem', // Space between cards
    justifyContent: 'center',
    flexWrap: 'wrap', // Wrap cards on smaller screens
    marginTop: '2rem', // Increased margin-top for better spacing
    marginBottom: '2rem', // Increased margin-bottom for better spacing
  },
  card: {
    width: '280px',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  summerCard: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
  },
  winterCard: {
    backgroundColor: '#10b981',
    color: '#ffffff',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  cardText: {
    fontSize: '1rem',
    color: '#e2e8f0',
    marginBottom: '1rem',
  },
  action: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Media query for responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '1rem', // Reduce padding for smaller screens
    },
    title: {
      fontSize: '2rem', // Reduce font size for the title
    },
    card: {
      width: '100%', // Make cards take full width on smaller screens
    },
    cardContainer: {
      flexDirection: 'column', // Stack cards vertically
      gap: '1.5rem', // Adjust gap between cards
    },
  },
};

export default RentServicesHomepage;
