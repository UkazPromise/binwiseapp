import React from "react";
import './recycling.css';

const RecyclingCompaniesTable = () => {
  const companies = [
    {
      name: "LAWMA INTEGRATED SERVICES",
      address: "201, Ikosi road Agege Lagos State",
      email: "infomanagement@lawma.com",
      phone: "09032417870",
    },
    {
      name: "AMAZING GRACE RESOURCES",
      address: "Plot 6a, Ilupeju Industrial Estate Lagos State",
      email: "amazinggrace@gmail.com",
      phone: "08102067541",
    },
    {
      name: "INTEGRATED WASTE SOLUTIONS",
      address: "18, Adelana street Oworonshoki, Lagos State",
      email: "integratedwaste@gmail.com",
      phone: "07024252612",
    },
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <table
        className="min-w-full border-collapse border border-gray-200 text-sm md:text-base"
        aria-readonly="true"
      >
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-200 p-2 text-left whitespace-nowrap">
              Recycling Company
            </th>
            <th className="border border-gray-200 p-2 text-left whitespace-nowrap">
              Office Address
            </th>
            <th className="border border-gray-200 p-2 text-left whitespace-nowrap">
              E-mail
            </th>
            <th className="border border-gray-200 p-2 text-left whitespace-nowrap">
              Mobile Number
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="border border-gray-200 p-2 select-text">
                {company.name}
              </td>
              <td className="border border-gray-200 p-2 select-text">
                {company.address}
              </td>
              <td className="border border-gray-200 p-2 select-text">
                {company.email}
              </td>
              <td className="border border-gray-200 p-2 select-text">
                {company.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecyclingCompaniesTable;
