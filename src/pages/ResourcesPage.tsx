import React, { useState } from 'react';

const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'parents', name: 'For Parents' },
    { id: 'teachers', name: 'For Teachers' },
    { id: 'children', name: 'For Children' },
    { id: 'visual', name: 'Visual Supports' },
    { id: 'sensory', name: 'Sensory Tools' }
  ];
  
  const resources = [
    {
      id: 1,
      title: 'Visual Schedules',
      description: 'Printable templates to help children understand daily routines and transitions.',
      categories: ['parents', 'teachers', 'visual'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/visual-schedules'
    },
    {
      id: 2,
      title: 'Emotion Cards',
      description: 'Illustrated cards to help children identify and express their feelings.',
      categories: ['parents', 'teachers', 'children', 'visual'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/emotion-cards'
    },
    {
      id: 3,
      title: 'Sensory Break Activities',
      description: 'Activities designed to help children regulate sensory input and maintain focus.',
      categories: ['parents', 'teachers', 'sensory'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/sensory-breaks'
    },
    {
      id: 4,
      title: 'Focus Timers',
      description: 'Visual timers that make time management concrete and understandable.',
      categories: ['parents', 'teachers', 'children', 'visual'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/focus-timers'
    },
    {
      id: 5,
      title: 'Reward Systems',
      description: 'Customizable reward charts and token systems to encourage positive behaviors.',
      categories: ['parents', 'teachers'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/reward-systems'
    },
    {
      id: 6,
      title: 'Social Stories',
      description: 'Short narratives that explain social situations and appropriate responses.',
      categories: ['parents', 'teachers', 'children'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/social-stories'
    },
    {
      id: 7,
      title: 'Executive Function Worksheets',
      description: 'Activities designed to strengthen planning, organization, and self-monitoring skills.',
      categories: ['parents', 'teachers', 'children'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/executive-function'
    },
    {
      id: 8,
      title: 'Reading Comprehension Supports',
      description: 'Tools to help children with attention challenges stay engaged with reading material.',
      categories: ['parents', 'teachers', 'children'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/reading-comprehension'
    },
    {
      id: 9,
      title: 'Math Visualization Tools',
      description: 'Resources that make abstract mathematical concepts more concrete and accessible.',
      categories: ['parents', 'teachers', 'children', 'visual'],
      imageUrl: '/placeholder-image.jpg',
      link: '/resources/math-visualization'
    }
  ];
  
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.categories.includes(activeCategory));
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#67AAF9] to-[#1C4473]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Resources</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Practical tools and materials designed to support neurodivergent children, their parents, and teachers.
          </p>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                  activeCategory === category.id 
                    ? 'bg-[#1C4473] text-white' 
                    : 'bg-white text-[#1C4473] hover:bg-gray-100'
                }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1C4473] mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.categories.map(cat => {
                      const category = categories.find(c => c.id === cat);
                      return (
                        <span key={cat} className="px-2 py-1 bg-gray-100 text-sm rounded text-[#1C4473]">
                          {category?.name}
                        </span>
                      );
                    })}
                  </div>
                  <a 
                    href={resource.link} 
                    className="inline-block bg-[#FFCD00] text-[#1C4473] px-4 py-2 rounded font-medium hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
                  >
                    View Resource
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* YouTube Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1C4473] mb-8">Video Resources</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Check out our YouTube channel for engaging videos featuring Max and Oli that explain concepts, 
            share strategies, and provide support for neurodivergent children and their families.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.youtube.com/@ADDAutismAppreciation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1C4473] text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-[#1C4473]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get New Resources Monthly</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for monthly tips, new resources, and updates to help support the neurodivergent children in your life.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-[#FFCD00] mb-2 sm:mb-0"
              aria-label="Email for newsletter"
            />
            <button 
              className="bg-[#FFCD00] text-[#1C4473] px-6 py-3 rounded-r-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCD00] sm:w-auto w-full"
            >
              Subscribe
            </button>
          </div>
          <p className="text-white text-sm mt-4">
            Or follow us on <a href="https://maxandoli.substack.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FFCD00]">Substack</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
