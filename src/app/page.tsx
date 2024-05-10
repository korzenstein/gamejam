import GamePageContainer from "./components/GamePageContainer";

export default async function Home() {
  // const data = await getData();
  const data = [{ id: "TsKHjFeonRE" }, { id: "6KeG_i8CWE8" }];

  return (
    <div>
      <GamePageContainer data={data} />
    </div>
  );
}

// async function getData() {
//   const apiKey = process.env.YOUTUBE_API_KEY;
//   const baseUrl = "https://www.googleapis.com/youtube/v3/";
//   const parameters = "videos?part=snippet,contentDetails&chart=mostPopular";
//   const statisticsParameters = "videos?part=statistics&id=";
//   const url = `${baseUrl}${parameters}&maxResults=20&regionCode=US&key=${apiKey}`;

//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const json = await res.json();
//   return json.items;
// }
