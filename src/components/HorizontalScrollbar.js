import React, { useContext } from 'react'
import {Box, Typography} from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart.js';
import ExerciseCard from './ExerciseCard.js';
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () =>{
  const {scrollPrev} = useContext(VisibilityContext);

  return (
    <Typography onClick={()=> scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='left-arrow'/>
    </Typography>
  );
};

const RightArrow = () =>{
  const {scrollNext} = useContext(VisibilityContext);

  return (
    <Typography onClick={()=> scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow'/>
    </Typography>
  );
};

const HorizontalScrollbar = ({data, isBodyParts, setBodyPart, bodyPart}) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data && data.length > 0 && data?.map((item) => (
          <Box
              key={item.id|| item}
              itemID={item.id|| item}
              title={item.id|| item}
              m = "0 40px"
              >
                { isBodyParts ? <BodyPart item={item} 
                setBodyPart={setBodyPart} bodyPart={bodyPart}/> 
                : <ExerciseCard exercise = {item} /> }
          </Box>
          ))}
  </ScrollMenu>
  );

export default HorizontalScrollbar;