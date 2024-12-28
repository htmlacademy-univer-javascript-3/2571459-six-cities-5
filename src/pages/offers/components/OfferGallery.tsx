type OfferGalleryProps = {
  imageUrls: string[];
}

export function OfferGallery({imageUrls}: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imageUrls.map((url) =>
          (
            <div className="offer__image-wrapper" key={url}>
              <img className="url" src={url} alt="Photo studio"/>
            </div>
          ))}
      </div>
    </div>
  );
}
