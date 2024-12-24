import React, { useState } from 'react';

const chapters = [
  { id: 1, title: 'Introduction to React', status: 'Completed' },
  { id: 2, title: 'State and Props', status: 'In Progress' },
  { id: 3, title: 'Lifecycle Methods', status: 'Pending' },
];

const Chapter = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleViewChapter = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleBackToList = () => {
    setSelectedChapter(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-sm">
      {selectedChapter ? (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedChapter.title}</h2>
          <p className="text-gray-600 mb-6">Detailed content or description about the chapter goes here.</p>
          <button
            onClick={handleBackToList}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Back to Chapters
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chapters</h2>
          <ul className="space-y-4">
            {chapters.map((chapter) => (
              <li
                key={chapter.id}
                className="p-4 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-700">{chapter.title}</h3>
                <p className="text-gray-500">Status: {chapter.status}</p>
                <button
                  onClick={() => handleViewChapter(chapter)}
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  View Chapter
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Chapter;
