import Image from "next/image";

export default function HomePage() {
return (
<main className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-3xl w-full border border-gray-200">
{/* Decorative background blobs */}
<div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40" />
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40" />


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

{/* Gallery / Images */}
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
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


{/* Footer */}
<div className="mt-10 text-center text-sm md:text-base text-gray-700">
  Contact us: <a href="tel:+97577438929" className="text-blue-600 hover:underline">+975 77 438929</a>
</div>
</div>
</main>
);
}