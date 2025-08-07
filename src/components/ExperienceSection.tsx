import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    duration: "Oct 2024 – May 2025",
    description: [
      "Delivered backend enhancements in Java and Scala to increase support tooling reliability and uptime",
      "Designed intelligent case routing logic to personalize support workflows",
      "Partnered with PM and CRM stakeholders to launch high-impact features, including AI-powered content summarization and semantic search to enhance user content delivery",
      "Ensured operational excellence via on-call rotations, real-time monitoring, and fast incident resolution"
    ],
    technologies: ["Java", "Scala", "CRM Integration", "Real-time Monitoring", "Incident Resolution"]
  },
  {
    title: "Software Engineering Manager",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    duration: "Aug 2022 – Oct 2024",
    description: [
      "Managed a diverse team, providing mentorship, coaching, and career guidance",
      "Owned LinkedIn's Help Center and user support surface",
      "Delivered offline webform flows, curated help content, and real-time Live Chat",
      "Launched GPT-powered virtual assistants to enhance automation and reduce case volumes",
      "Led cross-functional collaboration with product, design, data science, and CRM teams"
    ],
    technologies: ["Team Leadership", "GPT Integration", "Live Chat", "A/B Testing", "Cross-functional Collaboration"]
  },
  {
    title: "Senior Software Engineer",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    duration: "Oct 2019 – Aug 2022",
    description: [
      "Built and scaled CRM integrations (Oracle, Salesforce, Dynamics)",
      "Developed REST APIs and A/B tested backend performance",
      "Interfaced APIs with different Line of Business services to deliver a more personalized support experience",
      "Develop and executed plan to migrate externally hosted chat clients to an all-in-one in house chat solution",
      "Worked cross-functionally to reduce support friction and improve response times"
    ],
    technologies: ["Oracle", "Salesforce", "Microsoft Dynamics", "REST APIs", "A/B Testing"]
  },
  {
    title: "Software Engineer",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    duration: "Aug 2017 – Oct 2019",
    description: [
      "Developed Help Center features using Java, TypeScript, JavaScript, Ember.js, and Framptom.js",
      "Improved case creation UX and reduced latency",
      "Enhanced content discoverability to increase user engagement"
    ],
    technologies: ["Java", "TypeScript", "JavaScript", "Ember.js", "Framptom.js"]
  },
  {
    title: "Tools Engineer",
    company: "LinkedIn",
    location: "Sunnyvale, CA",
    duration: "Aug 2016 – Aug 2017",
    description: [
      "Maintained and enhanced the Oracle Service Cloud (RightNow) Customer Portal, serving millions of monthly visitors",
      "Collaborated in building and monitoring data hygiene and maintenance tools for large-scale production DBs, improving integrity and query performance",
      "Built tools for workflows that integrated CRM data with member data for bug tracking using PHP, MySQL and AngularJS",
      "Assisted in the migration of vanilla PHP code to Laravel Framework, and deployment pipelines using GitLab."
    ],
    technologies: ["Oracle Service Cloud", "CI/CD", "Database Optimization", "Multi-language Builds"]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="min-h-screen py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            8+ years at LinkedIn building scalable support-focused software solutions
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
              
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <FiBriefcase className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  
                  <h4 className="text-lg font-medium text-blue-600 mb-2">
                    {exp.company}
                  </h4>
                  
                  <div className="flex items-center text-slate-500 dark:text-slate-400 mb-2">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span className="mr-4">{exp.location}</span>
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;