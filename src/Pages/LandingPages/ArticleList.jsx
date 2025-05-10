import React from 'react'

const articles = [
  {
    id: 1,
    title: "LeBron's Lakers Dynasty: The 2020 Championship Run",
    description: "Relive how LeBron brought the Larry O'Brien trophy back to Los Angeles after a decade-long drought, cementing his legacy in purple and gold.",
    date: "May 15, 2024",
    category: "Championship",
    image: "https://cdn.nba.com/manage/2020/10/lakers-champions.jpg",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "King James: Building a Billion-Dollar Empire",
    description: "From SpringHill Entertainment to Liverpool FC ownership - how LeBron became the first active billionaire NBA player.",
    date: "May 10, 2024",
    category: "Business",
    image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/b814b0d6f32036ba2ee666f8ece58ff4771c46eb338648c6bcb1e8bd478dac64.jpg",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "More Than An Athlete: LeBron's Social Impact",
    description: "How the I PROMISE School and voting rights activism are creating lasting change beyond basketball.",
    date: "May 5, 2024",
    category: "Activism",
    image: "https://s.marketwatch.com/public/resources/images/MW-HQ319_lebron_ZH_20190828142017.jpg",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "The Record Breaker: Journey to All-Time Scoring Leader",
    description: "Breaking down LeBron's historic climb past Kareem's record and what it means for his GOAT status.",
    date: "April 28, 2024",
    category: "Milestone",
    image: "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/c5r52rbifxn2srhp9no0",
    readTime: "9 min read"
  }
]

function ArticleList() {
  return articles
}

export default ArticleList