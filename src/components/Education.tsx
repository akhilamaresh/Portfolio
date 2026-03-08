import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'National Institute of Technology, Tadepalligudem',
      location: 'Andhra Pradesh',
      cgpa: '7.38',
      duration: 'Nov 2020 – May 2024',
    },
    {
      degree: 'Intermediate',
      institution: 'Narayana Junior College',
      location: '',
      cgpa: '8.61',
      duration: 'Year: 2020',
    },
    {
      degree: 'SSC',
      institution: 'Naveena Vidhya Nikethan High School',
      location: '',
      cgpa: '9.5',
      duration: 'Year: 2017',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Education
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative pl-8 pb-8 border-l-4 border-blue-600 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.institution}
                      </p>
                      {edu.location && (
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.location}
                        </p>
                      )}
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                          CGPA: {edu.cgpa}
                        </span>
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
