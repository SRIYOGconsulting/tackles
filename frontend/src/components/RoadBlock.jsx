import { useEffect, useState, useCallback } from "react";

const RoadBlock = () => {
  const today = new Date();
  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december"
  ];
  const month = monthNames[today.getMonth()]; // lowercase month folder
  const day = String(today.getDate()); // "1", "2", ..., "31" - must match your file names

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imgSrc, setImgSrc] = useState(`/roadblock/${month}/${day}.jpg`);

  const onClose = useCallback(() => {
    document.body.classList.remove("hideScroll");
    document.body.classList.add("showScroll");
    setShowRoadBlock(false);
  }, []);

  // Show roadblock once per session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");
    if (!hasSeen) {
      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    }
  }, []);

  // Hide scroll while roadblock is visible
  useEffect(() => {
    if (showRoadBlock) document.body.classList.add("hideScroll");
    return () => {
      document.body.style.overflow = "";
    };
  }, [showRoadBlock]);

  // Image error handler: fallback to default
  const handleImageError = (e) => {
    // If the current src is not the default, fallback
    if (!imgSrc.includes("default.jpg")) {
      setImgSrc("/roadblock/default/default.jpg");
    } else {
      // If default is missing, just close
      onClose();
    }
  };

  return (
    <>
      {showRoadBlock && (
        <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] flex items-center justify-center">
          <div className="relative">
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#055d59",
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              X
            </button>

            <img
              src={imgSrc}
              onError={handleImageError}
              alt="Roadblock"
              style={{
                width: "550px",
                height: "550px",
                objectFit: "contain",
                borderRadius: "3%",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RoadBlock;
