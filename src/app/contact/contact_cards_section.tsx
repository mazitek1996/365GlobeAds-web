

import React from "react";
import Link from "next/link";
import ContactCard from "./contact_card";

const ContactCardsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     <Link href="/clients-contact">
      <ContactCard
        title="Clients"
        description="Software Projects"
        linkTo="/clients-contact"
      />
    </Link>
    <Link href="/partners-investors-contact">
      <ContactCard
        title="Partners"
        description="Investment & Collaboration"
        linkTo="/partners-investors-contact"
      />
    </Link>
    <Link href="/technical-support-contact">
      <ContactCard
        title="Support"
        description="Technical Assistance"
        linkTo="/technical-support-contact"
      />
    </Link>
    <Link href="/job-applications">
      <ContactCard
        title="Careers"
        description="Join Our Team"
        linkTo="/job-applications"
      />
    </Link>
    </section>
  );
};

export default ContactCardsSection;
