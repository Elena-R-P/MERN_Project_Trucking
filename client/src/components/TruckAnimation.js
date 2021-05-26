import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Img1 from '../images/truck.jpeg';
import Img3 from '../images/truck2.jpg';
import Img4 from '../images/truck3.jpg';
import GoogleMapsComp from './GoogleMapsComp';
import styles from './Unit.module.css';


const Section = styled.section`
    margin-top: 50px;    
    height: 100vh;
    display: flex;
    align-item: center;
    background: white;
    border-radius: 20px;
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem cac((100vw - 1300px)/2);
    
    @media screen and (max-width: 768px){
        grid-grid-template-columns: 1fr;
    }
`;

const Image1 = styled(motion.img)`
    position: absolute;
    max-width: 200px;
    max-heigth: 200px;
`;

const Image2 = styled(motion.img)`
    position: absolute;
    max-width: 200px;
    max-heigth: 200px;
`;
const Image3 = styled(motion.img)`
    max-width: 230px;
    max-heigth: 230px;
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #131313;
    flex-direction: column;
    justify-content: center;
    align-item: flex-start;
    padding: 5rem 2rem;

    p {
        font-size: 3rem;
    }

    ${Image1}:nth-child(1) {
        top: 250px;
        left: 40px
    }
    ${Image3}:nth-child(2) {
        top: 350px;
    }
`;
const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid #131313;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 2rem;
    position: relative;

    ${Image2}:nth-child(1) {
        top: 40px;
        left: 750px;
    }
`;


const TruckAnimation = () => {
    const fadeLeft = {
        hidden: {opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };
    
    
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <Image1 src={Img1} alt="img1"  whileTap={{ scale: 0.9 }}/>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 2 }}
                        transition={{ duration: 3 }}
                    >
                        Find Repairshop location</motion.p>
                    
                    {/* <motion.p
                    variants={fadeLeft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                    >Find Truckshop location</motion.p> */}
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ 
                            scale: 0.95, 
                            backgroundColor: '#F8421B',
                            border: 'none',
                            color: '#D8B9B3'
                    }}

                    >Get Started</Button>

                    <Image3 
                    src={Img3} 
                    alt="img3"
                    whileTap={{ scale: 1.9 }}
                    drag={true}
                    />  
                </ColumnLeft>
                <ColumnRight>
                    <Image2 
                    src={Img4} 
                    alt="img4"
                    whileTap={{ scale: 0.9 }}
                    drag={true}
                    />
                    
                    <div>
                        <GoogleMapsComp></GoogleMapsComp>
                    </div>
                    
                </ColumnRight>
                
            </Container>
        </Section>
    );
};

export default TruckAnimation;