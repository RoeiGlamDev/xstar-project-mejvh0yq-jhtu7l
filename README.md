import React from 'react';

const README: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      <h1 style={{ color: '#6A0DAD' }}>CleanSSR</h1>
      <h2>Website for Cleaning Company</h2>
      <p>Welcome to CleanSSR, your trusted partner in cleaning services.</p>

      <h3>Design</h3>
      <p>
        Our website features a clean design with a color palette of white and purple, 
        providing a fresh and modern look.
      </p>

      <h3>Content</h3>
      <p>
        We offer a variety of cleaning services tailored to meet your needs. 
        From residential to commercial cleaning, we ensure a spotless environment.
      </p>

      <h3>Reviews</h3>
      <p>
        "CleanSSR transformed my home! Highly recommend!" - Jane D.
      </p>
      <p>
        "Professional and thorough. Best cleaning service in town!" - John S.
      </p>

      <h3>Contact Us</h3>
      <p>
        For inquiries, please reach out to us at <a href="mailto:info@cleanSSR.com">info@cleanSSR.com</a>.
      </p>

      <footer style={{ marginTop: '20px', fontSize: '12px' }}>
        <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default README;