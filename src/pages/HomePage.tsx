import React from "react";
import heroImage from "../assets/max.png";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#1C4473] to-[#67AAF9]">
        <div className="container mx-auto px-4 md:px-8 gap-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 h-full flex justify-center">
            <img
              src={heroImage}
              alt="Max and Oli characters"
              className="w-64 h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Welcome to our world!
            </h1>
            <p className="text-xl mb-6">
              We are Max & Oli, two kids whose brains work a little bit
              differently.
            </p>
            <p className="text-lg mb-8">
              Our mission is to help children with ADD and Autism, along with
              their parents and teachers, by providing fun, accessible resources
              and tools that make everyday life a little easier to navigate.
            </p>
            <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start">
              <a
                href="/resources"
                className="bg-[#FFCD00] text-[#1C4473] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Explore Resources
              </a>
              <a
                href="https://www.youtube.com/@ADDAutismAppreciation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1C4473] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCD00]"
              >
                Watch Videos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Max & Oli Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 flex flex-col gap-16 justify-center items-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1C4473] mb-12">
            Meet Max & Oli
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                Max(ine)
              </h3>
              <p className="mb-4">
                Max is creative, energetic, and sometimes finds it hard to
                focus. She has ADD and loves art, music, and anything that lets
                her express her boundless imagination. Max has developed many
                strategies to help channel her energy in positive ways.
              </p>
              {/* <a
                href="/about"
                className="text-[#1C4473] font-medium hover:text-[#67AAF9] transition-colors"
              >
                Learn more about Max →
              </a> */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                Oli(ver)
              </h3>
              <p className="mb-4">
                Oli is thoughtful, detail-oriented, and sometimes finds social
                situations challenging. He has Autism and loves patterns,
                numbers, and organizing information. Oli has learned many
                techniques to help navigate a world that can sometimes feel
                overwhelming.
              </p>
              {/* <a
                href="/about"
                className="text-[#1C4473] font-medium hover:text-[#67AAF9] transition-colors"
              >
                Learn more about Oli →
              </a> */}
            </div>
          </div>
        </div>
        {/* <a
          href="/about"
          className="text-[#1C4473] text-lg font-medium hover:text-[#67AAF9] transition-colors"
        >
          Learn more about us →
        </a> */}
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1C4473] mb-8">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              We are an information platform born out of frustration. When your
              child feels "different" from other kids, it's heartbreaking. As
              parents, it's even harder when you try to get help—only to face a
              system that's overworked, underfunded, and confusing.
            </p>
            <p className="text-lg mb-4">
              Many parents never get a clear, simple explanation of what's going
              on. Diagnoses like ADD or Autism often come with uncertainty and
              misconceptions. It's rarely black and white—usually, it's a mix of
              behaviors and patterns that lead to a diagnosis.
            </p>
            <p className="text-lg mb-4">
              We're not doctors. We're not part of the system. We're just
              parents—frustrated by the lack of clear, helpful resources. So we
              built Max & Oli: a platform made for families, by families.
            </p>
            <div className="mt-16 text-center">
              <a
                href="/about"
                className="bg-[#1C4473] text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
              >
                Read Our Full Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1C4473] mb-12">
            Resources We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col gap-8 justify-between">
              <div className="w-16 h-16 bg-[#67AAF9] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1C4473] mb-2">
                Educational Tools
              </h3>
              <p className="-mt-8">
                Printable worksheets, visual schedules, and learning aids
                designed specifically for neurodivergent children.
              </p>
              <a
                href="/resources"
                className="text-[#1C4473] font-medium hover:text-[#67AAF9] transition-colors"
              >
                Browse Educational Tools →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col gap-8 justify-between">
              <div className="w-16 h-16 bg-[#FFCD00] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1C4473]">
                Video Resources
              </h3>
              <p className="-mt-8">
                Engaging videos featuring Max and Oli that explain concepts,
                share strategies, and provide support.
              </p>
              <a
                href="https://www.youtube.com/@ADDAutismAppreciation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C4473] font-medium hover:text-[#67AAF9] transition-colors"
              >
                Watch Our Videos →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col gap-8 justify-between">
              <div className="w-16 h-16 bg-[#1C4473] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1C4473]">
                Scientific Resources
              </h3>
              <p className="-mt-8">
                Evidence-based information about ADD and Autism, translated into
                accessible language for parents and educators.
              </p>
              <a
                href="/scientific-repository"
                className="text-[#1C4473] font-medium hover:text-[#67AAF9] transition-colors"
              >
                Explore Scientific Resources →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
