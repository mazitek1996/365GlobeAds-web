import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
}

const ServiceDetailPage = () => {
  const router = useRouter();
  const { serviceId } = router.query;
  const [service, setService] = useState<Service | null>(null); // Provide type definition for service
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Provide type definition for error

  useEffect(() => {
    const fetchServiceDetails = async () => {
      setLoading(true);
      try {
        // Fetch service details based on serviceId from your API or database
        const response = await fetch(`/api/services/${serviceId}`); // Assuming there's an API endpoint for fetching service details
        if (!response.ok) {
          throw new Error("Failed to fetch service details");
        }
        const data: Service = await response.json(); // Ensure that the data matches the Service interface
        setService(data); // Update the state with the fetched service details
        setError(null); // Clear any previous error
      } catch (error) {
        console.error("Error fetching service details:", error);
        setError("Failed to fetch service details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchServiceDetails();
    }
  }, [serviceId]);

  return (
    <div>
      <h1>Service Detail Page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {service && (
        <div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          {/* Additional service details can be displayed here */}
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
