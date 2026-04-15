import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-xl">
        {/* 404 Number */}
        <h1 className="text-7xl font-extrabold text-[#244d3f] mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Could not find the requested resource. It might have been removed or
          the URL is incorrect.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="bg-[#244d3f] text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition duration-300">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
