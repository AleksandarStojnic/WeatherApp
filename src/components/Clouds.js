import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Sky from '../images/background.jpg';
import Sun from "../images/sun.jpg";
import LowFull from '../images/low-full.jpg';
import LowMedium from '../images/low-medium.jpg';
import MediumFull from '../images/medium-full.jpg';
import MediumMedium from '../images/medium-medium.jpg';
import HighFull from '../images/high-full.jpg';
import HighMedium from '../images/high-medium.jpg';

function Clouds(props) {

    let low;
    let medium;
    let high;
    let fog;
    let lowClouds=Sky;
    let mediumClouds=Sky;
    let highClouds=Sky;

    if(props.props.props){
       low = props.props.props.properties.timeseries[0].data.instant.details.cloud_area_fraction_low;
       medium = props.props.props.properties.timeseries[0].data.instant.details.cloud_area_fraction_medium;
       high = props.props.props.properties.timeseries[0].data.instant.details.cloud_area_fraction_high;
       fog = props.props.props.properties.timeseries[0].data.instant.details.fog_area_fraction;
    }

    if (low){
        if(low<20){
            lowClouds=Sky;
        }
        else if (low>20 && low<50){
            lowClouds=LowMedium;
        }
        else if (low>50){
            lowClouds=LowFull;
        }
    }

    if(medium){
        if (medium<20){
            mediumClouds=Sky;
        }
        else if (medium>20 && medium<50){
            mediumClouds=MediumMedium;
        }
        else if (medium>50){
            mediumClouds=MediumFull;
        }
    }

    if(high){
        if (high<20){
            highClouds=Sky;
        }
        else if (high>20 && high<50){
            highClouds=HighMedium;
        }
        else if (high>50){
            highClouds=HighFull;
        }
    }



    //Ovde cemo definisati logiku za oblake
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={Sun}
                        title="sun"
                        height="250px"
                    />
                    <CardContent>
                        <Typography>{fog ? fog : '0'}%</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={lowClouds}
                        title="low"
                        height="250px"
                    />
                    <CardContent>
                        <Typography>{low ? low : '0'}%</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={mediumClouds}
                        title="medium"
                        height='250px'
                    />
                    <CardContent>
                        <Typography>{medium ? medium : '0'}%</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={highClouds}
                        title="high"
                        height='250'
                    />
                    <CardContent>
                        <Typography>{high ? high : '0'}%</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
}

export default Clouds;