import '../../CSS/ShimmerUI.css'

const ShimmerUI = () => {
    return (
      <div className="shimmer-container">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="shimmer-card" key={i}>
            <div className="shimmer-thumbnail"></div>
            <div className="shimmer-details">
              <div className="shimmer-avatar"></div>
              <div className="shimmer-text-container">
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShimmerUI;
  