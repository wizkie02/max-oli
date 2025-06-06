

import React, { useState } from 'react';
import PsychologistLocatorTab from '../components/PsychologistLocatorTab';

const ScientificRepositoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('understanding');
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#67AAF9] to-[#1C4473]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Scientific Repository</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A carefully curated collection of evidence-based resources about Autism Spectrum Disorder (ASD) and Attention Deficit Disorder (ADD/ADHD).
          </p>
        </div>
      </section>
      
      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab('understanding')}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === 'understanding' 
                  ? 'bg-[#1C4473] text-white' 
                  : 'bg-white text-[#1C4473] hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === 'understanding'}
            >
              Understanding Neurodiversity
            </button>
            <button
              onClick={() => setActiveTab('approaches')}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === 'approaches' 
                  ? 'bg-[#1C4473] text-white' 
                  : 'bg-white text-[#1C4473] hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === 'approaches'}
            >
              Evidence-Based Approaches
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === 'research' 
                  ? 'bg-[#1C4473] text-white' 
                  : 'bg-white text-[#1C4473] hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === 'research'}
            >
              Current Research
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === 'resources' 
                  ? 'bg-[#1C4473] text-white' 
                  : 'bg-white text-[#1C4473] hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === 'resources'}
            >
              Resources
            </button>
            <button
              onClick={() => setActiveTab('locator')}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === 'locator' 
                  ? 'bg-[#1C4473] text-white' 
                  : 'bg-white text-[#1C4473] hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === 'locator'}
            >
              Professional Locator
            </button>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Understanding Neurodiversity */}
            {activeTab === 'understanding' && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Understanding Neurodiversity</h2>
                <p className="text-lg mb-4">
                  Neurodiversity is the concept that neurological differences like autism and ADHD are the result of normal, natural variation in the human genome. This perspective recognizes that these conditions are not "disorders" to be cured, but rather different ways of processing and experiencing the world.
                </p>
                <p className="text-lg mb-4">
                  Research has shown that neurodivergent individuals often have unique strengths and abilities that can be valuable in many contexts. By understanding and accommodating these differences, we can create environments where everyone can thrive.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-[#1C4473] mb-4">Key Concepts in Neurodiversity</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-lg">Neurological differences are natural variations, not deficits</li>
                    <li className="text-lg">Each neurotype has unique strengths and challenges</li>
                    <li className="text-lg">Environments can be adapted to support different neurotypes</li>
                    <li className="text-lg">The medical model of disability focuses on "fixing" individuals, while the social model focuses on removing barriers</li>
                    <li className="text-lg">Self-advocacy and autonomy are essential for neurodivergent individuals</li>
                  </ul>
                </div>
              </div>
            )}
            
            {/* Evidence-Based Approaches */}
            {activeTab === 'approaches' && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Evidence-Based Approaches</h2>
                <p className="text-lg mb-6">
                  The following approaches have strong scientific support for helping neurodivergent children develop skills and navigate challenges:
                </p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">For Autism Spectrum Disorder:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Applied Behavior Analysis (ABA)</h4>
                      <p>When implemented with respect for the individual's autonomy and preferences, ABA can help develop communication, social, and daily living skills.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Naturalistic Developmental Behavioral Interventions</h4>
                      <p>Combining developmental and behavioral principles in natural settings to support social communication development.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Social Skills Training</h4>
                      <p>Structured teaching of social communication and interaction skills in individual or group settings.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Sensory Integration Therapy</h4>
                      <p>Helping children process sensory information more effectively through structured sensory activities.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">For ADD/ADHD:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Behavioral Parent Training</h4>
                      <p>Teaching parents strategies to help children develop self-regulation and manage behavior effectively.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Cognitive Behavioral Therapy (CBT)</h4>
                      <p>Developing skills to manage attention, behavior, and emotions through structured therapeutic techniques.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Educational Interventions</h4>
                      <p>Classroom accommodations and teaching strategies that support attention and learning.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Physical Exercise</h4>
                      <p>Regular physical activity to improve attention, reduce hyperactivity, and support overall well-being.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Current Research */}
            {activeTab === 'research' && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Current Research Highlights</h2>
                <p className="text-lg mb-6">
                  This section is regularly updated with summaries of recent scientific findings related to autism and ADHD, translated into accessible language.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">Recent Studies on Autism:</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">The Role of Gut Microbiome in Autism Symptoms</h4>
                      <p className="mb-2">Emerging research suggests connections between gut health and autism symptoms, with potential implications for dietary interventions.</p>
                      <a href="#" className="text-[#67AAF9] hover:underline">Read more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Effectiveness of Early Intervention Approaches</h4>
                      <p className="mb-2">Studies continue to demonstrate the benefits of early intervention for autism, with new insights into which approaches work best for different children.</p>
                      <a href="#" className="text-[#67AAF9] hover:underline">Read more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Sensory Processing Differences and Accommodations</h4>
                      <p className="mb-2">New research provides insights into the neurological basis of sensory processing differences and effective accommodation strategies.</p>
                      <a href="#" className="text-[#67AAF9] hover:underline">Read more</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">Recent Studies on ADHD:</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Executive Functioning Skills Development</h4>
                      <p className="mb-2">Research on effective strategies for developing executive functioning skills in children with ADHD across different environments.</p>
                      <a href="#" className="text-[#67AAF9] hover:underline">Read more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">The Impact of Sleep Quality on ADHD Symptoms</h4>
                      <p className="mb-2">Studies examining the bidirectional relationship between sleep quality and ADHD symptom severity, with implications for intervention.</p>
                      <a href="#" className="text-[#67AAF9] hover:underline">Read more</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Non-Medication Approaches to Attention Management</h4>
                      <p className="mb-2">Emerging evidence on behavioral, technological, and environmental approaches to supporting attention in children with ADHD.</p>
                      <a href="#" className="text-[#67AAF9] hover:underline">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Resources */}
            {activeTab === 'resources' && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Resources for Parents and Educators</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">Books:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">"The Reason I Jump"</h4>
                      <p className="mb-1">by Naoki Higashida</p>
                      <p>A remarkable first-person account of autism from a young author with autism.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">"Uniquely Human"</h4>
                      <p className="mb-1">by Barry Prizant</p>
                      <p>A compassionate approach to understanding autism that focuses on strengths rather than deficits.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">"Smart but Scattered"</h4>
                      <p className="mb-1">by Peg Dawson and Richard Guare</p>
                      <p>Practical strategies for helping children develop executive functioning skills.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">"Taking Charge of ADHD"</h4>
                      <p className="mb-1">by Russell Barkley</p>
                      <p>A comprehensive guide for parents on understanding and managing ADHD.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">Websites:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Autism Science Foundation</h4>
                      <p className="mb-2">Evidence-based information about autism research and resources.</p>
                      <a href="https://autismsciencefoundation.org/" target="_blank" rel="noopener noreferrer" className="text-[#67AAF9] hover:underline">Visit website</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">CHADD (Children and Adults with ADHD)</h4>
                      <p className="mb-2">Comprehensive resources and support for individuals with ADHD and their families.</p>
                      <a href="https://chadd.org/" target="_blank" rel="noopener noreferrer" className="text-[#67AAF9] hover:underline">Visit website</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Autism Research Institute</h4>
                      <p className="mb-2">Research-based information on autism interventions and support strategies.</p>
                      <a href="https://www.autism.org/" target="_blank" rel="noopener noreferrer" className="text-[#67AAF9] hover:underline">Visit website</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">ADDitude Magazine</h4>
                      <p className="mb-2">Strategies and support for ADHD and learning differences.</p>
                      <a href="https://www.additudemag.com/" target="_blank" rel="noopener noreferrer" className="text-[#67AAF9] hover:underline">Visit website</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">Research Journals:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Journal of Autism and Developmental Disorders</h4>
                      <p>Peer-reviewed research on autism spectrum disorders.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Journal of Attention Disorders</h4>
                      <p>Current research on ADHD and related conditions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Autism Research</h4>
                      <p>Scientific studies on autism from biological, psychological, and clinical perspectives.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">Research in Developmental Disabilities</h4>
                      <p>Interdisciplinary research on developmental disabilities including autism and ADHD.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Professional Locator */}
            {activeTab === 'locator' && <PsychologistLocatorTab />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScientificRepositoryPage;
