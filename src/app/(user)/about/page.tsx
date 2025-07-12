"use client";

export default function AboutUsSection() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-700 mb-6 sm:mb-8 md:mb-10">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 md:pr-4">
            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">
                Ticket Gateway Platform is an all-in-one event ticketing
                platform
              </span>{" "}
              designed to help businesses and organizers across Cambodia manage
              and sell event tickets efficiently, both online and offline.
            </p>

            <p className="text-base sm:text-lg text-gray-700">
              <span className="font-semibold">
                Ticket Gateway Platform provides innovative and reliable
                solutions for event management,
              </span>{" "}
              offering seamless user experience through an intuitive interface
              and cutting-edge technology. Our platform supports event
              organizers to reach wider audiences and streamline ticket sales
              and validation.
            </p>

            <p className="text-base sm:text-lg text-gray-700">
              Ticket Gateway Platform is proudly supported by industry-leading
              partners committed to delivering high-quality event services.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden w-full h-full mt-6 md:mt-0 flex justify-center items-center">
          </div>
        </div>
      </div>
    </section>
  );
}
