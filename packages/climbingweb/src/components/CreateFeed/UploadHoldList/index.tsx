export const UploadHoldList = ({}) => {
  return (
    <div className="w-full flex flex-row gap-2 overflow-x-auto scrollbar-hide">
      <UploadImageButton media={mediaBase64} setMedia={setMediaBase64} />
      {mediaBase64?.map((image) => (
        <UploadImage
          media={mediaBase64}
          setMedia={setMediaBase64}
          key={image}
          src={image}
        />
      ))}
    </div>
  );
};
