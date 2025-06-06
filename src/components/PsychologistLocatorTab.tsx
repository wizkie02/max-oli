import React, { useEffect } from 'react';
import PsychologistLocator from '../components/PsychologistLocator';

// This component integrates the PsychologistLocator into the Scientific Repository page
const PsychologistLocatorTab: React.FC = () => {
  useEffect(() => {
    // This would contain any initialization code needed for the locator
    // For example, loading maps API or other dependencies
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Professional Locator</h2>
      <p className="text-lg mb-6">
        Find psychologists and psychiatrists specializing in neurodevelopmental conditions within your area.
        This tool helps connect you with professionals who have expertise in Autism Spectrum Disorder (ASD) 
        and Attention Deficit Disorder (ADD/ADHD).
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold text-[#1C4473] mb-4">How to Use This Tool</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-lg">Click "Share Your Location" when prompted (or enter your location manually)</li>
          <li className="text-lg">Adjust the search radius if needed (default is 100km)</li>
          <li className="text-lg">Review the list of professionals and their specialties</li>
          <li className="text-lg">Click on a professional's website to learn more about their services</li>
        </ol>
        <p className="mt-4 text-sm text-gray-600">
          <strong>Note:</strong> This tool provides information only and does not constitute a recommendation 
          or endorsement of any professional. Always conduct your own research when selecting a healthcare provider.
        </p>
      </div>
      
      {/* Integrate the PsychologistLocator component */}
      <PsychologistLocator />
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#1C4473] mb-4">Additional Resources for Finding Support</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg">
            <a 
              href="https://www.psychologytoday.com/us/therapists" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#67AAF9] hover:underline"
            >
              Psychology Today Therapist Directory
            </a>
          </li>
          <li className="text-lg">
            <a 
              href="https://www.autismspeaks.org/tool-kit/finding-right-doctor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#67AAF9] hover:underline"
            >
              Autism Speaks: Finding the Right Doctor
            </a>
          </li>
          <li className="text-lg">
            <a 
              href="https://chadd.org/professional-directory/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#67AAF9] hover:underline"
            >
              CHADD Professional Directory (ADHD specialists)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PsychologistLocatorTab;
