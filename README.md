# TV recommender

------------

This proyect is a Reactjs frontend consumer using the [tvmaze api](https://www.tvmaze.com/api "tvmaze api"), this web application shows to users a list of series, the users can filter by genres (by default it shows 'Comedy') and search a serie by its name. It also has a route to show more details about a selected serie.

------------

[Take a look!](https://tv-recommendations.vercel.app "Take a look!")

------------

#### How it works
Fetching data from tvmaze api on route '/shows' gets an array of series, (about 240 items). Once we have fetched this data (GET), first of all we have to filter by categories like this: 
`const filteredShowsByGenre = data.filter(show => show.genres.includes(genre))`
then slice to show this data 5 by 5 `const chunk = filteredShowsByGenre.slice(from, limit)`
I have implemented this logic into a custom hook useFilteredChunks.js, 

it takes as a parameter a genre to filter the fetched data, and returns the following things:
- The chunk of filtered data by the genre we passed to it so we can render it.
- A function to get a bigger chunk of the filtered data (it recieves the limits: 5 by 5).
- All the genres so we can render it as an option that the user can select and filter the series.
- The entire data so we can compare its names to an input.value.


So this is most of the logic I am using, the next step is just let React make its magic.