import Image from 'next/image';
import DelButton from 'climbingweb/src/assets/icon/createFeed/ic_24_del_gray800.svg';

interface HoldProps {
  src: string;
  hold: string[];
  setHold: ({}: any) => void;
}

export function UploadedHold({ src, hold, setHold }: HoldProps) {
  const handleDeleteMedia = () => {
    const deletedMedia = media.filter((m) => m !== src);
    setMedia(deletedMedia);
  };

  return (
    <>
      <div className="h-20 w-20 min-w-20 relative">
        <Image
          className="rounded-lg"
          layout="fill"
          objectFit="cover"
          src={src}
          alt="comment"
        />
        <div className="h-6 w-6 top-1 right-1 absolute">
          <Image src={DelButton} alt="delete" onClick={handleDeleteMedia} />
        </div>
      </div>
    </>
  );
}
