import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function ModalPopup() {
    return(
        <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque deserunt eligendi error, explicabo fugiat ipsum maxime molestiae, nisi odio odit possimus provident, quos ratione voluptas? Architecto quidem ullam voluptatibus.
        </>
    )
    // const [opened, setOpened] = useState(true);
    //
    // return (
    //     <>
    //         <Modal
    //             opened={opened}
    //             onClose={() => setOpened(false)}
    //             title="Introduce yourself!"
    //         >
    //             {/* Modal content */}
    //         </Modal>
    //
    //         <Group position="center">
    //             <Button onClick={() => setOpened(true)}>Open Modal</Button>
    //         </Group>
    //     </>
    // );
}

export default ModalPopup;