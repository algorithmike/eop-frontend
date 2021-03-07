import '../styles/Result.scss';

const Result = ({data, index}) => {
    const {mediaPreviewUrl, title} = data;
    console.log(data)
    
    return (
        <div className="result" key={index}>
            <img src={mediaPreviewUrl} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default Result
