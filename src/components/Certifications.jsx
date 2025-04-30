const Certifications = () => {
    const certs = [
      "SAFe Agile for Teams",
      "GetGoing - Introduction to Golang",
      "Java Masterclass - Workshop"
    ];
  
    return (
      <section id="certifications" className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Certifications</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {certs.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Certifications;
  