export default function ServicesCard({ services }) {
  // Separate main services and add-ons
  const mainServices = services.filter(s => !s.category.endsWith("Add-ons"));
  const addOns = services.filter(s => s.category.endsWith("Add-ons"));

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#f5f1ea] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mainServices.map((service, idx) => {
          // Filter add-ons for this service category
          const serviceAddOns = addOns.filter(addOn => {
            // Match "Spa Pedicure" with "Pedicure Add-ons"
            if (service.category === "Spa Pedicure" && addOn.category === "Pedicure Add-ons") return true;
            if (service.category === "Manicure" && addOn.category === "Manicure Add-ons") return true;
            if (service.category === "Acrylic Extensions Nails" && addOn.category === "Acrylic Add-ons") return true;
            if (service.category === "Gel Builder" && addOn.category === "Gel Builder Add-ons") return true;
            if (service.category === "SNS Powder" && addOn.category === "SNS Add-ons") return true;
            if (service.category === "Gel X" && addOn.category === "Gel X Add-ons") return true;
            return false;
          });

          return (
            <div key={idx} className="bg-[#f9f5ee] border border-[#caa57a] p-6">
              {/* Main service card */}
              <h2 className="text-center text-[#8b2e2e] text-2xl font-serif font-semibold mb-4">
                {service.name}
              </h2>

              <div className="flex justify-between text-gray-700 text-sm font-medium mb-3">
                {service.duration && (
                  <p>
                    <span className="font-semibold uppercase">Duration:</span> {service.duration}
                  </p>
                )}
                <p>
                  <span className="font-semibold uppercase">Price:</span> ${service.price}
                </p>
              </div>

              {service.description && (
                <p className="text-gray-700 text-sm mb-3 italic">{service.description}</p>
              )}

              {service.features && service.features.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 text-sm mb-3 space-y-1">
                  {service.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Add-ons table for this service */}
              {serviceAddOns.length > 0 && (
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full border border-[#caa57a] text-sm">
                    <thead className="bg-[#f1e9d6]">
                      <tr>
                        <th className="border border-[#caa57a] px-4 py-2 text-left">Add-on Service</th>
                        <th className="border border-[#caa57a] px-4 py-2 text-left">Price ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceAddOns.map((addOn, idx) => (
                        <tr key={idx} className="odd:bg-white even:bg-[#f9f5ee]">
                          <td className="border border-[#caa57a] px-4 py-2">{addOn.name}</td>
                          <td className="border border-[#caa57a] px-4 py-2">{addOn.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}