import { useState } from 'react';
import en from 'i18n/en';
import es from 'i18n/es';

import ButtonLink from 'components/ButtonLink'
import ProfileImg from 'components/ProfileImg'
import SelectLang from 'components/SelectLang'
import SimpleList from 'components/SimpleList'

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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

  const email = 'luis@marroquin.dev', phone = '528186901451'

  return (
    <Container className="mainContainer">
      <section>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <div className="mainWrapper">
              <ProfileImg/>
              <ButtonLink href={"https://wa.me/" + phone} text={"+" + phone} icon={<WhatsAppIcon/>} />
              <ButtonLink href="https://www.google.com.mx/maps/place/Monterrey,+Nuevo+Leon" text="Monterrey, México" icon={<HomeIcon/>} />
              <ButtonLink href={"mailto:" + email} text={email} icon={<EmailIcon/>} />
              <SimpleList title={lang.objMain} contents={lang.aboutMe} />
              <SimpleList title={lang.interests} contents={[ 'Full stack development', 'Process automation', 'Server management', 'CI/CD and containers' ]} />
              <SimpleList title={lang.projects} />
              <ButtonLink href="https://github.com/LuisEnMarroquin" text="LuisEnMarroquin" icon={<GitHubIcon/>} />
              <ButtonLink href="https://www.linkedin.com/in/luisenmarroquin" text="LuisEnMarroquin" icon={<LinkedInIcon/>} />
              <SelectLang language={language} change={changeLanguage} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <div className="mainWrapper">
              <Typography variant="h5" align='center' gutterBottom>Luis Enrique Marroquín González</Typography>
              <Divider />
              <SimpleList title={lang.study} />
              <SimpleList subtitle={lang.careerMain} contents={lang.careerText} />
              <Divider />
              <SimpleList title={lang.experience} />
              <SimpleList subtitle={lang.codelleMain} contents={lang.codelleText} />
              <SimpleList subtitle={lang.softtekMain} contents={lang.softtekText} />
              <Divider />
              <SimpleList title={lang.langText} contents={lang.langOpts} />
              <Divider />
              <SimpleList title={lang.knowTitle} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                  <SimpleList subtitle='OS' contents={[ 'Windows 10', 'Ubuntu Desktop', 'Ubuntu Server' ]} />
                  <SimpleList subtitle='Languages' contents={[ 'JavaScript', 'TypeScript', 'Python', 'Java', 'Bash' ]} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <SimpleList subtitle='Frameworks' contents={[ 'React', 'Vue', 'Quasar', 'NodeJS', 'ExpressJS' ]} />
                  <SimpleList subtitle='Testing' contents={[ 'Cypress', 'Puppeteer', 'SeleniumJS' ]} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <SimpleList subtitle='CI/CD' contents={[ 'Azure DevOps', 'Jenkins', 'GitHub Actions', 'GitLab CI' ]} />
                  <SimpleList subtitle='Containers' contents={[ 'Docker', 'Compose' ]} />
                  <SimpleList subtitle='Databases' contents={[ 'MongoDB' ]} />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}

export default Main;
