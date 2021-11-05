import {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';


export default function SearchMovie(props) {
    const [movie, setMovie] = useState("");
    
    function handleInput(evt) {
        evt.preventDefault();
        setMovie(evt.target.value);
        console.log(evt.target.value, 'this is the value of search')
    }
    function handleSubmit(){
        props.getMovieTitle(movie)
        console.log(movie, 'this is movie')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input
                type="text"
                placeholder={"Search for Movie"}
                value={movie}
                onChange={handleInput}
                name="movie"
            />
                <Button>submit</Button>
        </Form>
    )
}