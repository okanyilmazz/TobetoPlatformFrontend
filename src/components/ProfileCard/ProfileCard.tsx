import './ProfileCard.css'

function ProfileCard(props: any) {
    console.log(props.title);
    return (

        <div className="pf-card">
            <div className='pf-header'>
                <span>{props.title} </span>
            </div>

            <hr className='pf-line'></hr>
            {props.content}
        </div>
    );
}

export default ProfileCard;
