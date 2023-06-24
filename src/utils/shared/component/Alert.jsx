import React, { useEffect, useState } from "react";
import alertSlice from "../../../store/slice/alert";
import { useDispatch } from "react-redux";

export default function Alert({ data}) {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      dispatch(alertSlice.actions.setAlert(null));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);
  return visible ? <div className={`alert alert_${data.type}`}>{data.content}</div> : null;
}
