'use client';

import { Dialog, DialogContent } from '@fluentui/react-components';
import { useState } from 'react';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(_, { open }) => setIsOpen(open)}>
      <DialogContent>Command Palette Content</DialogContent>
    </Dialog>
  );
};

export default CommandPalette;
