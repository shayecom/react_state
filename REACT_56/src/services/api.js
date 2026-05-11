const getSongByArtist = async (artist) => {
    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${artist}`)
        debugger
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

export default getSongByArtist;
