import './Sidebar.css';
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFileOutlined";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const Sidebar = ({ course }) => {
    return (
		<aside className="course-sidebar">
			<img className="sidebar-course-img" alt="Course cover" src={course.image_480x270} />
			<div className="sidebar-content">
				<p className="price-container">
					<span className="current-price">{"E£" + course.price}</span>
					<span className="old-price">{"E£" + course.old_price}</span>
					<span className="offer">
						{`${Math.ceil(100 * (course.old_price - course.price) / course.old_price)}% off`}
					</span>
				</p>
				<p className="days-left">
					<AccessAlarmIcon sx={{ fontSize: 16, color: "##b32d0f" }} />
					<span className="one-day">1 day</span> left at this price!
				</p>
				<button className="add-to-cart-btn">Add to cart</button>
				<button className="white-btn">Buy now</button>
				<p className="guarantee">30-Day Money-Back Guarantee</p>
				<div className="includes-container">
					<h3 className="includes-title">This course includes:</h3>
					<ul className="includes-list">
						<li className="includes-item">
							<OndemandVideoIcon sx={{ fontSize: 18 }} />
							<p>{ `${course.content_info_short} on-demand video` }</p>
						</li>
						<li className="includes-item">
							<InsertDriveFileIcon sx={{ fontSize: 18 }} />
							<p>{ `${course.articles} article` }</p>
						</li>
						<li className="includes-item">
							<SystemUpdateAltIcon sx={{ fontSize: 18 }} />
							<p>{ `${course.downloadable_resources} downloadable resources` }</p>
						</li>
						<li className="includes-item">
							<AllInclusiveIcon sx={{ fontSize: 18 }} />
							<p>Full lifetime access</p>
						</li>
						<li className="includes-item">
							<StayCurrentPortraitIcon sx={{ fontSize: 18 }} />
							<p>Access on mobile and TV</p>
						</li>
						<li className="includes-item">
							<EmojiEventsOutlinedIcon sx={{ fontSize: 18 }} />
							<p>Certificate of completion</p>
						</li>
					</ul>
				</div>
				<div className="options">
					<p>Share</p>
					<p>Gift this course</p>
					<p>Apply Coupon</p>
				</div>
				<div className="training-container">
					<h3 className="training-title">Training 5 or more people?</h3>
					<p className="training-description">Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
					<button className="white-btn smaller-btn">Try Udemy Business</button>
				</div>
			</div>
		</aside>
    );
};

export default Sidebar;
