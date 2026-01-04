import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
} from '@fluentui/react-components';
import { useState, type FC } from 'react';

type ImageUploadProps = {
  open: boolean;
  onClose?: () => void;
};

const ImageUpload: FC<ImageUploadProps> = ({ open, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenChange = (_: any, data: { open: boolean }) => {
    setIsOpen(data.open);
    if (!data.open) {
      onClose?.();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleOpenChange}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Upload Image</DialogTitle>
          <DialogContent>{/* Image upload form or component goes here */}</DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default ImageUpload;
