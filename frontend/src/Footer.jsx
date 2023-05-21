import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2023 Your Website. All rights reserved.</p>
        <ul style={styles.socialIcons}>
          <li>
            <a href="#" style={styles.iconLink}>
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" style={styles.iconLink}>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" style={styles.iconLink}>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f2f2f2',
    padding: '20px 0',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '10px',
  },
  socialIcons: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  iconLink: {
    color: '#666',
    fontSize: '16px',
    margin: '0 5px',
    textDecoration: 'none',
  },
};

export default Footer;
