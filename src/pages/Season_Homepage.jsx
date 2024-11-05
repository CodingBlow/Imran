import React from 'react';

const RentServicesHomepage = ({ onSummerClick, onWinterClick }) => {
  return (
    <div style={styles.container}>
      
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
    minHeight: '50vh',
    backgroundColor: '#f7fafc',
    padding: '0 2rem', // Removed vertical padding and kept horizontal padding
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '0.5rem', // Reduced margin-bottom for less space
  },
  description: {
    textAlign: 'center',
    color: '#4a5568',
    marginBottom: '1rem', // Reduced margin-bottom
    maxWidth: '600px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap', // To make it responsive
    marginTop: '1rem', // Reduced margin-top for the card container
    marginBottom: '1rem', // Reduced margin-bottom for the card container
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
    marginBottom: '0.5rem', // Reduced margin-bottom
  },
  cardText: {
    fontSize: '1rem',
    color: '#e2e8f0',
    marginBottom: '1rem', // Reduced margin-bottom
  },
  action: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default RentServicesHomepage;
