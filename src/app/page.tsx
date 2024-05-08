import GamePageContainer from "./components/GamePageContainer";

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <GamePageContainer data={data} />
    </div>
  );
}

async function getData() {
  const apiKey = "AIzaSyAz7mCGOctAo_UhiMxfLwLqSVGEqrle8Uc";
  const baseUrl = "https://www.googleapis.com/youtube/v3/";
  const parameters = "videos?part=snippet,contentDetails&chart=mostPopular";
  const url = `${baseUrl}${parameters}&maxResults=20&regionCode=US&key=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  return json.items;
}
