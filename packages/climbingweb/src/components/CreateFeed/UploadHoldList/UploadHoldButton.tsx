import { useState } from 'react';
import Modal from 'react-modal';

export const UploadHoldButton = ({}) => {
  const maxCount = 10;
  const count = 5;
  const [open, setOpen] = useState(false);

  return (
    <button
      className="rounded-lg border border-solid h-20 w-20 min-w-20 border-[#E6E6E6] flex items-center justify-center"
      onClick={() => setOpen(true)}
    >
      <div className="items-center flex flex-col">
        <p className="text-gray-300 text-sm font-medium">홀드</p>
        <span className="text-sm">
          <span className="text-[#5953FF]">{count ? count : 0}</span> /{' '}
          {maxCount}
        </span>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <div className="modal-box">
          <button onClick={() => setOpen(false)}>x</button>
          asdf
        </div>
      </Modal>
    </button>
  );
};
