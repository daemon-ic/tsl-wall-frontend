import { useState } from "react";

export const useFormInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const clear = () => {
      setValue("");
  }

  return { value, onChange, clear };
};
