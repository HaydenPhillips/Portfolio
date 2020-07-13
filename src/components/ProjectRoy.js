import React, { Component, Fragment } from 'react';
import ReactPlayer from "react-player";
import swinging_tag from "../assets/videos/project_roy/swinging_tag.mp4";
import eva_st from "../assets/videos/project_roy/eva_st.mp4";
import wheel_1 from "../assets/videos/project_roy/sewing_motor_wheel_motion.mp4";
import wheel_2 from "../assets/videos/project_roy/overlocker_wheel_motion.mp4";
import wheel_3 from "../assets/videos/project_roy/overlocker_motor_wheel_motion.mp4";
import package_insert from "../assets/videos/project_roy/package_insert.mp4";
// import five_swingtag from "../assets/images/project_roy/swingtag_cover.jpg";
import gif1 from "../assets/images/project_roy/knolling_SS_navy.jpg";
import gif2 from "../assets/images/project_roy/knolling_SS_white.jpg";
import roy_logo from "../assets/images/project_roy/logo_tree.jpg";
import care_instructions from "../assets/images/project_roy/care_instructions.jpg";
import LSR_1 from "../assets/images/project_roy/LSR_1.jpg";
import LSR_2 from "../assets/images/project_roy/LSR_2.jpg";
import LSR_3 from "../assets/images/project_roy/LSR_3.jpg";
import LSR_4 from "../assets/images/project_roy/LSR_4.jpg";
import LSR_5 from "../assets/images/project_roy/LSR_5.jpg";
import LSR_6 from "../assets/images/project_roy/LSR_6.jpg";




class ProjectRoy extends Component {
    render() {
        return (
            <Fragment>
                <div className="row_vh100">
                    <div className="box gcs4">
                        <h1>Roy Apparel</h1>
                    </div>
                    <div className="image gcs2">
                        <img src={roy_logo} alt="roy_logo" />
                    </div>

                    <div className="box gcs6">

                    </div>
                </div>

                <div className="row_vh100">
                    <div className="box gcs2">

                    </div>

                    <div className="video_clip gcs4">
                        {/* <iframe src="https://drive.google.com/file/d/1Er6MLu7Urgyd6swxhnXK_c9j1CYL7pJc/preview" width="100%" height="480"></iframe> */}
                    </div>

                    <div className="image gcs2">
                        <img src={gif1} alt="" />
                    </div>
                    <div className="image gcs2">
                        <img src={gif2} alt="" />
                    </div>
                    <div className="image gcs2">
                        <img src={gif1} alt="" />
                    </div>
                </div>

                <div className="row_vh100">
                    <div className="video_clip gcs4">
                        <ReactPlayer
                            url={swinging_tag}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            volume={0}
                        />
                    </div>

                    <div className="image_high gcs2">
                        <img className="care" src={care_instructions} alt="care_instructions" />
                    </div>

                    <div className="image_wide gcs6">
                        {/* <img src={five_swingtag} /> */}
                        {/* <div className="wide"> */}
                    </div>
                    {/* <div className="box gcs2">

                    </div> */}
                </div>

                <div className="row_vh100">
                    <div className="box gcs2">

                    </div>
                    <div className="video_clip gcs4">
                        <ReactPlayer
                            volume={0}
                            url={eva_st}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            playbackRate={2}
                        />
                    </div>

                    {/* <div className="test"> */}
                    <div className="image_6 gcs6">
                        <img src={LSR_1} alt="shirt_1" />
                        <img src={LSR_2} alt="shirt_2" />
                        <img src={LSR_3} alt="shirt_3" />
                        <img src={LSR_4} alt="shirt_4" />
                        <img src={LSR_5} alt="shirt_5" />
                        <img src={LSR_6} alt="shirt_6" />
                    </div>
                    {/* </div> */}

                </div>
                <div className="row_vh100">
                    <div className="box gcs6"></div>
                    <div className="video_clip_small gcs2">
                        <ReactPlayer
                            url={wheel_1}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            volume={0}
                        />
                    </div>
                    <div className="box gcs4"></div>
                    <div className="box gcs4"></div>

                    <div className="video_clip_small gcs2">
                        <ReactPlayer
                            url={wheel_2}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            volume={0}
                        />
                    </div>

                    <div className="video_clip_small gcs2">
                        <ReactPlayer
                            url={wheel_3}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            volume={0}
                        />
                    </div>
                    <div className="box gcs4"></div>
                </div>

                <div className="row_vh100">
                    <div className="video_clip gcs4">
                        <ReactPlayer
                            url={package_insert}
                            playing={true}
                            loop={true}
                            width="100%"
                            height="100%"
                            volume={0}
                        />
                    </div>

                    <div className="box gcs2"></div>
                    <div className="box gcs6"></div>
                </div>

            </Fragment >
        )
    }
}

export default ProjectRoy