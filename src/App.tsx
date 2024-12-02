import React from "react";
import './App.css';

type TProps = {
    pictureId: number;
    isActive: boolean;
    isAway: boolean;
    setActivePicture: React.Dispatch<React.SetStateAction<TProps['pictureId'] | null>>;
}

const Picture = React.memo<TProps>(({pictureId, isActive, isAway, setActivePicture}) => {
    const toggleImage = React.useCallback(() => {
        if (isActive) {
            setActivePicture(null);
            return;
        }

        setActivePicture(pictureId)
    }, [isActive, setActivePicture, pictureId]);

    return <div
        className={`picture pic-${pictureId} ${isActive ? 'active': ''} ${isAway ? 'away': ''}`}
        onClick={toggleImage}>
        <img className="picture__image" src={`./assets/pic-${pictureId}.jpg`} alt="" />
    </div>
})
function App() {
    const [activePicture, setActivePicture] = React.useState<TProps['pictureId'] | null>(null);

    return (
        <>
            <div className="card">
                <div className="frame">
                    <div className="gallery">
                        {[1,2,3,4,5,6,7,8,9].map((picture) => {
                            const isActive = activePicture === picture;
                            const isAway = !!activePicture && !isActive;

                            return <Picture key={picture} isActive={isActive} isAway={isAway} pictureId={picture} setActivePicture={setActivePicture}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
