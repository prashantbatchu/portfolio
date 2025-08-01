const getCFdata = async (username) => {
    try{
  const userInfoRes = await fetch(`/codeforces/api/user.info?handles=${username}`);
  const userInfoData = await userInfoRes.json();
  const user = userInfoData.result[0];

  const submissionsRes = await fetch(`/codeforces/api/user.status?handle=${username}`);
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

};


export default getCFdata;