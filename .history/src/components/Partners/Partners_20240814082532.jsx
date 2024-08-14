// import React from 'react';

const Partners = () => {
  return (
    <>
      <h1>Our Partners</h1>
      <div className="partners">
        <article>
          <h2>Microsoft</h2>
          <img src="/public/Image/Microsoft.jpeg" alt="" />
          {/* <p>
            Microsoft Corporation is an American multinational technology
            company with headquarters in Redmond, Washington. It develops,
            manufactures, licenses, supports, and sells computer software,
            consumer electronics, personal computers, and related services.
          </p> */}
        </article>
        <article>
          <h2>Google</h2>
          <img src="/public/Image/Google.png" alt="" />
          {/* <p>
            Google LLC is an American multinational technology company that
            specializes in Internet-related services and products, which include
            online advertising technologies, a search engine, cloud computing,
            software, and hardware.
          </p> */}
        </article>
        <article>
          <h2>Amazon</h2>
          <img src="/public/Image/Amazon.png" alt="" />
          {/* <p>
            Amazon.com, Inc. is an American multinational technology company
            based in Seattle, Washington, which focuses on e-commerce, cloud
            computing, digital streaming, and artificial intelligence.
          </p> */}
        </article>
        <article>
          <h2>IBM</h2>
          <img src="/public/Image/IBM.png" alt="" />
          {/* <p>
            International Business Machines Corporation is an American
            multinational technology company that produces and sells computer
            hardware, middleware, and software, and provides hosting and
            consulting services in areas ranging from mainframe computers to
            nanotechnology.
          </p> */}
        </article>
      </div>
    </>
  );
};

export default Partners;
