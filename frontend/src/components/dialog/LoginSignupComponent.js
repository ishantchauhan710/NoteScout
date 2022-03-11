import {Box, Modal} from '@material-ui/core';
import { AppState } from '../../AppContext';
import { LoginSignupTab } from './LoginSignupTab';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '75vw',
  width: '100%',
  bgcolor: '#ffffff',
  boxShadow: 24,
};

export default function LoginSignupComponent() {

  const {openLoginModal,setOpenLoginModal} = AppState();

  const handleClose = () => setOpenLoginModal(false);

  return (
    <div>
      <Modal
        open={openLoginModal}
        onClose={handleClose}>

        <Box sx={style}>
            <LoginSignupTab />
        </Box>
        
      </Modal>
    </div>
  );
}