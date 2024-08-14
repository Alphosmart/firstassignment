// import React from 'react'

const Products = () => {
  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <article>
          <h3>Software</h3>
          <img src="/public/Image/Software.jpg" alt="" width={300} />
          <p>
            Our software solutions are designed to improve productivity and
            streamline operations for businesses of all sizes.
          </p>
        </article>
        <article>
          <h3>Firewall</h3>
          <img src="/public/Image/Firewall.jpg" alt="" width={300} />
          <p>
            Protect your network with our advanced firewall solutions, ensuring
            your data remains secure from external threats.
          </p>
        </article>
        <article>
          <h3>Antivirus Software</h3>
          <img src="/public/Image/Antivirus.png" alt="" width={300} />
          <p>
            Keep your systems safe from malware and viruses with our top-rated
            antivirus software.
          </p>
        </article>
        <article>
          <h3>VPN Services</h3>
          <img src="/public/Image/VPN.jpg" alt="" width={300} />
          <p>
            Ensure your online privacy and security with our reliable VPN
            services, providing encrypted internet connections.
          </p>
        </article>
        <article>
          <h3>Cloud Storage</h3>
          <img src="/public/Image/Cloud.jpeg" alt="" width={300} />
          <p>
            Store and access your data from anywhere with our secure and
            scalable cloud storage solutions.
          </p>
        </article>
        <article>
          <h3>Cyber Security Experts</h3>
          <img src="/public/Image/CyberGhost.jpeg" alt="" width={300} />
          <p>
            Our team of cyber security experts is here to help you protect your
            business from cyber threats and vulnerabilities.
          </p>
        </article>
      </div>
    </>
  );
};

export default Products;
