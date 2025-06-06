import React from 'react';
import teamImage from '../assets/ava_max_dark.png';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#67AAF9] to-[#1C4473]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">We are an information platform born out of frustration.</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            When your child feels "different" from other kids, it's heartbreaking. As parents, it's even harder when you try to get help—only to face a system that's overworked, underfunded, and confusing.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Many parents never get a clear, simple explanation of what's going on. Diagnoses like ADD or Autism often come with uncertainty and misconceptions. It's rarely black and white—usually, it's a mix of behaviors and patterns that lead to a diagnosis.
            </p>
            <p className="text-lg mb-4">
              And then comes the big question: Now what? Once you hear the words "ADD" or "Autism," you want to act. You want tools, guidance, and support—at home, at school, in everyday life. But the system often leaves you with more questions than answers.
            </p>
            <p className="text-lg mb-4">
              Every child is different. Symptoms vary. Coping mechanisms vary. A one-size-fits-all approach rarely works—and that's where things often fall apart.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Created Max & Oli */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C4473] mb-6">That's Why We Created Max & Oli</h2>
            <p className="text-lg mb-4">
              We're not doctors. We're not part of the system. We're just parents—frustrated by the lack of clear, helpful resources. So we built Max & Oli: a platform made for families, by families.
            </p>
            <p className="text-lg mb-4">
              Here, you'll find real-life insights, practical tools, and stories from kids who understand what it's like to live with ADD and Autism. We're here to help, not to diagnose. Just to make the journey a little less confusing—and a lot more human.
            </p>
            <div className="mt-8 flex justify-center">
              <img 
                src={teamImage} 
                alt="The team behind Max & Oli" 
                className="rounded-lg shadow-xl max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to provide accessible, engaging, and practical resources for neurodivergent children and their support networks. We believe that with the right tools and understanding, every child can thrive in their unique way.
            </p>
            <p className="text-lg mb-6">
              We are committed to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg">Creating content that respects and celebrates neurodiversity</li>
              <li className="text-lg">Providing practical tools that make everyday challenges more manageable</li>
              <li className="text-lg">Building a supportive community where families can share experiences and solutions</li>
              <li className="text-lg">Making complex information accessible without oversimplification</li>
              <li className="text-lg">Empowering children to understand and advocate for their own needs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1C4473] mb-6">Our Approach</h2>
            <p className="text-lg mb-4">
              We believe in a strengths-based approach to neurodiversity. Rather than focusing solely on challenges, we highlight the unique abilities and perspectives that come with different neurological wiring.
            </p>
            <p className="text-lg mb-4">
              Our content is designed to be:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-lg">Accessible to both children and adults</li>
              <li className="text-lg">Visually engaging and clear</li>
              <li className="text-lg">Practical for immediate implementation</li>
              <li className="text-lg">Respectful of different learning and processing styles</li>
              <li className="text-lg">Supportive without being prescriptive</li>
            </ul>
            <p className="text-lg font-medium">
              We're privately funded and passionately driven, allowing us to focus entirely on creating the most helpful resources possible without external pressures or agendas.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#1C4473]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Connect with other parents, teachers, and supporters of neurodivergent children through our resources and channels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
              Watch Our Videos
            </a>
            <a 
              href="https://maxandoli.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#67AAF9] text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
