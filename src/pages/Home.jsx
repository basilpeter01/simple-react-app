import MovieCard from "../components/movieCard";
import { useState } from "react";


function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Terminator", release_date: 2020 },
        { id: 1, title: "Jungle Book", release_date: 2022 },
        { id: 1, title: "Avengers", release_date: 2024 },
        { id: 1, title: "Jumanji", release_date: 2026 }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("---")
    };


    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movie..." className="search-input"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home