import '../styles/Result.scss';

const Result = ({index, mediaPreviewUrl, title}) => {
    return (
        <div className="result" key={index}>
            <img src={mediaPreviewUrl} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default Result
