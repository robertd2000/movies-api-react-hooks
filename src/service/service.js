export class ServiceAPI {
    static getMovies() {
        return fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
            .then(response => response.json())
            .then(data => data.Search)
    }

    static search(id) {
        return fetch(`https://www.omdbapi.com/?s=${id}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data.Search
            })
    }

    static showAll(id, page) {
        return fetch(`https://www.omdbapi.com/?s=${id}&apikey=4a3b711b&page=${page}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data.Search
            })
    }

    static getTotalRes(id) {
        return fetch(`https://www.omdbapi.com/?s=${id}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data.totalResults
            })
    }
}