import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import character from '../../Assets/Images/Ayon.png'
import pattern from '../../Assets/Images/pattern.png'

const About = () => {
    return (
        <div className='mt-[76px] flex container mx-auto flex-col md:flex-row'>
            <div className="content w-full px-5 md:px-0 md:w-1/2 h-full my-auto">
                <div className="type-writer">
                    <AutoTyping
                        active // <boolean>
                        textRef="I'm Ayon Jodder." // <string>
                        writeSpeed={150} // <number>
                        deleteSpeed={150} // <number>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                    />
                    <BlinkCursor
                        active // <boolean>
                        blinkSpeed={500} // <number>
                    />
                </div>
                <p className='text-sm md:text-lg font-medium text-gray-600 mt-5'>I'm a proud student of <span className='text-lg md:text-3xl text-[#FF4321]'>'Programming Hero'</span>. My goal is to see myself as a Frontend Developer in 2022. I learnet a lot from my favorit teacher 'Jhankar Mahbub'. He motivated me to start my career as a Developer.</p>
                <blockquote className='text-xl font-bold mt-8 mb-10 md:mb-0'>Stay foolish, stay hungry and the world will be yours. <sub><small>-Jhankar Mahbub</small></sub></blockquote>
            </div>
            <div className="image w-full md:w-1/2 relative h-fit mb-0 md:mb-[-23px]">
                {/* <div className="bg w-1/2">
                </div> */}
                <img className='pattern w-[250px] md:w-[400px]' src={pattern} alt="" />
                <img className='ml-auto absolute top-0 right-0 my-img' src={character} alt="" />
            </div>
        </div>
    );
};

export default About;