import {Box, Button, Modal} from '@material-ui/core';
import AppContext, { AppState } from '../../AppContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginSignupComponent() {

  const {openLoginModal,setOpenLoginModal} = AppState();

  const handleOpen = () => setOpenLoginModal(true);
  const handleClose = () => setOpenLoginModal(false);

  return (
    <div>
      <Modal
        open={openLoginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            Text in a modal
       

        </Box>
      </Modal>
    </div>
  );
}