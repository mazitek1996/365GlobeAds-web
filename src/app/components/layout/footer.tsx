import { Divider } from "antd";
import React from "react";
import {
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center relative flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="z-0" />
      <div className="max-w-full p-4 relative z-10">
        <div className="container mx-auto lg:px-0">
          <div className="flex flex-col py-20 space-y-6 md:flex-row md:justify-between md:space-y-0">
            <div className="footer_logo">
              <Image
                src="/static/images/icons/365GlobeAds.svg"
                alt="Logo"
                width={100}
                height={100}
                className="cursor-pointer"
              />
              <div className="outro_container">
                <p className="snap-outro">Globally Served ❤️|</p>
                <p>
                    365GlobeAds Innovative Technologies&reg;
                </p>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  Company
                </h4>
                <ul className="footer_list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/Frequent_asked_questions">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/partners-investors-contact">
                      Become Investor
                    </Link>
                  </li>
                  <li>
                    <Link href="/job-applications">Career</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  About
                </h4>
                <ul className="footer_list">
                  <li>
                    <Link href="/service">Services</Link>
                  </li>
                  {/* <li>
                    <Link href="/how-it-works">How it Works</Link>
                  </li> */}
                  <li>
                    <Link href="/who-we-serve">Who We Serve</Link>
                  </li>
                  {/* <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li> */}
                  <li>
                    <Link href="/mission">Mission</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section-social">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  Stay Connected
                </h4>
                <ul className="footer_list">
                  <li className="mb-4">
                    <Link href=" https://web.facebook.com/profile.php?id=61558682776653" className="flex items-center">
                      <FaFacebook />
                      <p className="ml-2">Facebook</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="flex items-center">
                      <FaTwitter />
                      <p className="ml-2">Twitter</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.instagram.com/365globeads" className="flex items-center">
                      <FaInstagram />
                      <p className="ml-2">Instagram</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.youtube.com/@365GlobeAds" className="flex items-center">
                      <FaYoutube />
                      <p className="ml-2">Youtube</p>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.linkedin.com/company/365globeads" className="flex items-center">
                      <FaLinkedin />
                      <p className="ml-2">LinkedIn</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-column">
              <div className="footer_section">
                <h4 className="text-2xl text-white font-semibold mb-6">
                  Legal
                </h4>
                <ul className="footer_list">
                  <li>
                    <Link href="/terms-of-services">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Divider
            className="flex md:hidden footer_divider item-center"
            style={{ borderColor: "white" }}
          >
            <b className="text-gray-200">365GlobeAds - The Global Ads Service.</b>
          </Divider>

          <div className="lower_footer_text flex justify-between items-center py-2">
  <p className="font-inter font-normal text-gray-400 text-sm md:text-xs">
    365GlobeAds is a global leader in innovative digital marketing solutions,
    empowering businesses to thrive in the dynamic digital age. We offer
    cutting-edge services from web development and AI integration to a
    wide range of comprehensive digital marketing services, helping businesses of all
    sizes unlock their full potential on the global stage. Our unwavering
    commitment to excellence and seamless client experiences sets 365GlobeAds
    apart.
  </p>
</div>


          <div className="address_container flex items-center text-xs text-gray-400 py-2">
  <span>&copy; {new Date().getFullYear()} 365GlobeAds |</span>
  <span className="ml-2">701 Smith St, Huston, TX 77002, United States</span>
</div>

        </div>
      </div>
    </div>
  );
}
