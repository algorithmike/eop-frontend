import { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import '../styles/Result.scss';

const Result = ({data}) => {
    const {mediaType, mediaUrl, title, description, createdAt, event} = data;
    const date = new Date(createdAt);
    const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}hrs and ${date.getMinutes()}mins`

    const [imageViewOpen, setImageViewOpen] = useState(false);

    const handleOpenImageModal = (imgUrl) => {
        console.log(imgUrl);
        setImageViewOpen(true);
    };
  
    const handleCloseImageModal = () => {
        setImageViewOpen(false);
    };

    return (
        <div className="result">
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
            {
                (mediaType === 'image') && 
                <>
                    <img className="content"
                        src={mediaUrl}
                        alt={title}
                        onClick={() => {
                            handleOpenImageModal(mediaUrl);
                        }}
                    />
                    <Modal
                        className="modal"
                        open={imageViewOpen}
                        onClose={handleCloseImageModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 800,
                        }}
                    >
                        <Fade in={imageViewOpen}>
                            <div onClick={handleCloseImageModal}>
                                <img
                                    src={mediaUrl}
                                    alt={title}
                                    size="100%"
                                />
                            </div>
                        </Fade>
                    </Modal>
                </>
            }
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
