
import Info from './Info';
import Clouds from './Clouds';

function Card(props) {
    return(
        <div>
        <Info props={props}/>
        <Clouds props={props} />
        </div>
    );
}

export default Card;