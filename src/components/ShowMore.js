import './ShowMore.css';
import React from "react";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ShowMore = ({ children }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <div className={showMore ? "" : "limit-container"}>{ children }</div>
            <div className="showmore-btn" onClick={() => setShowMore(!showMore)}>
            <p>{showMore ? "Show less" : "Show more"}</p>
            {
                showMore ? <KeyboardArrowUpIcon sx={{ fontSize: 16 }} /> :
                            <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
            }
            </div>
        </>
    );
}

export default ShowMore;
