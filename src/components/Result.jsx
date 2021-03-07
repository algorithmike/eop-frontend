import '../styles/Result.scss';

const Result = ({data}) => {
    const {mediaPreviewUrl, title, description, createdAt, event} = data;
    const date = new Date(createdAt);
    const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}hrs and ${date.getMinutes()}mins`

    
    return (
        <div className="result" >
            <img src={mediaPreviewUrl} alt={title} />
            <div className="result__text">
                <h4>{title}</h4>
                <p className="description">{description}</p>
                <p className="eventTitle">@{event.title}</p>
                <p className="dateString">{dateString}</p>
            </div>
        </div>
    )
}

export default Result
