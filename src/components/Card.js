import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Card.css'

const PointCard = () => (
    <Card className="point-card">
    <CardHeader
    title="Without Avatar"
    subtitle="Subtitle"
    />
    <CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>

);

export default PointCard;
