import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Folder, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'College Predictor using Machine Learning',
      subtitle: 'Supervised Learning',
      description:
        'Developed a predictive model to forecast opening and closing ranks of colleges for students using machine learning techniques. Used k-fold cross validation, Bagging Regressor, and Decision Trees. Data preprocessing and feature engineering were performed using Pandas and NumPy, and results were visualized using Matplotlib.',
      technologies: [
        'Python',
        'Scikit-Learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Machine Learning',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Allocation of Hospitals using Machine Learning',
      subtitle: 'Unsupervised Learning',
      description:
        'Designed a machine learning model to optimize hospital allocation in urban areas. Used the Elbow Method to determine optimal clusters and applied K-Means Clustering. Implemented Hill Climbing Algorithm to further refine cluster centers and improve hospital distribution efficiency.',
      technologies: [
        'Python',
        'K-Means Clustering',
        'Scikit-Learn',
        'NumPy',
        'Optimization Algorithms',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <Folder className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
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
