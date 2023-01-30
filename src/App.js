import * as React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from './components/Card';

function App() {

  const styles={
    MainBox:{
      backgroundColor: 'white',
      width: '80%',
      minHeight: '70vh',
      borderRadius:"5%",
      color:'black'
  },

  MainText:{
    margin: '1em'
  },
}

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    website: '',
    img: '',
    gender: 'Female',
    html:false,
    css:false,
    js:false
  })

  const [cardData,setCardData]=React.useState([

  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    if(e.target.type==='checkbox'){
      setFormData({
        ...formData,
        [name]: !formData[name]
      })
      
    }else{
    setFormData({
      ...formData,
      [name]: value
    })
    }
  }

  const clearData=()=>{
    setFormData({
      name: '',
      email: '',
      website: '',
      img: '',
      gender: 'Female',
      html:false,
      css:false,
      js:false
    })
  }

  const submitData=()=>{
    setCardData([...cardData,<Card data={formData}/>])
    clearData()
  }

  return (
    <div className="App">
      <header className="App-header">
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={6}  >
                  <Box pt={2} mt={5} ml={5} sx={styles.MainBox}>
                      <Typography sx={styles.MainText} variant="h3" component="h1">
                        Student Enrollement Form
                      </Typography>
                    
                  
                        
                     
                       
                    
               
                      <Stack sx={{alignItems:'center'}} spacing={2}>
                        <TextField id="outlined-basic"  sx={{width:'60%'}} value={formData.name} onChange={(event)=>handleChange(event)} label="Name" name='name' variant="outlined" />
                        <TextField id="outlined-basic"  sx={{width:'60%'}}  value={formData.email} onChange={(event)=>handleChange(event)} label="Email" name='email' variant="outlined" />
                        <TextField id="outlined-basic"  sx={{width:'60%'}}  value={formData.website} onChange={(event)=>handleChange(event)}   label="Website" name='website' variant="outlined" />
                        <TextField id="outlined-basic"  sx={{width:'60%'}}  value={formData.img} onChange={(event)=>handleChange(event)}  label="Image Link" name='img' variant="outlined" />
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="Female"
                              name="radio-buttons-group"
                            >
                              <Stack direction="row">
                                <FormControlLabel name="gender" onClick={(event)=>handleChange(event)} value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel name="gender" onClick={(event)=>handleChange(event)} value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel name="gender" onClick={(event)=>handleChange(event)} value="Other" control={<Radio />} label="Other" />
                              </Stack>
                             
                            </RadioGroup>
                      </FormControl>
                      <FormGroup>
                          <FormLabel id="demo-radio-buttons-group-label">Skills</FormLabel>
                          <Stack direction="row">
                                  <FormControlLabel name='html' type="checkbox"  checked={formData.html} onClick={(event)=>handleChange(event)} control={<Checkbox  />} label="HTML" />
                                  <FormControlLabel name="css" type="checkbox"  checked={formData.css} onClick={(event)=>handleChange(event)} control={<Checkbox />} label="CSS" />
                                  <FormControlLabel name="js" type="checkbox"  checked={formData.js} onClick={(event)=>handleChange(event)} control={<Checkbox />} label="JS" />
                          </Stack>
                          
                      </FormGroup>
                        <Stack spacing={5} direction='row'>
                          <Button sx={{width:'200px'}} onClick={()=>submitData()}  variant="contained" size="large">Enroll Student</Button>
                          <Button sx={{width:'200px'}}  color="error" onClick={()=>clearData()} variant="contained" size="large">Clear</Button>

                        </Stack>
                      </Stack>
                   
                    
                      
                  </Box>
          </Grid>
          <Grid item xs={6} >
                <Stack spacing={4} mt={5} alignItems="center">
                    {cardData}

                </Stack>
          </Grid>
        </Grid>
    </Box>
      </header>
    </div>
  );
}

export default App;
