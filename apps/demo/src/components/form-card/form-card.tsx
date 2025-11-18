'use client';

import type { PropsWithChildren } from 'react';

type FormCardProps = {
  label: string | undefined;
};

const FormCard = ({ children, label, ...props }: PropsWithChildren<FormCardProps>) => {
  return (
    <section
      className="form-card"
      {...props}>
      {children}
    </section>
  );
};

export default FormCard;
