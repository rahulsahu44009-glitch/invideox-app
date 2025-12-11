function generate() {
  const story = document.getElementById('story').value;
  document.getElementById('output').textContent = 
    "Video generating for story: " + story;
}