
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import {useState} from 'react';

function Info(props){

 
    return(
    <Card>
        <Typography>Departure weather</Typography>
        <Typography>Dew Point {props.props.props && props.props.props.properties.timeseries[0].data.instant.details.dew_point_temperature}</Typography>
        <Typography>Humidity {props.props.props && props.props.props.properties.timeseries[0].data.instant.details.relative_humidity }</Typography>
        <Typography>Temperature {props.props.props && props.props.props.properties.timeseries[0].data.instant.details.air_temperature}</Typography>
    </Card>
    );
}

export default Info;