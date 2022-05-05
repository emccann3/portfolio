import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faGitAlt, faJsSquare, faReact, faAws, faJenkins } from '@fortawesome/free-brands-svg-icons'
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
                        25 year old Senior Software Engineer currently employed at Bazaarvoice Belfast. I'm Tech Lead of a team that supports and maintains client facing self-service applications that provide the ability to configure the display and submission of their reviews.
                    </p>
                    <p>
                        My experience includes working with multiple Java Spring applications with Maven and Scala applications hosted on AWS infrastructure and built and deployed using the CI/CD software Jenkins. I'm also a member of the Leadership Community of Practive committee where we organise monthly Leadership talks and activities and I host the quarterly Leadership bookclub.
                    </p>
                    <p>
                        In my free time I like to unwind with some reading and Netflix. Most recently I've began learning to crochet and hope to have my first blanket finished soon!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        {/* Update icons with my skills i.e Maven, (change colours too)*/}

                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faAws} />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJenkins} />
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