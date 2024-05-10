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

async function getData() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const baseUrl = "https://www.googleapis.com/youtube/v3/";
  // TODO: we will want to change snippetParameters to be an array of strings
  const snippetParameters =
    "videos?part=snippet,contentDetails&chart=mostPopular";
  const url = `${baseUrl}${snippetParameters}&maxResults=20&regionCode=US&key=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  const items = json.items;

  // This fetch the statistics for each video
  const ids = items.map((item: any) => item.id).join(",");
  const statisticsUrl = `${baseUrl}videos?part=statistics&id=${ids}&key=${apiKey}`;
  const statsResponse = await fetch(statisticsUrl);
  if (!statsResponse.ok) {
    throw new Error("Failed to fetch video statistics");
  }
  const statsJson = await statsResponse.json();
  const statsItems = statsJson.items;

  // This combines the initial video data with statistics
  const combinedData = items.map((item: any) => {
    const stats = statsItems.find((stat: any) => stat.id === item.id);
    return { ...item, statistics: stats.statistics };
  });

  return combinedData;
}
