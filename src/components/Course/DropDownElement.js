import './DropDownElement.css';
import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ListItem from '@mui/material/ListItem';

const DropDownElement = ({ section, expand }) => {
    const [expandLectures, setExpandLectures] = useState(expand);

    // console.log(expand);
    // console.log(expandLectures);

    const Lecture = ({ lecture }) => {
        return (
            <ListItem className="lecture">
                <ListItemIcon>
                {
                    lecture.icon_class.includes("play") ? <PlayCircleIcon className="video-icon" /> 
                                                        : <InsertDriveFileOutlinedIcon className="file-icon" />
                }
                </ListItemIcon>
                <ListItemText primary={<p className="lecture-title">{ lecture.title }</p>} />
                <ListItemText primary={<p className="lecture-length">{ lecture.content_summary }</p>} />
            </ListItem>
        )
    };

    const getTime = (seconds) => {
        let hours = Math.floor(seconds / (60 * 60));
        seconds %= (60 * 60);
        let minutes = Math.ceil(seconds / 60);
        return (hours > 0 ? hours + "hr " : "") + (minutes > 0 ? minutes + "min" : "");
    };

    return (
        <List className="sections-container" component="div">
            <ListItemButton className="section-header-btn" onClick={() => setExpandLectures(!expandLectures) }>
                {expandLectures ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
                <ListItemText primary={<h4 className="section-title">{ section.title }</h4>} />
                <ListItemText
                    primary={<p className="section-length">{`${section.lecture_count} lectures • ${getTime(section.content_length)}`}</p>}
                />
            </ListItemButton>
            <Collapse in={expandLectures} timeout="auto">
                <List className="lectures-container" component="div">
                {
                    section.items.map((lecture, idx) => (
                        <Lecture key={ idx } lecture={ lecture } />
                    ))
                }
                </List>
            </Collapse>
        </List>
    );
};

export default DropDownElement;