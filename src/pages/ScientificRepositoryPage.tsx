import React, { useState } from "react";
import PsychologistLocatorTab from "../components/PsychologistLocatorTab";

const ScientificRepositoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("understanding");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#67AAF9] to-[#1C4473]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Scientific Repository
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A carefully curated collection of evidence-based resources about
            Autism Spectrum Disorder (ASD) and Attention Deficit Disorder
            (ADD/ADHD).
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab("understanding")}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === "understanding"
                  ? "bg-[#1C4473] text-white"
                  : "bg-white text-[#1C4473] hover:bg-gray-100"
              }`}
              aria-pressed={activeTab === "understanding"}
            >
              Understanding Neurodiversity
            </button>
            <button
              onClick={() => setActiveTab("approaches")}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === "approaches"
                  ? "bg-[#1C4473] text-white"
                  : "bg-white text-[#1C4473] hover:bg-gray-100"
              }`}
              aria-pressed={activeTab === "approaches"}
            >
              Evidence-Based Approaches
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === "research"
                  ? "bg-[#1C4473] text-white"
                  : "bg-white text-[#1C4473] hover:bg-gray-100"
              }`}
              aria-pressed={activeTab === "research"}
            >
              Current Research
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === "resources"
                  ? "bg-[#1C4473] text-white"
                  : "bg-white text-[#1C4473] hover:bg-gray-100"
              }`}
              aria-pressed={activeTab === "resources"}
            >
              Resources
            </button>
            {/* <button
              onClick={() => setActiveTab('locator')}
              className={`px-4 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] ${
                activeTab === 'locator' 
                  ? 'bg-[#1C4473] text-white' 
                  : 'bg-white text-[#1C4473] hover:bg-gray-100'
              }`}
              aria-pressed={activeTab === 'locator'}
            >
              Professional Locator
            </button> */}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Understanding Neurodiversity */}
            {activeTab === "understanding" && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">
                  Understanding Neurodiversity
                </h2>
                <p className="text-lg mb-4">
                  Neurodiversity is the idea that neurological differences like
                  autism, ADHD, and learning disabilities are part of natural
                  human variation. These differences are not deficits, but
                  diverse ways of thinking, learning, and interacting. The
                  neurodiversity movement emphasizes inclusion, self-advocacy,
                  and changing environments—not individuals—to support
                  well-being and equity. Respectful language and individualized
                  approaches are key to fostering neuroinclusive spaces (Baumer
                  & Frueh, 2021).
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-[#1C4473] mb-4">
                    Key Concepts in Neurodiversity
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-lg">
                      Neurological differences are natural human variations, not
                      problems to be fixed.
                    </li>
                    <li className="text-lg">
                      Each neurotype comes with unique strengths and challenges.
                    </li>
                    <li className="text-lg">
                      Adapting environments helps individuals thrive across
                      settings.
                    </li>
                    <li className="text-lg">
                      The social model of disability focuses on removing
                      barriers, not correcting people.
                    </li>
                    <li className="text-lg">
                      Inclusive language matters—ask individuals their preferred
                      terms.
                    </li>
                    <li className="text-lg">
                      Access to diagnosis and services enhances support and
                      understanding.
                    </li>
                    <li className="text-lg">
                      Workplaces and communities benefit from embracing
                      neurodiverse talents.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Evidence-Based Approaches */}
            {activeTab === "approaches" && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">
                  Evidence-Based Approaches
                </h2>
                <p className="text-lg mb-6">
                  The following approaches have strong scientific support for
                  helping neurodivergent children develop skills and navigate
                  challenges:
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    For Autism Spectrum Disorder:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Psychosocial and Behavioural Interventions
                      </h4>
                      <p>
                        These interventions aim to improve daily life
                        functioning in areas such as academic performance,
                        school behaviour, and peer and family relationships.
                        They focus on teaching skills to children, parents, and
                        teachers, which are valuable over the child's lifetime,
                        especially since ADHD (which often co-occurs or shares
                        traits with ASD) is a chronic condition.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Pharmacological Interventions
                      </h4>
                      <p>
                        It is crucial to understand that there are currently no
                        pharmacologic treatments known to address the core ASD
                        symptoms of social deficits and restricted/repetitive
                        behaviours. However, two atypical antipsychotics,
                        risperidone and aripiprazole, are FDA-approved to reduce
                        irritability/aggressive behaviour in the context of ASD.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Novel and Emerging Treatment Avenues
                      </h4>
                      <p className="mb-2 text-red-600 font-bold">
                        This approach requires further research
                      </p>
                      <p>
                        Recent research is exploring how to address the
                        significant heterogeneity in ASD by identifying
                        biologically homogeneous subgroups or common pathways
                        amenable to pharmacotherapy. Genetic variants in autism
                        can be grouped into those affecting transcriptional
                        regulators and kinase-associated cell signalling,
                        chromatin remodelling, or synapse function.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Diagnostic Considerations and Future Research Directions
                      </h4>
                      <p>
                        For ASD, there is no single test to diagnose the
                        disorder, and symptoms are highly heterogeneous.
                        Multiple informants (parents, teachers, and youth
                        themselves) are often necessary to improve diagnostic
                        accuracy due to poor-to-moderate agreement between
                        raters. There is a need for further research to develop
                        more accurate assessment systems based on cognitive,
                        behavioural, and emotional analyses, and digital
                        cognitive and psychological intervention systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    For ADD/ADHD:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Psychosocial and Behavioural Interventions
                      </h4>
                      <p>
                        Psychosocial and behavioural interventions are
                        considered a primary evidence-based approach for ADHD. A
                        key advantage of these treatments is their focus on
                        teaching skills to children, parents, and teachers,
                        which are valuable over the child's lifetime, especially
                        given ADHD's chronic nature.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Pharmacological Interventions
                      </h4>
                      <p>
                        Medications are frequently used in ADHD management,
                        either alone or in combination with other interventions.
                        Stimulants are generally considered the most effective
                        pharmacological treatment for ADHD symptoms.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Diagnostic Precision
                      </h4>
                      <p>
                        The diagnosis of ADHD remains challenging, emphasizing
                        the need for comprehensive assessment beyond just
                        behavioural symptoms. Future research aims to develop
                        more accurate assessment systems incorporating
                        cognitive, behavioural, and emotional analyses.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Adverse Childhood Experiences (ACEs)
                      </h4>
                      <p>
                        The relationship between ACEs and ADHD is complex;
                        traumatic stress can manifest as hyperactivity or other
                        ADHD symptoms. Clinicians are encouraged to screen for
                        ACEs during ADHD evaluations to ensure accurate
                        diagnosis and appropriate interventions. Promoting
                        resilience in children with ACEs is vital to mitigate
                        their impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Research */}
            {activeTab === "research" && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">
                  Current Research Highlights
                </h2>
                <p className="text-lg mb-6">
                  This section is regularly updated with summaries of recent
                  scientific findings related to autism and ADHD, translated
                  into accessible language.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    Recent Studies on Autism:
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        The Role of Gut Microbiome in Autism Symptoms
                      </h4>
                      <p className="mb-2">
                        Emerging research suggests connections between gut
                        health and autism symptoms, with potential implications
                        for dietary interventions.
                      </p>
                      <a
                        href="https://journaljammr.com/index.php/JAMMR/article/view/5593"
                        className="text-[#67AAF9] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Advancements in Early Intervention for Children with
                        Autism
                      </h4>
                      <p className="mb-2">
                        Studies continue to demonstrate the benefits of early
                        intervention for autism, with new insights into which
                        approaches work best for different children.
                      </p>
                      <a
                        href="https://www.researchgate.net/publication/381401345_Advancements_in_Early_Intervention_for_Children_with_Autism_A_Five-Year_Review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        New Advances in the Diagnosis and Treatment of Autism
                        Spectrum Disorders
                      </h4>
                      <p className="mb-2">
                        This research examines recent advancements in the
                        diagnosis and treatment of Autism Spectrum Disorders
                        (ASD). It explores new diagnostic tools, emerging
                        therapies, and innovative approaches aimed at improving
                        care and outcomes for individuals with ASD.
                      </p>
                      <a
                        href="https://www.researchgate.net/publication/381315415_New_advances_in_the_diagnosis_and_treatment_of_autism_spectrum_disorders?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    Recent Studies on ADHD:
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Attention-Deficit/Hyperactivity Disorder (ADHD)
                      </h4>
                      <p className="mb-2">
                        A comprehensive guide covering symptoms, causes,
                        diagnosis, and treatment options for ADHD.
                      </p>
                      <a
                        href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Understanding Attention Deficit Hyperactivity Disorder
                        (ADHD) in Children
                      </h4>
                      <p className="mb-2">
                        This research explores how families understand and
                        respond to Attention Deficit Hyperactivity Disorder
                        (ADHD) in children. Through qualitative analysis, it
                        examines family experiences, coping strategies, and the
                        behavioral challenges commonly associated with childhood
                        ADHD.
                      </p>
                      <a
                        href="https://openpublichealthjournal.com/VOLUME/17/ELOCATOR/e18749445293643/PDF/?utm_source=chatgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Non-pharmacologic management of
                        attention-deficit/hyperactivity disorder in children and
                        adolescents
                      </h4>
                      <p className="mb-2">
                        This review examines non-pharmacologic approaches to
                        managing ADHD in children and adolescents. It focuses on
                        behavioral therapies, lifestyle interventions, and
                        educational strategies aimed at improving symptoms and
                        functioning without medication.
                      </p>
                      <a
                        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7082245/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Resources */}
            {activeTab === "resources" && (
              <div>
                <h2 className="text-3xl font-bold text-[#1C4473] mb-6">
                  Resources for Parents and Educators
                </h2>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    Books:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        "The Reason I Jump"
                      </h4>
                      <p className="mb-1">by Naoki Higashida</p>
                      <p>
                        A remarkable first-person account of autism from a young
                        author with autism.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        "Uniquely Human"
                      </h4>
                      <p className="mb-1">by Barry Prizant</p>
                      <p>
                        A compassionate approach to understanding autism that
                        focuses on strengths rather than deficits.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        "Smart but Scattered"
                      </h4>
                      <p className="mb-1">by Peg Dawson and Richard Guare</p>
                      <p>
                        Practical strategies for helping children develop
                        executive functioning skills.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        "Taking Charge of ADHD"
                      </h4>
                      <p className="mb-1">by Russell Barkley</p>
                      <p>
                        A comprehensive guide for parents on understanding and
                        managing ADHD.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    Websites:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Autism Science Foundation
                      </h4>
                      <p className="mb-2">
                        Evidence-based information about autism research and
                        resources.
                      </p>
                      <a
                        href="https://autismsciencefoundation.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Visit website
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        CHADD (Children and Adults with ADHD)
                      </h4>
                      <p className="mb-2">
                        Comprehensive resources and support for individuals with
                        ADHD and their families.
                      </p>
                      <a
                        href="https://chadd.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Visit website
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Autism Research Institute
                      </h4>
                      <p className="mb-2">
                        Research-based information on autism interventions and
                        support strategies.
                      </p>
                      <a
                        href="https://www.autism.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Visit website
                      </a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        ADDitude Magazine
                      </h4>
                      <p className="mb-2">
                        Strategies and support for ADHD and learning
                        differences.
                      </p>
                      <a
                        href="https://www.additudemag.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#67AAF9] hover:underline"
                      >
                        Visit website
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1C4473] mb-4">
                    Research Journals:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Journal of Autism and Developmental Disorders
                      </h4>
                      <p>
                        Peer-reviewed research on autism spectrum disorders.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Journal of Attention Disorders
                      </h4>
                      <p>Current research on ADHD and related conditions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Autism Research
                      </h4>
                      <p>
                        Scientific studies on autism from biological,
                        psychological, and clinical perspectives.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-[#1C4473] mb-2">
                        Research in Developmental Disabilities
                      </h4>
                      <p>
                        Interdisciplinary research on developmental disabilities
                        including autism and ADHD.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Locator */}
            {/* {activeTab === 'locator' && <PsychologistLocatorTab />} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScientificRepositoryPage;
