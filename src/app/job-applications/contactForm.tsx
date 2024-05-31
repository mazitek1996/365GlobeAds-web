

// "use client"
// import React, { useState } from "react";

// const CareerContactForm: React.FC = () => {
//   // State variables for form fields
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here, you can handle form submission logic, such as sending the data to a backend server
//     console.log("Form submitted:", { firstName, lastName, country, city, phoneNumber, email, message });
//     // Reset form fields after submission
//     setFirstName("");
//     setLastName("");
//     setCountry("");
//     setCity("");
//     setPhoneNumber("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//         <input type="text" id="firstName" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//         <input type="text" id="lastName" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
//         <input type="text" id="country" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={country} onChange={(e) => setCountry(e.target.value)} required />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
//         <input type="text" id="city" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={city} onChange={(e) => setCity(e.target.value)} required />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
//         <input type="tel" id="phoneNumber" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//         <input type="email" id="email" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//         <textarea id="message" rows={4} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={message} onChange={(e) => setMessage(e.target.value)} required />
//       </div>
//       <div className="text-center">
//         <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default CareerContactForm;


"use client"
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CareerContactForm: React.FC = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [positionAppliedFor, setPositionAppliedFor] = useState("");

  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Make API call to the server
      const response = await axios.post("https://changing-shaylyn-lifelift.koyeb.app/api/web/contact/career-application", {
        name,
        email,
        phoneNumber,
        country,
        city,
        positionAppliedFor,

        message,
      });

      // Display success toast
      toast.success("Career application submitted successfully");

      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCountry("");
      setCity("");
      setPositionAppliedFor("");

      setMessage("");
    } catch (error) {
      // Display error toast
      toast.error("Failed to submit career application. Please try again later.");

      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" id="phoneNumber" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
        <input type="text" id="country" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={country} onChange={(e) => setCountry(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <input type="text" id="city" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>

      <div className="mb-4">
        <label htmlFor="positionAppliedFor" className="block text-sm font-medium text-gray-700">Position</label>
        <input type="text" id="positionAppliedFor" className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={positionAppliedFor} onChange={(e) => setPositionAppliedFor(e.target.value)} required />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" rows={4} className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </div>
      <div className="text-center">
        <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </div>
    </form>
  );
};

export default CareerContactForm;
