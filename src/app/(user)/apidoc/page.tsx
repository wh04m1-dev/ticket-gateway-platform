"use client";

import React from "react";

export default function APIDoc() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6">
        <ul className="space-y-4 text-gray-800 font-medium">
          <li>Prologue</li>
          <li>Getting Started</li>
          <li>Architecture Concepts</li>
          <li>The Basics</li>
          <li>Digging Deeper</li>
          <li>Security</li>
          <li>Database</li>
          <li>Eloquent ORM</li>
          <li>Testing</li>
          <li>Packages</li>
          <li className="font-bold text-black">API Documentation</li>
          <li>Changelog</li>
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
          providing powerful features such as thorough dependency injection, an
          expressive database abstraction layer, queues and scheduled jobs, unit
          and integration testing, and more.
        </p>
        <p className="text-gray-700">
          Whether you are new to PHP web frameworks or have years of experience,
          Laravel is a framework that can grow with you. We&apos;ll help you take
          your first steps as a web developer or give you a boost as you take
          your expertise to the next level. We can&apos;t wait to see what you build.
        </p>
      </main>
    </div>
  );
}
