import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
const Social = () => {
    return (
        <div className="home__social">
            <a href="https://leetcode.com/akashghosh256/" className="home__social-icon" target="_blank">
                <SiLeetcode />
            </a>
            <a href="https://github.com/akashghosh256/" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/akashghosh256/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}


export default Social;