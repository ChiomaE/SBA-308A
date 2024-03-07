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
      } catch (error) {
          console.error(error);
      }
}


getSongInfo();
/* const url = 'https://k-pop.p.rapidapi.com/songs/random';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '310c037f76msh909e4c6bb66d6f0p1bf570jsnce3889f4a5e6',
		'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.json();
	console.log(result);
} catch (error) {
	console.error(error);
} */