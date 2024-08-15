// import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Partners</li>
            <li>Footer</li>
          </ul>
        </div>
        <div>
          <h3>Follow us @:</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <p>&copy; 2021 Ashamsmart Dynamic Concepts</p>

      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          background-color: #333;
          color: white;
        }
        .footer div {
          flex: 1;
        }
        .footer ul {
          list-style-type: none;
          padding: 0;
        }
        .footer li {
          margin: 5px 0;
        }
        .footer h3 {
          margin-bottom: 10px;
        }
        p {
          text-align: center;
          margin-top: 20px;
          color: #666;
        }
      `}</style>
    </>
  );
};

export default Footer;
