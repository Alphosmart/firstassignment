// import React from 'react';

const About = () => {
  return (
    <>
      <div className="about">
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
            padding: '10px',
          }}
        >
          ABOUT US
        </h1>

        <div>
          <h1>Welcome to Ashamsmart Your Partner in Innovation and Security</h1>
          <p>
            At Ashamsmart, we blend cutting-edge technology with robust security
            measures to deliver comprehensive solutions tailored to your
            business needs. Our team of experts excels in crafting innovative
            software and fortifying cyber defenses, ensuring your operations run
            smoothly and securely.
          </p>

          <h2>Our Services</h2>
          <h3>Software Development</h3>
          <p>
            <b>Custom Software Solutions: </b>We design and develop bespoke
            software tailored to your unique business requirements, enhancing
            efficiency and driving growth.
            <p>
              <b>Web and Mobile Applications:</b> From intuitive web platforms
              to dynamic mobile apps, we create user-friendly solutions that
              engage and retain customers.
            </p>
            <p>
              <b>System Integration:</b> Seamlessly integrate new software with
              your existing systems, ensuring compatibility and streamlined
              operations.
            </p>
            <p>
              <b>Maintenance and Support:</b> Our ongoing support and
              maintenance services keep your software up-to-date and performing
              at its best.
            </p>
          </p>

          <h2>Why Choose Us?</h2>
          <p>
            <b>Expertise:</b> Our team of skilled professionals has years of
            experience in software development and cybersecurity, ensuring
            high-quality solutions.
          </p>
          <p>
            <b>Innovation:</b> We stay ahead of the curve by adopting the latest
            technologies and best practices, delivering cutting-edge solutions
            to our clients.
          </p>
          <p>
            <b>Security:</b> Protecting your data and systems is our top
            priority. We implement robust security measures to safeguard your
            business from cyber threats.
          </p>
          <p>
            <b>Customer-Centric Approach:</b> We work closely with our clients
            to understand their needs and deliver solutions that meet and exceed
            their expectations.
          </p>
          <p>
            <b>Quality Assurance:</b> Our rigorous testing and quality assurance
            processes ensure that our software is reliable, secure, and
            user-friendly.
          </p>
        </div>
        <img
          src="/public/Image/pexels-mary-taylor-5896578.jpg"
          alt=""
          width={500}
        />
      </div>
    </>
  );
};

export default About;
