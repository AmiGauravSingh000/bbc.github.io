const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");

const updateDetails = (url, title) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
};

const fetchMeme = async () => {
  try {
    const response = await fetch("https://meme-api.com/gimme/wholesomememes");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch meme.");
  }
};

const generateMeme = async () => {
  try {
    generateMemeBtn.disabled = true;
    generateMemeBtn.innerText = "Loading...";
    const data = await fetchMeme();
    updateDetails(data.url, data.title);
  } catch (error) {
    console.error(error);
  } finally {
    generateMemeBtn.disabled = false;
    generateMemeBtn.innerText = "Generate Meme";
  }
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme(); // Initial meme generation
