import React from 'react';

import Header from '../components/Header'; // Import the existing Header component
import './Homepage.css'; // Import the CSS for styling

function Homepage() {
  return (
    <div className="homepage">
      {/* Use the imported Header component */}
      
      <Header />

      {/* Services Section */}
      <section className="services-section">
        <h2>Osteo-Aid Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src="/path-to-ai-diagnosis-image.jpg" alt="AI Diagnosis" />
            <h3>AI-Powered Diagnosis</h3>
            <p>Engage diagnosis via AI-powered image processing.</p>
          </div>
          <div className="service-card">
            <img src="/path-to-treatment-plan-image.jpg" alt="Treatment Plans" />
            <h3>Personalized Treatment Plans</h3>
            <p>Tailored treatment plans for patient needs.</p>
          </div>
          <div className="service-card">
            <img src="/path-to-progress-tracking-image.jpg" alt="Progress Tracking" />
            <h3>Track Progress</h3>
            <p>Advanced analytics to monitor recovery.</p>
          </div>
          <div className="service-card">
            <img src="/path-to-expert-support-image.jpg" alt="Expert Support" />
            <h3>Expert Insights</h3>
            <p>Ongoing care and support from experts.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How Osteo-Aid Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <img src="/path-to-upload-xrays-image.jpg" alt="Upload X-rays" />
            <h3>Step 1: Upload X-rays</h3>
            <p>Securely upload X-rays for diagnosis.</p>
          </div>
          <div className="step-card">
            <img src="/path-to-ai-analysis-image.jpg" alt="AI Analysis" />
            <h3>Step 2: AI Analysis</h3>
            <p>Receive accurate AI-powered diagnosis.</p>
          </div>
          <div className="step-card">
            <img src="/path-to-treatment-plan-image.jpg" alt="Treatment Plan" />
            <h3>Step 3: Treatment Plan</h3>
            <p>Get a personalized plan.</p>
          </div>
          <div className="step-card">
            <img src="/path-to-track-progress-image.jpg" alt="Track Progress" />
            <h3>Step 4: Track Progress</h3>
            <p>Use advanced tools to monitor progress.</p>
          </div>
          <div className="step-card">
            <img src="/path-to-expert-support-image.jpg" alt="Expert Support" />
            <h3>Step 5: Expert Support</h3>
            <p>Stay connected with experts for ongoing care.</p>
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="awareness-section">
        <h2>Osteoarthritis Awareness</h2>
        <div className="awareness-container">
          <div className="awareness-card">
            <img src="/path-to-preventative-surgery-image.jpg" alt="Preventative Surgery" />
            <h3>Preventative Surgery</h3>
            <p>Causes and symptoms to avoid unnecessary surgery.</p>
            <button>Read More</button>
          </div>
          <div className="awareness-card">
            <img src="/path-to-nutrition-image.jpg" alt="Nutrition for OA" />
            <h3>Nutrition for OA</h3>
            <p>Learn about anti-inflammatory foods.</p>
            <button>Read More</button>
          </div>
          <div className="awareness-card">
            <img src="/path-to-emerging-tech-image.jpg" alt="Emerging Technologies" />
            <h3>Emerging Technologies</h3>
            <p>Latest techniques in osteoarthritis management.</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Subscribe To Our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>

  

      </section>
    </div>
  );
}

export default Homepage;