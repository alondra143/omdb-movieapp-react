import { Card, Icon, Image } from 'semantic-ui-react'


export default function Movie(props) {
    return (
        <Card centered>
            <Image src={props.data.Poster}/>
            <Card.Content>
                <Card.Header>
                    Title: {props.data.Title}
                </Card.Header>
                <Card.Meta>
                    <span class='date'>Release Year: {props.data.Year} | {props.data.Runtime}</span>
                </Card.Meta>
                <Card.Description>
                    {props.data.Plot}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}