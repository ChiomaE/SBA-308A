const nextSongBtn = document.getElementById('songBtn')

const getSongInfo = async () => {
    const options = {
        method: 'GET',
        url: 'https://k-pop.p.rapidapi.com/songs/random',
        headers: {
          'X-RapidAPI-Key': '310c037f76msh909e4c6bb66d6f0p1bf570jsnce3889f4a5e6',
          'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          createSongCard(response.data);//Creates song elements after fetching
          console.log('Button clicked!')
      } catch (error) {
          console.error(error);
      }

      
      
}
//Create elements -video, paragraph, h1s - using function

const createSongCard = (songData) => {
    const songInfo = document.getElementById('songInfo')//Main Div to append child to

    songInfo.innerHTML = ""
    /* let songAllInfo = document.createElement('p') */
    // const groupName = document.createElement('h1')

    const displayObject = (obj, parentElement) => {
      for (const key in obj) {
          if (Object.hasOwnProperty.call(obj, key)) {
              if (key !== 'status' && key !== 'message' && key !== 'count'&& key !== 'Post'&& key !== 'message') { // Exclude unrelated properties
                  const value = obj[key];
                  const detailElement = document.createElement('p');
                  detailElement.textContent = `${key}: `;
                  if (typeof value === 'object') {
                      const nestedElement = document.createElement('span');
                      displayObject(value, nestedElement);
                      detailElement.appendChild(nestedElement);
                  } else {
                      detailElement.textContent += value;
                  }
                  parentElement.appendChild(detailElement);
              }
          }
      }
  };

  // Create elements to display song information
  displayObject(songData, songInfo);
   
}

nextSongBtn.addEventListener("click", getSongInfo)


/* curl -X GET \
  'https://k-pop.p.rapidapi.com/songs/random' \
  -H 'X-RapidAPI-Key: 310c037f76msh909e4c6bb66d6f0p1bf570jsnce3889f4a5e6'
 */