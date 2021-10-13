import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Sun from "../images/sun.jpg"

function Clouds() {
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
                    />
                    <CardContent>
                        <Typography>64%</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={Sun}
                        title="sun"
                    />
                    <CardContent>
                        <Typography>64%</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={Sun}
                        title="sun"
                    />
                    <CardContent>
                        <Typography>64%</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <CardMedia
                        component="img"
                        src={Sun}
                        title="sun"
                    />
                    <CardContent>
                        <Typography>64%</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
}

export default Clouds;