import MovieCard from "../components/movieCard"

function Home() {
    const movies = [
        { id: 1, title: "abc", release_date: 2020 },
        { id: 1, title: "xyz", release_date: 2022 },
        { id: 1, title: "hello", release_date: 2024 },
        { id: 1, title: "hi", release_date: 2026 }
    ]

    return <div className="home">
        <div className="movie-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home