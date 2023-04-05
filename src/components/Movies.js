const Movies = (props) => {
    return ( 
        <div>
        <p className="p_fonts">{props.title}</p>
        <p className="p_fonts">{props.year}</p>
        <p className="p_fonts">{props.director}</p>
        <p className="p_fonts">{props.duration}</p>
        <p className="p_fonts">{props.rate}</p>
        {props.genre.map((elt) => <p className="genre_font">{elt}</p>)}
    
        </div>
    );
}

export default Movies;