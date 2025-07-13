"use client";

import React from "react";

export default function APIDoc() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6">
        <ul className="space-y-3 text-gray-800 font-medium">
          {/* Documentation Section */}
          <li className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-1">
            Documentation
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">Prologue</li>
          <li className="pl-2 hover:text-black cursor-pointer">
            Getting Started
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">
            Architecture Concepts
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">The Basics</li>
          <li className="pl-2 hover:text-black cursor-pointer">
            Digging Deeper
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">Security</li>
          <li className="pl-2 hover:text-black cursor-pointer">Database</li>
          <li className="pl-2 hover:text-black cursor-pointer">Eloquent ORM</li>
          <li className="pl-2 hover:text-black cursor-pointer">Testing</li>
          <li className="pl-2 hover:text-black cursor-pointer">Packages</li>
          <li className="pl-2 font-bold text-black cursor-pointer">
            API Documentation
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">Changelog</li>

          {/* Divider */}
          <li className="mt-6 text-xs font-semibold uppercase text-gray-500 tracking-wider">
            Developers
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">
            API Integration
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">
            Integration Guideline
          </li>
          <li className="pl-2 hover:text-black cursor-pointer">Bug Fixing</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">Installation</h1>
        <h2 className="text-2xl font-semibold mb-4">Meet Laravel</h2>
        <p className="text-gray-700 mb-4">
          Laravel is a web application framework with expressive, elegant
          syntax. A web framework provides a structure and starting point for
          creating your application, allowing you to focus on creating something
          amazing while we sweat the details.
        </p>
        <p className="text-gray-700 mb-4">
          Laravel strives to provide an amazing developer experience while
          offering powerful features like dependency injection, a robust ORM,
          queues, scheduled jobs, and seamless testing.
        </p>
        <p className="text-gray-700">
          Whether you&apos;re new to PHP or already experienced, Laravel can grow
          with you. We&apos;re here to support your journey as a web developer and
          empower you to build outstanding applications.
        </p>
      </main>
    </div>
  );
}
