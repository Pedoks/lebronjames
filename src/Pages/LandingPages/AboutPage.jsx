import React from 'react'

const lakersAchievements = [
  {
    title: "2020 NBA Championship",
    description: "Led Lakers to championship in the bubble, winning Finals MVP",
    year: "2020"
  },
  {
    title: "All-Time Scoring Leader",
    description: "Broke Kareem's record as a Laker in 2023",
    year: "2023"
  },
  {
    title: "Lakers All-Star",
    description: "6x All-Star with Lakers (2019-2024)",
    year: "2019-2024"
  },
  {
    title: "Lakers Stats Leader",
    description: "Averages: 27.4 pts, 8.1 reb, 8.0 ast with Lakers",
    year: "2018-Present"
  },
  {
    title: "40,000 Points",
    description: "First player ever to reach 40,000 points",
    year: "2024"
  },
  {
    title: "Franchise Records",
    description: "Set multiple Lakers franchise records",
    year: "2018-Present"
  }
]

function AboutPage() {
  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">LeBron James</h1>
        <h2 className="text-xl text-yellow-600">Lakers Legacy (2018-Present)</h2>
        <p className="mt-4 text-gray-700">
          The King's journey with the Los Angeles Lakers
        </p>
      </header>

      {/* Achievements List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-purple-900 mb-6 border-b-2 border-yellow-500 pb-2">
          Key Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lakersAchievements.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md border-l-4 border-yellow-500">
              <div className="font-bold text-purple-900">{item.title}</div>
              <div className="text-sm text-gray-500 mb-1">{item.year}</div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-bold text-purple-900 mb-6 border-b-2 border-yellow-500 pb-2">
          Lakers Timeline
        </h2>
        
        <div className="space-y-4">
          {[
            "2018 - Signed with Lakers",
            "2019 - First All-Star as a Laker",
            "2020 - Won NBA Championship",
            "2021 - 10K+ pts/reb/ast club",
            "2023 - All-time scoring leader",
            "2024 - First to 40,000 points"
          ].map((event, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                {index + 1}
              </div>
              <div className="text-gray-800">{event}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default AboutPage