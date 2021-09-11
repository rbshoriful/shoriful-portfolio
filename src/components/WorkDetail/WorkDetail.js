import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './WorkDetail.scss';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const WorkDetail = (props) => {
    const {image, name} = props.work;
    const classes = useStyles();

    return (
        <div className="work-detail">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        width="300"
                        height="300"
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <a target="_black" href="https://rbshoriful.github.io/rbshoriful-portfolio/">{name}</a>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default WorkDetail;