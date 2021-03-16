import ReactPlayer from 'react-player'
import '../styles/Result.scss';

const Result = ({data}) => {
    const {mediaType, mediaUrl, title, description, createdAt, event} = data;
    const date = new Date(createdAt);
    const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}hrs and ${date.getMinutes()}mins`

    return (
        <div className="result" >
            {
                (mediaType === 'video') &&
                <ReactPlayer
                    width="15rem"
                    height="10rem"
                    url={mediaUrl}
                    controls={true}
                    previewTabIndex={5}
                />
            }
            {(mediaType === 'image') && <img className="content" src={mediaUrl} alt={title}/>}
            <div className="result__text">
                <h4>{title}</h4>
                <p className="description">{description}</p>
                <p className="eventTitle">
                    @<span className="emphasis">{event.title}</span> in {event.city}
                </p>
                <p className="dateString">{dateString}</p>
            </div>
        </div>
    )
}

export default Result
