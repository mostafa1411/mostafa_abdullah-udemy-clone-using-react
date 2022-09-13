import './Content.css';
import React, { useState } from "react";
import DropDownElement from "./DropDownElement";

const Content = ({ contentData }) => {
    const [expandAll, setExpandAll] = useState(false);

    return (
        <section id="curriculum" className="course-content-section">
            <h2 className="course-section-header">Course content</h2>
            <div className="content-info">
            <p>
                {`${contentData.sections.length} sections • ${contentData.num_of_published_lectures} 
                lectures • ${contentData.estimated_content_length_text.split(":")[0]}h 
                ${contentData.estimated_content_length_text.split(":")[1]}m total length`}
            </p>
            <button className="expand-sections-btn" onClick={() => setExpandAll(!expandAll)}>
                {expandAll ? "Collapse all sections" : "Expand all sections"}
            </button>
            </div>
            <div>
            {
                contentData.sections.map((section, idx) => {
                    return <DropDownElement key={ idx } expand={ expandAll } section={ section } />;
                })
            }    
            </div>
      </section>
    );
};

export default Content;


