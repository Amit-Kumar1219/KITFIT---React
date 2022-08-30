import React, {useEffect, useState} from 'react';
import {Box,Button,Stack,TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([]);
  
  useEffect(() => {
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  
  const handleSearch = async() => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
    
    const searchedExercises = exercisesData.filter(
      (item) => item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({top:1800,left:100,behavior:'smooth'});

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  function handleKeyPress(e){
     if (e.keyCode==13) handleSearch();
   }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="centre" p="20px" >
      <Typography fontWeight={700} sx={{ 
        fontSize: { lg: '44px', xs: '30px' } 
      }} mb="49px" textAlign="center" >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box mb="72px" position='relative'>
        <TextField
           onKeyDown={handleKeyPress}
        sx={{ 
          input:{
            fontWeight: '700',
            border:'none',
            borderRadius: '4px'
          },
          width: {lg: '1100px' , xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px',
        }}
        height='76px'
        value={search}
        onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type='text'
        />
        <Button className="search-btn" sx={{
          bgcolor: '#FF2625',
          color: '#FFF',
          textTransform:'none',
          width:{lg:'175px',xs:'80px'},
          height:'56px',
          right:'0',
          position:'absolute',
          fontSize:{ lg:'20px',xs:'14px'}
        }}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{
        position: 'relative', 
        width: '100%', 
        p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} isBodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}/> 
      </Box>
    </Stack>
  )
}

export default SearchExercises