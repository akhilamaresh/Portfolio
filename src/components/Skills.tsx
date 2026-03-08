import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Globe, Brain, Database } from 'lucide-react';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'JavaScript', 'SQL'],
      color: 'blue',
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'TypeScript'],
      color: 'green',
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML', 'CSS'],
      color: 'purple',
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Scikit-Learn', 'Pandas', 'NumPy', 'Machine Learning'],
      color: 'orange',
    },
    {
      title: 'Core CS',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'Data Structures and Algorithms',
        'Object Oriented Programming',
        'Database Management Systems',
      ],
      color: 'red',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'border-blue-600',
      hover: 'hover:border-blue-600',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-600 dark:text-green-400',
      border: 'border-green-600',
      hover: 'hover:border-green-600',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-600',
      hover: 'hover:border-purple-600',
    },
    orange: {
      bg: 'bg-orange-100 dark:bg-orange-900',
      text: 'text-orange-600 dark:text-orange-400',
      border: 'border-orange-600',
      hover: 'hover:border-orange-600',
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900',
      text: 'text-red-600 dark:text-red-400',
      border: 'border-red-600',
      hover: 'hover:border-red-600',
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border-2 border-transparent ${colors.hover} transition-all`}
                >
                  <div className={`inline-flex p-3 rounded-lg ${colors.bg} ${colors.text} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                        className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
