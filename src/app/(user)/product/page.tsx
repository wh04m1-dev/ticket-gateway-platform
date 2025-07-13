export default function ProductSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Explore our powerful API products tailored to accelerate your
            integration process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* RESTful API */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              RESTful API
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Standardized and scalable RESTful APIs for integrating your
              systems easily and securely.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium inline-flex items-center"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* Customized API */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Customized API
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              APIs tailored to your specific business needs with flexible data
              models and workflows.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium inline-flex items-center"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* New Project */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              New Project
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Launch your own API-driven project with our consulting and rapid
              deployment tools.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium inline-flex items-center"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* Maintenance */}
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Maintenance
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Ongoing API updates, performance monitoring, and technical support
              to ensure stability.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium inline-flex items-center"
            >
              Learn more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
