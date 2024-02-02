import { Link } from 'react-router-dom';
import './ProfileCard.css'

function ProfileCard(props: any) {
    return (
        <div className="pf-card">
            <div className='pf-header'>
                <span>{props.title}</span>
            </div>
            <hr className='line'></hr>
            {props.content}
        </div>
    );
}



export default ProfileCard;