import GamePageContainer from "./components/GamePageContainer";

export default async function Home() {
  const data = await getData();
  // const data = [{ id: "TsKHjFeonRE" }, { id: "6KeG_i8CWE8" }];

  return (
    <div>
      <GamePageContainer data={data} />
    </div>
  );
}

// older fetch model
// async function getData() {
//   const apiKey = process.env.YOUTUBE_API_KEY2;
//   const baseUrl = "https://www.googleapis.com/youtube/v3/";
//   // TODO: we will want to change snippetParameters to be an array of strings
//   const snippetParameters =
//     "videos?part=snippet,contentDetails&chart=mostPopular";
//   const url = `${baseUrl}${snippetParameters}&maxResults=20&regionCode=US&key=${apiKey}`;

//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const json = await res.json();
//   const items = json.items;

//   // This fetch the statistics for each video
//   const ids = items.map((item: any) => item.id).join(",");
//   const statisticsUrl = `${baseUrl}videos?part=statistics&id=${ids}&key=${apiKey}`;
//   const statsResponse = await fetch(statisticsUrl);
//   if (!statsResponse.ok) {
//     throw new Error("Failed to fetch video statistics");
//   }
//   const statsJson = await statsResponse.json();
//   const statsItems = statsJson.items;

//   // This combines the initial video data with statistics
//   const combinedData = items.map((item: any) => {
//     const stats = statsItems.find((stat: any) => stat.id === item.id);
//     return { ...item, statistics: stats.statistics };
//   });

//   return combinedData;
// }

// newer fetch model with search term
async function getData() {
  const apiKey = process.env.YOUTUBE_API_KEY2;
  const baseUrl = "https://www.googleapis.com/youtube/v3/";
  const searchTerm = encodeURIComponent("you won't believe what I found!");
  const searchUrl = `${baseUrl}search?part=snippet&q=${searchTerm}&maxResults=20&regionCode=US&type=video&key=${apiKey}`;

  const searchRes = await fetch(searchUrl);
  if (!searchRes.ok) {
    throw new Error("Failed to fetch data");
  }
  const searchJson = await searchRes.json();
  const videoIds = searchJson.items
    .map((item: any) => item.id.videoId)
    .join(",");

  const detailsUrl = `${baseUrl}videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey}`;
  const detailsRes = await fetch(detailsUrl);
  if (!detailsRes.ok) {
    throw new Error("Failed to fetch video statistics");
  }
  const detailsJson = await detailsRes.json();

  const combinedData = detailsJson.items.map((item: any) => {
    const snippet = searchJson.items.find(
      (snippetItem: any) => snippetItem.id.videoId === item.id
    ).snippet;
    return { ...item, snippet };
  });

  return combinedData;
}
