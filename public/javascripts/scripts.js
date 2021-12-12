const API_URL = "http://localhost:3000/fake-api";

async function getCat() {
  const response = await fetch(API_URL, { method: "GET" });
  const json = await response.json();
  return json;
}

async function loadImg() {
  const cat = await getCat();

  document.getElementById("cat").src = cat.url;
}

document.getElementById("change-cat").onclick = () => {
  loadImg();
};
