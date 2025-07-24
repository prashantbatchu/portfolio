import React, { useRef, useState,useEffect } from "react";
import { FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const platforms = [
  {
    name: "LeetCode",
    logo: "https://leetcode.com/static/webpack_bundles/images/LeetCode_new_logo_light.0f4d45e9c.svg",
    link: "https://leetcode.com/u/Prashant0100/",
    color: "#FFA116",
  },
  {
    name: "Codeforces",
    logo: "https://codeforces.org/s/79987/images/codeforces-sponsored-by-ton.png",
    link: "https://codeforces.com/profile/prashant81556",
    color: "#1F8ACB",
  },
  {
    name: "CodeChef",
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
    link: "https://www.codechef.com/users/bpk_spect_42",
    color: "#5B4638",
  },
  {
    name: "AtCoder",
    logo: "https://img.atcoder.jp/assets/icon/avatar.png",
    link: "https://atcoder.jp/users/BPKAtcoder42",
    color: "#00B0B8",
  },
  {
    name: "HackerRank",
    logo: "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
    link: "https://www.hackerrank.com/profile/prasanthbatchu6",
    color: "#00df9a",
  },
];









const Achievements = () => {


async function getLCData(username) {
  const statsQuery = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        userCalendar {
          submissionCalendar
        }
      }
    }
  `;

  const ratingQuery = `
    query userContestRankingInfo($username: String!) {
      userContestRanking(username: $username) {
        rating
      }
      userContestRankingHistory(username: $username) {
        rating
      }
    }
  `;

  try {
    const ratingRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: ratingQuery,
        variables: { username },
      }),
    });

    const ratingJson = await ratingRes.json();
    const currentRating = ratingJson.data.userContestRanking?.rating || 0;
    const history = ratingJson.data.userContestRankingHistory || [];
    const ratings = history.map(e => e?.rating ?? 0);
    const maxRating = ratings.length > 0 ? Math.max(...ratings) : 0;



    // Fetch submission stats and activity
    const statsRes = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: statsQuery,
        variables: { username },
      }),
    });

    const statsJson = await statsRes.json();
    const acStats = statsJson.data.matchedUser?.submitStats?.acSubmissionNum || [];
    const calendarRaw = statsJson.data.matchedUser?.userCalendar?.submissionCalendar || "{}";
    let calendarData = {};
    try {
      calendarData = JSON.parse(calendarRaw);
    } catch (e) {
      calendarData = {};
    }


    const totalSolved = acStats.find(d => d.difficulty === "All")?.count || 0;
    const totalSubmissions = acStats.find(d => d.difficulty === "All")?.submissions || 0;

    const activeDays = Object.keys(calendarData).length;

    return {
      totalSolved,
      totalSubmissions,
      currentRating,
      maxRating,
      activeDays,
    };

  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return {
      totalSolved: 0,
      totalSubmissions: 0,
      currentRating: 0,
      maxRating: 0,
      activeDays: 0,
    };
  }
}



async function getCFData() {
    try{
  const userInfoRes = await fetch('https://codeforces.com/api/user.info?handles=prashant81556');
  const userInfoData = await userInfoRes.json();
  const user = userInfoData.result[0];

  const submissionsRes = await fetch('https://codeforces.com/api/user.status?handle=prashant81556');
  const submissionsData = await submissionsRes.json();
  const submissions = submissionsData.result;

  const totalSubmissions = submissions.length;

  const solvedProblems = new Set();
  const solvedDays = new Set(); 

  submissions.forEach(sub => {
    if (sub.verdict === 'OK') {
      const problemId = `${sub.problem.contestId}-${sub.problem.index}`;
      solvedProblems.add(problemId);
    }
      
      const date = new Date((sub.creationTimeSeconds ) * 1000);
      const day = date.toISOString().split('T')[0]; 
      solvedDays.add(day);
  });

  return {
    rating: user.rating,
    maxRating: user.maxRating,
    totalSubmissions: totalSubmissions,
    totalSolved: solvedProblems.size+1,
    maxDaysStreak: solvedDays.size
  };

}  catch (error) {
    console.error("Error fetching Codeforces data:", error);
    return {
      rating: 0,
      maxRating: 0,
      totalSubmissions: 0,
      totalSolved: 0,
      maxDaysStreak: 0
    };
  }

}


  


const [stats, setStats] = useState([
  {
    platform: "LeetCode",
    currentRating: 0,
    maxRating: 0,
    submissionsThisYear: 0,
    maxDaysStreak: 0,
    totalSolved: 0,
    totalproblems: "3500+",
  },
  {
    platform: "Codeforces",
    currentRating: 0,
    maxRating: 0,
    submissionsThisYear: 0,
    maxDaysStreak: 0,
    totalSolved: 0,
    totalproblems: "7000+",
  },
  {
    platform: "AtCoder",
    currentRating: 0,
    maxRating: 0,
    submissionsThisYear: 0,
    maxDaysStreak: 0,
    totalSolved: 0,
    totalproblems: "6000+",
  },
]);

  useEffect(() => {
    async function updateStats() {
      const cfData = await getCFData();
      const lcData = await getLCData("Prashant0100");
      
      console.log('Codeforces Data:', cfData);
      console.log('LeetCode Data:', lcData); 

      setStats(prevStats => {
        const updatedStats = [...prevStats];
        updatedStats[0] = {
          ...updatedStats[0],
          currentRating: lcData.currentRating,
          maxRating: lcData.maxRating,
          submissionsThisYear: lcData.totalSubmissions,
          maxDaysStreak: lcData.activeDays,
          totalSolved: lcData.totalSolved,
        };

        updatedStats[1] = {
          ...updatedStats[1],
          currentRating: cfData.rating,
          maxRating: cfData.maxRating,
          submissionsThisYear: cfData.totalSubmissions,
          maxDaysStreak: cfData.maxDaysStreak,
          totalSolved: cfData.totalSolved,
        };

        return updatedStats;
      });
    }

    updateStats();
  }, []);












  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stats.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === stats.length - 1 ? 0 : prev + 1));
  };
  const [focusedIndex, setFocusedIndex] = useState(null);
  return (
    <section className="py-10 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex items-center gap-2">
          <FaTrophy className="text-yellow-500" /> Achievements
        </h2>

        <div className="relative">
        {/* Cards Container */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 px-2">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[300px] bg-zinc-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 p-4"
              style={{ borderTop: `4px solid ${platform.color}` }}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
              <p className="text-sm text-gray-300 mt-2">
                Visit my {platform.name} profile to see my stats.
              </p>
            </a>
          ))}
        </div>

      </div>

          <div className="h-10" />

          {/* profile section */}
          <div className="relative w-full flex justify-start md:justify-center items-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 overflow-x-auto scrollbar-hide">
  <div className="flex gap-4 sm:gap-6 md:gap-8">

        {stats.map((plt, idx) => {
          
          const stat = stats[idx] || {};
          const isFocused = focusedIndex === idx;

          return (
            <div
              key={idx}
              onClick={() => setFocusedIndex(idx === focusedIndex ? null : idx)}
              className={`transition-all duration-500 ease-in-out cursor-pointer rounded-2xl shadow-xl flex flex-col justify-center items-center p-4 ${
                isFocused ? "w-[350px] h-auto" : "w-[150px] h-[150px]"
              } bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:-translate-y-1`}
            >
              <h2 className="text-lg sm:text-xl font-bold text-white text-center">
                {plt.platform}
              </h2>

              {isFocused && (
                <div className="mt-4 w-full text-sm text-white space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-gray-400 text-xs">Current Rating</p>
                      <p className="text-blue-400">{stat.currentRating}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Max Rating</p>
                      <p className="text-green-400">{stat.maxRating}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Submissions</p>
                      <p className="text-purple-400">{stat.submissionsThisYear}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Active Days</p>
                      <p className="text-yellow-400">{stat.maxDaysStreak}</p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <p className="text-gray-400 text-xs">Total Solved</p>
                    <p className="text-white">{stat.totalSolved}</p>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{
                          width: `${Math.min(100, (stat.totalSolved / 10000) * 100)}%`,
                        }}
                      />
                    </div>
                    <p className="text-gray-400 text-xs text-right mt-1">
                      {stat.totalproblems} problems
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
      </div>
    </section>
  );
};

export default Achievements;
