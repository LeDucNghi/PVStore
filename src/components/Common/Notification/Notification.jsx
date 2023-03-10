import MuiAlert from "@mui/material/Alert";
import React from "react";
import { Snackbar } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Notification({ notify, setNotify }) {
  // snackbar alert ( vertical ) positions : top / bottom
  // ______________ ( horizontal )________ : center / right / left
  // alert severity                        : error / warning / info / success

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotify({ ...notify, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: `${notify.vertical}`,
        horizontal: `${notify.horizontal}`,
      }}
      open={notify.open}
      onClose={handleClose}
      autoHideDuration={notify.autoHideDuration}
    >
      <Alert
        onClose={handleClose}
        severity={notify.severity}
        sx={{
          width: "100%",
          fontSize: "1em",
        }}
      >
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
