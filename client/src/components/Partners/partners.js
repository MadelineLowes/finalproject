import React from 'react';
import './partners.css';
import {motion, stagger, AnimatePresence} from 'framer-motion';
import charity1 from '../../assets/charity1.png';
import charity2 from '../../assets/charity2.png';
import charity3 from '../../assets/charity3.png';
import charity4 from '../../assets/charity4.png';
import charity5 from '../../assets/charity5.png';
import charity6 from '../../assets/charity6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';




export default function Partners(props) {

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { 
                type: "spring", 
                when: 'beforeChildren', staggerChildren: 0.1,
                staggerDirection: 1,
          
            },
    
        },
        exit: {
          scale: "-100vw",
          transition: { ease: "easeInOut" },
        },
      };
    
      const cardVariants = {
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 50 },
        },
        exit: {
          x: "-100vw",
          transition: { ease: "easeInOut" },
        },
      };

      const [filter, setFilter] = useState(false);

      props.setPage("partners");

    return (
        <motion.div class="bodyContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        
        <div class = "filterDiv">
        <AnimatePresence>
        <motion.button class="filter"
        initial={{  x: 400 }}
        animate={{ x: 0 }}
        exit={{  x: 400 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {setFilter(!filter)}}
        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 2 }}
        >  &nbsp; Filter &nbsp; <FontAwesomeIcon icon={faCaretDown} />&nbsp;</motion.button>
        
        

        </AnimatePresence>
        </div>
        <div class = "filterDiv2">
        <AnimatePresence>
        {filter && <motion.div className = "dropDown"
        initial={{  y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        exit={{  y: -400,  opacity: 0 }}
        transition={{ duration: 0.1, type: "spring", stiffness: 120 }}
        
        >
            <div className = "listRow">
                <input className= "checkBox" type = "checkbox">
                </input><span className = "filCat">Environment</span>
            </div>
            <div className = "listRow">
            <input className= "checkBox" type = "checkbox"></input><span className = "filCat">Diversity, Equity, Inclusion</span>
            </div>
            <div className = "listRow">
            <input className= "checkBox" type = "checkbox"></input><span className = "filCat">LGBTQ</span>
            </div>
            <div className = "listRow">
                <input className= "checkBox" type = "checkbox"></input>
                <span className = "filCat">Homelessness</span>
            </div>
            <div className = "listRow">
                <input className= "checkBox" type = "checkbox"></input>
                <span className = "filCat">Food Security</span>
            </div>
        </motion.div>}
        </AnimatePresence>
        </div>
        
        <AnimatePresence>
        <motion.div class="partnerContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <motion.div class="pBorder"
            variants={cardVariants}
            whileHover = {{ y: -10 } }
            >
                <div class="partnerCard">
                    <img class="imgCard" src={charity1} alt="img" />
                </div>
                <div class="descriptionBox">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>
            <motion.div class="pBorder"
            variants={cardVariants}
            whileHover = {{ y: -10 } }
            >
                <div class="partnerCard">
                    <img class="imgCard" src={charity1} alt="img" />
                </div>
                <div class="descriptionBox">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        >... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>
            <motion.div class="pBorder"
            variants={cardVariants}
            whileHover = {{ y: -10 } }
            >
                <div class="partnerCard">
                    <img class="imgCard" src={charity1} alt="img" />
                </div>
                <div class="descriptionBox">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        >... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>
            <motion.div class="pBorder"
            variants={cardVariants}
            whileHover = {{ y: -10 } }
            >
                <div class="partnerCard">
                    <img class="imgCard" src={charity1} alt="img" />
                </div>
                <div class="descriptionBox">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        >... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>
            <motion.div class="pBorder"
            variants={cardVariants}
            whileHover = {{ y: -10 } }
            >
                <div class="partnerCard">
                    <img class="imgCard" src={charity1} alt="img" />
                </div>
                <div class="descriptionBox">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        >... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>
            <motion.div class="pBorder"
            variants={cardVariants}
            whileHover = {{ y: -10 } }
            >
                <div class="partnerCard">
                    <img class="imgCard" src={charity1} alt="img" />
                </div>
                <div class="descriptionBox">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        >... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            
         
        </motion.div>
        </AnimatePresence>
        </motion.div>
    )
}