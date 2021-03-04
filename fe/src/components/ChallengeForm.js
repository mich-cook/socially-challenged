import React, { useState } from "react";
import { format } from "date-fns";

export default props => {

  const [ values, setValues ] = useState();
  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const today = format(new Date(), `yyyy-MM-dd`);
  const tomorrow = (() => {
    const today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return format(tomorrow, `yyyy-MM-dd`);
  })();

  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.action({
        "variables": {
          ...values
        }
      });
      }}>
      <label>Start: <input type="date" name="start" required="required" onChange={onChange} min={today} /></label>
      <label>End: <input type="date" name="end" required="required" onChange={onChange} min={tomorrow} /></label>
      <label>Cutoff: <input type="date" name="cutoff" required="required" onChange={onChange} min={tomorrow} /></label>
      <label>Metrics: <input type="text" name="metrics" required="required" onChange={onChange} placeholder="To Be Implemented" /></label>
      <button type="submit">Create</button>
    </form>
  );

};
