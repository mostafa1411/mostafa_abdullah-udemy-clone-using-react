import './SalePopup.css';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const SalePopup = () => {
    const handleClick = () => {
        document.querySelector(".sale-container").style.display = "none";
    };

    return (
        <div className="sale-container">
            <div className="text-container">
                <p>
                    Get courses from E£169.99 for a limited time
                    <span className="special-offer"> | A special offer for new students</span>
                </p>
                <p>1 day left</p>
            </div>
            <button className="close-btn" onClick={handleClick}>
                <CloseSharpIcon sx={{ fontSize: 20 }} />
            </button>
        </div>
    );
};

export default SalePopup;