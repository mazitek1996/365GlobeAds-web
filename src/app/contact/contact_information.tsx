import React from "react";

const ContactInformationSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {/* Left side with contact information */}
      <div className="lg:mt-10">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="lg:mt-10">
          <h3>365GlobeAds IT HQ.</h3>
          <p><span className="font-bold">Email</span>: Info@365globeads.com</p>
          <p><span className="font-bold">Phone</span>: + (91) 981-898-6988</p>
          <p><span className="font-bold">Office Address</span>: Tower U- 108, Amrapali Zodiac Noida Sector 120, India.</p>
        </div>

        <div className="lg:mt-10">
          <h3>365GlobeAds Head office.</h3>
          <p><span className="font-bold">Email</span>: Info@365globeads.com</p>
          <p><span className="font-bold">Phone</span>: +(1) 2086965057</p>
          <p><span className="font-bold">Office Address</span>: 701 Smith St, Huston, TX 77002, United States.</p>
        </div>

        <div className="lg:mt-10">
          <h3>365GlobeAds Branch Office.</h3>
          <p><span className="font-bold">Email</span>: Info@365globeads.com</p>
          <p><span className="font-bold">Phone</span>: +(44) 7479 808 754</p>
          <p><span className="font-bold">Office Address</span>: 1 Newdyke RdKirkintilloch, Glasgow G66 2PU, UK</p>
        </div>
      </div>
      {/* Right side with Google Map frame */}
      <div style={{ textDecoration: 'none', overflow: 'hidden', maxWidth: '100%', width: '500px', height: '500px' }}>
        <div id="my-map-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
          <iframe
            style={{ height: '100%', width: '100%', border: '0' }}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=365GlobeAds+701+Smith+St,+Huston,+TX+77002,+United+States.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <a className="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="grab-maps-authorization">premium bootstrap themes</a>
        <style>
          {`
            #my-map-canvas .text-marker {}
            .map-generator {
              max-width: 100%;
              max-height: 100%;
              background: none;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default ContactInformationSection;
