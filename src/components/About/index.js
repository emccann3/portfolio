import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faJsSquare, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';

const About = () => {
    const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={aboutArray}
                            idx={15}
                        />
                    </h1>
                    {/* Fill these sections in later */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        {/* Update icons with my skills i.e Java, Maven, AWS, Github, Jenkins, Javascript (change colours too)*/}

                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About