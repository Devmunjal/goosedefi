import React, { useState } from 'react';
import { Button, Modal } from '@pancakeswap-libs/uikit';

function Arcade() {

    const [show, setShow] = useState(false);
    const [spaceInvadors, setSpaceInvadors] = useState(false);

    return <div style={{ margin: "auto", display: "block", width: "70%", marginTop: "10%" }}>
        {!show && !spaceInvadors && <div>
            <Button onClick={() => setShow(true)} style={{ width: "100%" }}>Pacman</Button>
        </div>}
        <br />
        {!show && !spaceInvadors && <div >
            <Button onClick={() => setSpaceInvadors(true)} style={{ width: "100%" }}>Space Invadors</Button>
        </div>
        }

        {show && <Modal title="Pacman" onDismiss={() => setShow(false)}>
            <div style={{ display: "block", margin: "auto" }}>
                <iframe title="pacman" src="https://funhtml5games.com?embed=pacman" style={{ width: "342px", height: "490px", border: "none" }} />
            </div>
        </Modal>}
        {spaceInvadors && <Modal title="SpaceInvadors" onDismiss={() => setSpaceInvadors(false)}>
            <div style={{ display: "block", margin: "auto" }}>
            <iframe title="spaceinvadors" src="https://funhtml5games.com?embed=spaceinvaders" style={{width:"800px",height:"450px",border:"none"}} />
            </div>
        </Modal>}
    </div>
}

export default Arcade
