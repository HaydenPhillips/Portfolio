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
import roy_logo_white from "../assets/images/project_roy/logo_tree_white.png";
import care_instructions from "../assets/images/project_roy/care_instructions.jpg";
import LSR_1 from "../assets/images/project_roy/LSR_1.jpg";
import LSR_2 from "../assets/images/project_roy/LSR_2.jpg";
import LSR_3 from "../assets/images/project_roy/LSR_3.jpg";
import LSR_4 from "../assets/images/project_roy/LSR_4.jpg";
import LSR_5 from "../assets/images/project_roy/LSR_5.jpg";
import LSR_6 from "../assets/images/project_roy/LSR_6.jpg";
import ParallaxTest from './ParallaxTest';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'




class ProjectRoy extends Component {
    render() {

        let parallax;
        
        return (
            <Fragment>
                <div className='grid-roy'>

                    <div className='className="fullscreen_video gcs6 grs6"'>
                        <div className='wrapper'>
                            <ReactPlayer
                                className='player'
                                volume={0}
                                url={eva_st}
                                playing={true}
                                loop={true}
                                width="100%"
                                height="auto"
                                playbackRate={2}
                            />

                            <div className='overlay'>
                                <Parallax pages={2} ref={ref => parallax = ref}>
                                    <ParallaxLayer offset={1.3} speed={-0.4}>
                                        <img src={roy_logo_white} className='logo-small' />
                                    </ParallaxLayer>
                                    <ParallaxLayer offset={1.5} speed={0}>
                                        <div className='content'>
                                            <div className='title'>
                                                ROY APPAREL
                                            </div>
                                            {/* <div className='description'>
                                                Designed & Manufactured in New Zealand
                                            </div> */}
                                        </div>

                                    </ParallaxLayer>
                                    <ParallaxLayer offset={0.9} speed={3}>
                                        <span>I'm fast!</span>
                                    </ParallaxLayer>
                                    <ParallaxLayer speed={0.2} offset={1.6}>
                                        <div className='content'>
                                            <div className='description'>
                                                Designed & Manufactured in New Zealand
                                            </div>
                                        </div>
                                    </ParallaxLayer>
                                </Parallax>


                                {/* <ParallaxTest /> */}
                                {/* <div className='logo-small'> */}
                                {/* <img src={roy_logo_white} className='logo-small'/> */}
                                {/* </div> */}
                                {/* <div className='content'>


                                    <div className='title'>
                                        ROY APPAREL
                                    </div>

                                    <div className='description'>
                                        Designed & Manufactured in New Zealand
                                    </div>

                                </div> */}
                            </div>
                        </div>




                    </div>

                    <div className='gcs6'>
                        <img id='roy_logo' src={roy_logo} alt="roy_logo" />
                    </div>
                    <div className='gcs6'>
                        <h1>Roy Apparel</h1>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default ProjectRoy



{/* <div className="box gcs4">
<h1>Roy Apparel</h1>
</div>
<div className="box gcs2">
<img src={roy_logo} alt="roy_logo" />
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

</div>



<div className="box gcs2"></div>

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




<div className="image_6 gcs6">
<img src={LSR_1} alt="shirt_1" />
<img src={LSR_2} alt="shirt_2" />
<img src={LSR_3} alt="shirt_3" />
<img src={LSR_4} alt="shirt_4" />
<img src={LSR_5} alt="shirt_5" />
<img src={LSR_6} alt="shirt_6" />
</div>




<div className="video_clip gcs4">
<ReactPlayer
    url={wheel_1}
    playing={true}
    loop={true}
    width="100%"
    height="100%"
    volume={0}
/>
</div>

<div className="box gcs2"></div>




<div className="box gcs2"></div>

<div className="video_clip gcs4">
<ReactPlayer
    url={wheel_2}
    playing={true}
    loop={true}
    width="100%"
    height="100%"
    volume={0}
/>
</div>




<div className="video_clip gcs4">
<ReactPlayer
    url={wheel_3}
    playing={true}
    loop={true}
    width="100%"
    height="100%"
    volume={0}
/>
</div>
<div className="box gcs2"></div>




<div className="box gcs2"></div>

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



<div className="box gcs2"></div> */}

//<div id="placeholder" className="video_clip gcs4">
//{/* <iframe src="https://drive.google.com/file/d/1Er6MLu7Urgyd6swxhnXK_c9j1CYL7pJc/preview" width="100%" height="480"></iframe> */}
//</div>


