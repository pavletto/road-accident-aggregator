import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Card.css'

export default class PointCard extends React.Component { 
    
    constructor(props) {
        super(props)
        this.state = {
              expanded: false
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    }

    render() {
        return (
    
    <Card className="point-card" expandable={false} >
    <CardHeader id="point-card_date"
    title="Without Avatar"
    subtitle="Subtitle"
    />
    <CardText id="point-card_text" >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>
)}
};

