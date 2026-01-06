import Image from "next/image";

export default function HomePage() {
return (
  <main className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-7xl w-full border border-gray-200">
      {/* Content */}
      <div className="relative">
      {/* Logo + Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={120}
          height={120}
          className="mb-4"
          priority
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 tracking-tight">3D Printer Filament</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
        Turning plastic waste into sustainable innovation
        </p>
      </div>

      {/* Introduction / Project Overview */}
      <div className="mb-10 border-l-4 border-green-600 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">Introduction</h2>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          In recent years, plastic pollution has emerged as one of the most pressing environmental issues worldwide. Millions of tons of plastic waste, particularly polyethylene terephthalate (PET) bottles, are discarded every year, contributing to land and water pollution. Traditional recycling systems often fail to manage this waste effectively due to logistical inefficiencies, high processing costs, and limited public participation. At the same time, the growing adoption of 3D printing technology across industries such as manufacturing, education, and prototyping has created an increasing demand for high-quality filament—one of the most expensive and essential materials used in 3D printers. The disconnect between abundant plastic waste and the high cost of 3D printing filament presents a unique opportunity for innovation and sustainability.
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base">
          Our project addresses this dual challenge through the development of a filament-making system that converts used plastic bottles into 3D printer filament. The proposed system aims to create a closed-loop recycling process where waste PET plastics are cut into strips, moulded, and extruded into consistent filament suitable for various 3D printing applications. The prototype consists of three main modules: a cutting unit for cutting bottles into strips, a heating and extrusion unit to mould and shape the filament, and a control system managed by Arduino for regulating temperature, extrusion speed, and filament thickness. This ensures uniformity and usability of the filament while maintaining energy efficiency and operational simplicity. We already have a working prototype, our main aim is to improve it and fulfill its future scope.
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base">
          The problem statement guiding this project is: “How can we transform discarded plastic waste into a valuable, affordable, and sustainable resource for 3D printing applications while reducing environmental impact?” This problem combines environmental sustainability with technological innovation, aiming to promote a circular economy in which waste materials are repurposed into new, functional products. By addressing this issue, the project not only contributes to reducing plastic waste but also makes 3D printing more accessible, particularly in developing regions where filament costs are prohibitive.
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base">
          The target customers for this project include educational institutions (FabLabs), makerspaces, small-scale manufacturers, and 3D printing enthusiasts who are looking for affordable filament options. Schools and colleges with 3D printing labs can benefit from using recycled filament to reduce material expenses and teach sustainability principles. Makerspaces and local startups engaged in prototyping can also use this technology to lower their production costs while minimizing their environmental footprint. Furthermore, municipalities and waste management organizations can adopt the system to promote community-based recycling programs, creating local economic value and employment opportunities from waste materials.
        </p>

        <p className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base">
          Ultimately, this project merges environmental consciousness with innovation, offering a practical solution to the global plastic crisis. By turning discarded plastic bottles into usable 3D printer filament, it demonstrates how engineering and sustainability can work together to create a cleaner, smarter, and more circular future. The system’s scalability and simplicity make it a promising initiative for communities, institutions, and industries seeking both technological and environmental advancement. It will also contribute to Bhutan’s vision of Mindfulness City where waste such as plastic bottles becomes building blocks of innovation, manufacturing, and creativity. We see the potential of becoming a scalable business.
        </p>
      </div>

      {/* Gallery / Images */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/2.jpg"
            alt="Eco Filament 2"
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/3.jpg"
            alt="Eco Filament 3"
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/1.jpg"
            alt="Eco Filament 1"
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <div className="border-l-4 border-green-600 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-lg font-bold mb-3 text-blue-700">Vision</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          To create extruder and produce high-quality 3D filament from plastic waste and support a cleaner environment.
          </p>
        </div>

        <div className="border-l-4 border-green-600 rounded-xl p-6 bg-white shadow-sm">
          <h2 className="text-lg font-bold mb-3 text-blue-700">Mission</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            To recycle PET bottles into high-quality, affordable 3D-printing filament, promoting eco-friendly manufacturing and supporting local communities.
          </p>
        </div>
      </div>
      {/* Objectives */}
      <div className="border rounded-xl p-6">
        <h2 className="text-lg font-bold mb-4 text-green-700">Objectives</h2>
        <ul className="space-y-3 text-gray-700 list-disc pl-5 text-sm md:text-base">
          <li>
            To establish a scalable and sustainable system for collecting and recycling PET bottles into premium 3D printer filament.
          </li>
          <li>
            To ensure the produced filament meets industry standards for strength, flexibility and print quality.
          </li>
          <li>
            To reduce plastic waste in landfills by providing an alternative use for PET bottles.
          </li>
          <li>
            To achieve economic viability by offering competitively priced, environmentally friendly filament to 3D printing market.  
          </li>
        </ul>
      </div>

      {/* Future Scope */}
      <div className="mb-10 border-l-4 border-blue-600 bg-white rounded-xl p-6 shadow-sm mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">Future Scope</h2>

        <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            <span className="font-semibold text-blue-600">Partnerships:</span> We have the opportunity to collaborate with NGOs, private waste management firms, and government agencies. By partnering with them, we can easily get the resources and plastic bottles, reducing the segregation process and labor requirements.
          </p>

          <p>
            <span className="font-semibold text-blue-600">Economy & Branding:</span> Promote the filament as a locally produced, environmentally friendly Bhutanese product targeted at schools, maker labs, and souvenir manufacturers, leveraging Bhutan’s strong sustainability reputation.
          </p>

          <p>
            <span className="font-semibold text-blue-600">Local Market for Affordable Filament & Education:</span> Growing Fab labs, schools, and small businesses need filament. Offering low-cost, locally made filament can tap into that demand and demonstrate circularity.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-sm md:text-base text-gray-700">
        Contact us: <a href="tel:+97577438929" className="text-blue-600 hover:underline">+975 77 438929</a>
      </div>
    </div>
  </main> 
  );
}