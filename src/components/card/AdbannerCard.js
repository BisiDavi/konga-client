import React, { useState } from "react";

const AdBannerCard = () => {
  const [displayBanner, setDisplayBanner] = useState(true);

  const handleBannerDisplay = () => setDisplayBanner(false);

  return (
    <div className="adbanner">
      <LazyLoadImage publicId="" />
    </div>
  );
};

export default AdBannerCard;
