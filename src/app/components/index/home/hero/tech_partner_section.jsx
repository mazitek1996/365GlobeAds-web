

import Image from "next/image";

export default function TechPartnerSection() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-lg font-bold mb-2">
        Partnering with Leading Enterprises
      </h1>
      <p className="text-sm text-gray-300 mb-4">
        Unleashing Possibilities & Pioneering Innovation
      </p>

      <div className="flex justify-center items-center space-x-8">
        <PartnerLogo src="/static/images/icons/chatgpt.svg" alt="OpenAI" />
        <PartnerLogo src="/static/images/icons/github-logo.svg" alt="GitHub" />
        <PartnerLogo src="/static/images/icons/aws.svg" alt="AWS" />
        <PartnerLogo src="/static/images/icons/google.svg" alt="Google" />
        <PartnerLogo src="/static/images/icons/meta.svg" alt="Meta" />

        <PartnerLogo src="/static/images/icons/azure.svg" alt="Azure" />
        <PartnerLogo src="/static/images/icons/microsoft.svg" alt="Microsoft" />
      </div>
    </div>
  );
}

function PartnerLogo({ src, alt }) {
  return (
    <div className="flex justify-center p-2 items-center">
      <Image src={src} width={50} height={50} alt={alt} />
      {/* Optional: Add a tooltip or description */}
      <style jsx>{`
        img {
          width: 50px;
          height: 50px;
          fill: red; /* Change color to whatever you want */
        }
      `}</style>
    </div>
  );
}
