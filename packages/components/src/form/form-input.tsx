import { Field, Input, type InputProps } from '@fluentui/react-components';
import type { ComponentPropsWithRef } from 'react';

type FormInputProps = {
  name?: InputProps['name'];
  autoComplete?: InputProps['autoComplete'];
  appearance?: InputProps['appearance'];
  defaultValue?: InputProps['defaultValue'];
  value?: InputProps['value'];
  type?: InputProps['type'];
  placeholder?: InputProps['placeholder'];
  required?: InputProps['required'];
  onChange?: InputProps['onChange'];
} & ComponentPropsWithRef<'div'>;

const FormInput = ({
  name,
  autoComplete,
  appearance = 'outline',
  defaultValue,
  value,
  type = 'text',
  placeholder,
  required,
  onChange,
  ...props
}: FormInputProps) => {
  return (
    <Field
    className="app-form-input"
      label={placeholder}
      {...props}>
      <Input
        name={name}
        autoComplete={autoComplete ?? name}
        appearance={appearance}
        defaultValue={defaultValue}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </Field>
  );
};

export default FormInput;
