import { TextField } from "@mui/material";
import { selectAccountDetail } from "features/account/accountSlice";
import { useSelector } from "react-redux";

export default function ShippingAddress({
  values,
  onChange,
  onBlur,
  errors,
  touched,
}) {
  const account = useSelector(selectAccountDetail);

  return (
    <div className="address_info">
      <TextField
        value={values.fullName}
        type="text"
        sx={{ width: !account ? "32%" : "49%" }}
        id="outlined-basic"
        label="Recipient's name *"
        variant="outlined"
        name="fullName"
        onBlur={onBlur}
        onChange={onChange}
        error={touched.fullName && Boolean(errors.fullName)}
        helperText={touched.fullName && errors.fullName}
      />

      <TextField
        value={values.phone}
        type="text"
        sx={{ width: !account ? "32%" : "49%" }}
        id="outlined-basic"
        label="Phone number *"
        variant="outlined"
        name="phone"
        onBlur={onBlur}
        onChange={onChange}
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}
      />

      {!account && (
        <TextField
          value={values.email}
          type="text"
          sx={{ width: "32%" }}
          id="outlined-basic"
          label="Email *"
          variant="outlined"
          name="email"
          onBlur={onBlur}
          onChange={onChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
      )}
      <TextField
        value={values.address}
        type="text"
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Address *"
        variant="outlined"
        name="address"
        onBlur={onBlur}
        onChange={onChange}
        error={touched.address && Boolean(errors.address)}
        helperText={touched.address && errors.address}
      />
    </div>
  );
}
