import axios from "axios";
import * as cheerio from "cheerio";

const codechefFetcher = async (username) => {
  try {
    const response = await axios.get(`/api/codechef/${username}`);
    const html = response.data;
    const $ = cheerio.load(html);

    // Scraping rating
    const ratingText = $(".rating-number").text().trim();
    const ratingTextMatch = ratingText.match(/\d+/);
    const currentRating = ratingTextMatch ? ratingTextMatch[0] : "N/A";

    // Scraping contests
    const contestsText = $(".contest-participated-count").text().trim();
    const contestsTextMatch = contestsText.match(/\d+/);
    const contests = contestsTextMatch ? parseInt(contestsTextMatch[0]) : 0;

    // Scraping rank
    const rankText = $(".rating").text().trim();
    const rankTextMatch = rankText.match(/\d+/);
    const currentRank = rankTextMatch ? parseInt(rankTextMatch[0]) : 1;

    // Scraping problems solved
    const problemsSolvedText = $(".problems-solved").text().trim();
    const problemsSolvedTextMatch = problemsSolvedText.match(/Total Problems Solved:\s*(\d+)/);
    const problemsSolved = problemsSolvedTextMatch ? parseInt(problemsSolvedTextMatch[1]) : 0;

    // Scraping max rating
    const maxRatingText = $(".rating-header").text().trim();
    const maxRatingTextMatch = maxRatingText.match(/Highest Rating\s*(\d+)/);
    const maxRating = maxRatingTextMatch ? parseInt(maxRatingTextMatch[1]) : 0;

    // Scraping rating history
    const scriptData = $("script")
      .map((i, el) => $(el).html())
      .get()
      .find(str => str.includes("var all_rating"));

    let ratingHistory = [];
    if (scriptData) {
      const match = scriptData.match(/var all_rating\s*=\s*(\[\{.*?\}\]);/s);
      if (match && match[1]) {
        ratingHistory = JSON.parse(match[1]);
      }
    }
    ratingHistory = ratingHistory.map(entry => ({
      contest: entry.name,
      date: entry.end_date.split(" ")[0],
      rating: parseInt(entry.rating)
    }));

    // Scraping heatmap
    let heatmap = [];
    const scripts = $("script").toArray();
    scripts.forEach((script) => {
      const scriptContent = $(script).html();
      if (scriptContent && scriptContent.includes("userDailySubmissionsStats")) {
        const match = scriptContent.match(/userDailySubmissionsStats\s*=\s*(\[[^\]]+\])/);
        if (match && match[1]) {
          try {
            heatmap = JSON.parse(match[1]);
          } catch (e) {
            console.error("Failed to parse heatmap data", e.message);
          }
        }
      }
    });
    heatmap = heatmap.map(({ date, value }) => ({
      date,
      count: value
    }));
    const totalSubmissions = heatmap.reduce((sum, d) => sum + d.count, 0);
    const activeDays = heatmap.filter(d => d.count > 0).length;

    return {
      currentRating,
      maxRating,
      contests,
      problemsSolved,
      totalSubmissions,
      activeDays
    };
  } catch (err) {
    console.error("Error fetching CodeChef rating:", err.message);
  }
};

export default codechefFetcher;
