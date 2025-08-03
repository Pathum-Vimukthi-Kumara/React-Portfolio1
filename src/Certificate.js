// src/components/Certificate.js
import React, { useState } from 'react';

const competitions = [
  {
    title: 'CyberRush',
    description: 'Our team, TargaryenX, also successfully participated in the Cyber Rush Offensive Capture The Flag (CTF) Competition, another challenging event organized by the Department of Computer Science & Engineering, University of Moratuwa, as part of the esteemed CodeJam Event Series. The initial qualification round was a demanding cybersecurity quiz, rigorously testing both offensive and defensive cybersecurity knowledge. With our outstanding performance, we secured our place in the finals among over 100 highly skilled participants.In the final round, held at the University of Moratuwa, we faced an intensive offensive Capture The Flag challenge involving penetration testing, vulnerability exploitation, reverse engineering, cryptographic analysis, and web security assessments. Demonstrating quick problem-solving, strategic thinking, and strong cybersecurity expertise, our team effectively navigated complex scenarios under considerable pressure. Through strong teamwork and technical proficiency, team TargaryenX secured an outstanding 4th place finish, highlighting our practical skills and deep understanding of cybersecurity principles.',
    shortDescription: 'Secured 4th place out of over 100 teams.',
    date: 'May 2024',
    issuer: 'Department of Computer Science & Engineering, University of Moratuwa ',
    image: `${process.env.PUBLIC_URL}/assets/CyberRush.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/CyberRush.jpg`,
  },
  {
    title: 'CodeX',
    description: 'I participated in the CodeX , a highly competitive event organized by the Department of Computer Science & Engineering, University of Moratuwa, as part of their renowned CodeJam Event Series. Representing our team TargaryenX, we initially competed against more than 200 talented university-level programmers in a rigorous algorithmic coding challenge. Our team exceptional performance allowed us to advance into the finals, which were held at the University of Moratuwa.',
    shortDescription: 'Secured 6th place out of over 200 teams.',
    date: 'May 2025',
    issuer: 'Department of Computer Science & Engineering, University of Moratuwa ',
    image: `${process.env.PUBLIC_URL}/assets/CodeX.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/CodeX.jpg`,
  },
  {
    title: 'VoltCast 1.0',
    description: 'Second Runners-up at VoltCast 1.0 in Power & Energy Engineering.',
    shortDescription: 'Outstanding achievement in showcasing excellent ideas recognized as exemplary within the field.',
    date: 'September 2024',
    issuer: 'Power and Energy Society (PES) & IIEIS',
    image: `${process.env.PUBLIC_URL}/assets/VoltCast 1.0 Competition.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/volt.jpg`,
  },
   {
    title: 'XTREME 18.0',
    description: 'Our team, BugBustersPYL, proudly participated in one of the largest global coding competitions, demonstrating our skills in problem-solving, algorithmic challenges, and teamwork.',
    shortDescription: '40th place in the Sri Lanka section 604th globally',
    date: 'September 2024',
    issuer: 'Power and Energy Society (PES) & IIEIS',
    image: `${process.env.PUBLIC_URL}/assets/IEEEXTREME.jpg`,
    certificateImage: `${process.env.PUBLIC_URL}/assets/IEEEXTREME.jpg`,
  },
];

const Certificate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-purple-gradient pt-20 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">
            Achievements
          </h1>
          <h2 className="text-lg sm:text-xl text-purple-accent font-medium">Competitions & Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {competitions.map((item, index) => (
            <div 
              key={index}
              className="bg-purple-card rounded-2xl shadow-lg shadow-purple-secondary/20 w-full max-w-sm h-auto sm:h-96 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-secondary/30 border-2 border-transparent hover:border-purple-secondary overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-40 sm:h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4 sm:p-5 flex flex-col h-auto sm:h-48">
                <h3 className="text-base sm:text-lg font-bold text-purple-light mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-accent mb-3 flex-grow line-clamp-3">
                  {item.shortDescription}
                </p>
                <div className="flex justify-between items-center mb-3 text-xs">
                  <span className="text-purple-secondary font-medium truncate mr-2">{item.issuer}</span>
                  <span className="text-purple-accent">{item.date}</span>
                </div>
                <button 
                  className="w-full bg-purple-secondary text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 hover:bg-purple-primary touch-target"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(item);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-2 sm:p-4" onClick={closeModal}>
          <div 
            className="bg-purple-card rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-purple-secondary animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-purple-secondary/30">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-light pr-4">{selectedItem.title}</h2>
              <button 
                className="text-purple-secondary hover:text-white text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-purple-secondary/20 transition-colors duration-200 touch-target"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
            <div className="p-4 sm:p-6 md:flex md:gap-6">
              <img 
                src={selectedItem.certificateImage} 
                alt={`${selectedItem.title} Certificate`}
                className="w-full md:w-1/2 max-h-64 sm:max-h-96 object-contain rounded-xl border border-purple-secondary/40 bg-purple-background/50 mb-4 sm:mb-6 md:mb-0"
              />
              <div className="md:w-1/2 text-purple-light">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-secondary mb-3 sm:mb-4">Details</h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{selectedItem.description}</p>
                <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-purple-secondary/30">
                  <p className="text-sm sm:text-base"><strong className="text-purple-secondary">Issued By:</strong> {selectedItem.issuer}</p>
                  <p className="text-sm sm:text-base"><strong className="text-purple-secondary">Date:</strong> {selectedItem.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
