
import { RegisterOptions } from 'react-hook-form'

interface defaultInput extends React.HTMLProps<HTMLInputElement> {
  name?: string;
  label?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  message?: string
}

export interface Input extends defaultInput {
  register?: RegisterOptions;
  formState?: any;
}
