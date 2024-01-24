import './AnnouncementCard.css'

export default function AnnouncementCard(props: any) {

    return (
        <div className='announcement-card-content row'>
            {
                <div className='content col-md-4'>
                    <div className='announcement-header'>
                        <span>Duyuru</span>
                        <span>{props.project}</span>
                    </div>
                    <div className='announcement-name'>
                        <span>{props.announcement}</span>
                    </div>
                    <div className='announcement-footer'>
                        <span>{props.announcementDate}</span>
                        <span>Devamını Oku</span>
                    </div>
                </div>
            }
        </div>
    )
}
