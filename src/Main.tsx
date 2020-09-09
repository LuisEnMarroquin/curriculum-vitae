import React, { useState } from 'react';
import en from './i18n/en';
import es from './i18n/es';
import 'Main.scss';

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import TodayIcon from '@material-ui/icons/Today';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

function Main() {
  const [lang, setLang] = useState(en);
  const [language, setLanguage] = useState(1);

  const changeLanguage = (id:number) => {
    setLanguage(id)
    if (id === 1) setLang(en)
    if (id === 2) setLang(es)
  }

  return (
    <Container style={{ paddingTop: '24px' }}>
      <div className="mainSquare">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <div className="profileImage">
              <img src={require('./assets/profile.jpg')} alt="profile"/>
            </div>
            <div className="profileInfo">
              <div>
                <Tooltip title="Oct 16, 1999" placement='right'>
                  <Button color="primary" startIcon={<TodayIcon/>}>20 {lang.years}</Button>
                </Tooltip>
              </div>
              <div>
                <a href="https://wa.me/528186901451" target="_blank" rel="noopener noreferrer">
                  <Button color="primary" startIcon={<WhatsAppIcon/>}>+52 818 690 1451</Button>
                </a>
              </div>
              <div>
                <a href="mailto:mluis651@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button color="primary" startIcon={<EmailIcon/>}>mluis651@gmail.com</Button>
                </a>
              </div>
              <div>
                <a href="https://www.google.com.mx/maps/place/Monterrey,+Nuevo+Leon" target="_blank" rel="noopener noreferrer">
                  <Button color="primary" startIcon={<HomeIcon/>}>
                    <span style={{ textTransform: 'none' }}>Monterrey, México</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="profileContent">
              <Typography variant="h5" align='center' gutterBottom>{lang.objMain}</Typography>
              <Typography variant="subtitle1" align='justify' gutterBottom>{lang.objText}</Typography>
              <Typography variant="h5" align='center' gutterBottom>{lang.interests}</Typography>
              <Typography variant="subtitle1" align='justify'>* Full stack development</Typography>
              <Typography variant="subtitle1" align='justify'>* Process automation</Typography>
              <Typography variant="subtitle1" align='justify'>* Server management</Typography>
              <Typography variant="subtitle1" align='justify'>* Hardware programming</Typography>
              <Typography variant="subtitle1" align='justify' gutterBottom>* Docker and CI/CD</Typography>
              <Typography variant="h5" align='center' gutterBottom>{lang.projects}</Typography>
              <div>
                <a href="https://github.com/LuisEnMarroquin" target="_blank" rel="noopener noreferrer">
                  <Button color="primary" startIcon={<GitHubIcon/>}>
                    <span style={{ textTransform: 'none' }}>LuisEnMarroquin</span>
                  </Button>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/luisenmarroquin" target="_blank" rel="noopener noreferrer">
                  <Button color="primary" startIcon={<LinkedInIcon/>}>
                    <span style={{ textTransform: 'none' }}>LuisEnMarroquin</span>
                  </Button>
                </a>
              </div>
              <div style={{ paddingTop: '10px' }}>
                <FormControl style={{ width: '100%' }}>
                  <Select value={language} variant="outlined" onChange={e => changeLanguage(Number(e.target.value))} inputProps={{ 'aria-label': 'Operation select' }}>
                    <MenuItem value={1}>{lang.en}</MenuItem>
                    <MenuItem value={2}>{lang.es}</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <div className="mainContent">
              <Typography variant="h5" align='center' gutterBottom>Luis Enrique Marroquín González</Typography>
              <Typography variant="subtitle2" align='justify'>{lang.aboutMe}</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>Education</Typography>
              <Typography variant="subtitle1" align='justify'>{lang.career}</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.careerText}</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>Training</Typography>
              <Typography variant="subtitle1" align='justify'>Codellege by Softtek (480 hours)</Typography>
              <Typography variant="subtitle1" align='justify'>January - July 2018</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.codellegeText}</Typography>
              <Typography variant="subtitle1" align='justify'>Work at Softtek as full-stack developer</Typography>
              <Typography variant="subtitle1" align='justify'>July 2018 - present</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.workText}</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>Languages</Typography>
              <Typography variant="subtitle1" align='justify'>* {lang.es} (Native)</Typography>
              <Typography variant="subtitle1" align='justify'>* {lang.en} (Intermediate-advanced)</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.en1} 99%, {lang.en2} 75%, {lang.en3} 85% and {lang.en4} 75%</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>{lang.knowTitle}</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant="subtitle1" align='justify'>OS</Typography>
                  <Typography variant="subtitle2" align='justify'>* Windows 10 / macOS</Typography>
                  <Typography variant="subtitle2" align='justify' gutterBottom>* Ubuntu Desktop / Server</Typography>
                  <Typography variant="subtitle1" align='justify'>Databases</Typography>
                  <Typography variant="subtitle2" align='justify' gutterBottom>* MongoDB (advanced)</Typography>
                  <Typography variant="subtitle1" align='justify'>Languages</Typography>
                  <Typography variant="subtitle2" align='justify'>* Pug / Handlebars</Typography>
                  <Typography variant="subtitle2" align='justify'>* Sass / Stylus</Typography>
                  <Typography variant="subtitle2" align='justify'>* JavaScript / TypeScript</Typography>
                  <Typography variant="subtitle2" align='justify'gutterBottom>* Python 3</Typography>
                  <Typography variant="subtitle1" align='justify'>Frameworks</Typography>
                  <Typography variant="subtitle2" align='justify'>* Bootstrap</Typography>
                  <Typography variant="subtitle2" align='justify'>* Vue (Quasar)</Typography>
                  <Typography variant="subtitle2" align='justify'>* React (Material-UI)</Typography>
                  <Typography variant="subtitle2" align='justify'gutterBottom>* Node / Express</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant="subtitle1" align='justify'>CI/CD tools</Typography>
                  <Typography variant="subtitle2" align='justify'>* Jenkins</Typography>
                  <Typography variant="subtitle2" align='justify'>* GitHub Actions</Typography>
                  <Typography variant="subtitle2" align='justify' gutterBottom>* GitLab CI</Typography>
                  <Typography variant="subtitle1" align='justify'>Containers</Typography>
                  <Typography variant="subtitle2" align='justify'>* Docker / docker-compose</Typography>
                  <Typography variant="subtitle2" align='justify' gutterBottom>* Podman</Typography>
                  <Typography variant="subtitle1" align='justify'>Office</Typography>
                  <Typography variant="subtitle2" align='justify'>* Word</Typography>
                  <Typography variant="subtitle2" align='justify'>* Excel</Typography>
                  <Typography variant="subtitle2" align='justify' gutterBottom>* PowerPoint</Typography>
                  <Typography variant="subtitle1" align='justify'>Others</Typography>
                  <Typography variant="subtitle2" align='justify'>* Bash</Typography>
                  <Typography variant="subtitle2" align='justify'>* SSH</Typography>
                  <Typography variant="subtitle2" align='justify' gutterBottom>* Cypress</Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Main;
