import React, { useState } from 'react';
import en from './i18n/en';
import es from './i18n/es';
import 'Main.scss';

import SelectLang from 'components/SelectLang'
import SimpleList from 'components/SimpleList'

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import TodayIcon from '@material-ui/icons/Today';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
              <SelectLang language={language} change={changeLanguage} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <div className="mainContent">
              <Typography variant="h5" align='center' gutterBottom>Luis Enrique Marroquín González</Typography>
              <Typography variant="subtitle2" align='justify'>{lang.aboutMe}</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>{lang.study}</Typography>
              <Typography variant="subtitle1" align='justify'>{lang.career}</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.careerText}</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>{lang.exp}</Typography>
              <Typography variant="subtitle1" align='justify'>{lang.codellege}</Typography>
              <Typography variant="subtitle2" align='justify'>{lang.codellegeTime}</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.codellegeText}</Typography>
              <Typography variant="subtitle1" align='justify'>{lang.workTime}</Typography>
              <Typography variant="subtitle2" align='justify'>{lang.workTime}</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.workText}</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>{lang.lang}</Typography>
              <Typography variant="subtitle1" align='justify'>* {lang.es}</Typography>
              <Typography variant="subtitle1" align='justify'>* {lang.en}</Typography>
              <Typography variant="subtitle2" align='justify' gutterBottom>{lang.en1} 99%, {lang.en2} 75%, {lang.en3} 85% {lang.and} {lang.en4} 75%</Typography>
              <Divider />
              <Typography variant="h6" align='center' gutterBottom>{lang.knowTitle}</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <SimpleList title='OS' content={[ 'Windows 10 / macOS', 'Ubuntu Desktop / Server' ]} />
                  <SimpleList title='Databases' content={[ 'MongoDB (advanced)' ]} />
                  <SimpleList title='Languages' content={[ 'Pug / Handlebars', 'Sass / Stylus', 'JavaScript / TypeScript', 'Python 3' ]} />
                  <SimpleList title='Frameworks' content={[ 'Bootstrap', 'Vue (Quasar)', 'React (Material-UI)', 'Node / Express' ]} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <SimpleList title='CI/CD tools' content={[ 'Jenkins', 'GitLab CI', 'GitHub Actions' ]} />
                  <SimpleList title='Containers' content={[ 'Docker / docker-compose', 'Podman' ]} />
                  <SimpleList title='Office' content={[ 'Word', 'Excel', 'PowerPoint' ]} />
                  <SimpleList title='Others' content={[ 'Bash', 'SSH', 'Cypress' ]} />
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
