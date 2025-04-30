const Experience = () => {
  const experiences = [
    {
      company: "FedEx | India",
      title: "Full Stack Developer Senior II",
      period: "07/2024 - Present",
      description: [
        "Pushed clearance data to FedEx global tracking site, improving integration efficiency by 95%.",
        "Optimized FiT product performance by 2X through query optimization, database partitioning, and Java Stream API.",
        "Implemented gRPC services in Java Spring Boot."
      ]
    },
    {
      company: "Yubi (formerly CredAvenue) | India",
      title: "Senior Software Engineer",
      period: "01/2021 - 06/2024",
      description: [
        "Designed low-code frameworks reducing integration efforts by 75%, leading to 3X revenue growth.",
        "Architected micro-services using Java Spring Boot for building loanOS.",
        "Enhanced performance 4X by using Redis, Temporal, and CockroachDB.",
        "Built AWS Lambda functions in Node.js and mentored team members."
      ]
    },
    {
      company: "Foxsense Innovation | India",
      title: "Product Hacker",
      period: "05/2020 - 12/2020",
      description: [
        "Developed RESTful APIs in Node.js Express and Python Flask for NoSQL and PostgreSQL databases."
      ]
    },
    {
      company: "WeInvest | India",
      title: "Software Engineer",
      period: "05/2019 - 01/2020",
      description: [
        "Implemented Wealth Management Platform using Ruby on Rails with PostgreSQL."
      ]
    }
  ];

  return (
    <section id="experience" className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-bold text-indigo-700">{exp.title} @ {exp.company}</h3>
            <p className="text-gray-500 text-sm">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
