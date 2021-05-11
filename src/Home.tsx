import { en, es } from 'i18n'
import { useState, ReactElement } from 'react'
import { Grid, Container } from '@material-ui/core'

import ButtonLink from 'components/ButtonLink'
import MyFullName from 'components/MyFullName'
import ProfileImg from 'components/ProfileImg'
import SelectLang from 'components/SelectLang'
import SimpleList from 'components/SimpleList'

import HomeIcon from '@material-ui/icons/Home'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import PublicIcon from '@material-ui/icons/Public'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

function Home (): ReactElement {
  const [lang, setLang] = useState(en)
  const [langID, setLangID] = useState(1)

  const changeLanguage = (id: number): void => {
    setLangID(id)
    if (id === 1) setLang(en)
    if (id === 2) setLang(es)
  }

  const email = 'luis@marroquin.dev'
  const phone = '154109681825'.split('').reverse().join('')

  return (
    <Container id='mainContainer'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <ProfileImg />
          <MyFullName about={lang.abmeText} showMobile />
          <ButtonLink href={'https://wa.me/' + phone} text={'+' + phone} icon={<WhatsAppIcon />} />
          <ButtonLink href='https://www.google.com.mx/maps/place/Monterrey,+Nuevo+Leon' text='Monterrey, México' icon={<HomeIcon />} />
          <ButtonLink href={'mailto:' + email} text={email} icon={<EmailIcon />} />
          <SimpleList title={lang.inteMain} contents={lang.inteOpts} />
          <SimpleList title={lang.i18nMain} contents={lang.i18nOpts} />
          <SimpleList title={lang.webSites} />
          <ButtonLink href='https://github.com/LuisEnMarroquin' text='LuisEnMarroquin' icon={<GitHubIcon />} />
          <ButtonLink href='https://www.linkedin.com/in/luisenmarroquin' text='LuisEnMarroquin' icon={<LinkedInIcon />} />
          <ButtonLink href='https://www.luismarroquin.com' text='luismarroquin.com' icon={<PublicIcon />} />
          <SelectLang language={langID} change={changeLanguage} />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <MyFullName about={lang.abmeText} />
          <SimpleList title={lang.certific} />
          <SimpleList subtitle={lang.cdlgMain} contents={lang.cdlgText} />
          <SimpleList subtitle={lang.tecCsMn1} contents={lang.tecCsTx1} />
          <SimpleList subtitle={lang.tecCsMn2} contents={lang.tecCsTx2} hr />
          <SimpleList title={lang.estudios} />
          <SimpleList subtitle={lang.tecmMain} contents={lang.tecmText} hr />
          <SimpleList title={lang.workExpe} />
          <SimpleList subtitle={lang.sftkMain} contents={lang.sftkText} hr />
          <SimpleList title={lang.techMain} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <SimpleList subtitle='Languages' contents={['Java', 'Shell', 'Python', 'JavaScript', 'TypeScript']} />
              <SimpleList subtitle='CI/CD' contents={['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure Pipelines']} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <SimpleList subtitle='Frameworks' contents={['Vue', 'SPFx', 'React', 'JQuery', 'NodeJS', 'Quasar', 'Bootstrap']} />
              <SimpleList subtitle='Containers' contents={['Docker', 'Compose']} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <SimpleList subtitle='Testing' contents={['Cypress', 'Puppeteer', 'SeleniumJS']} />
              <SimpleList subtitle='Databases' contents={['MongoDB', 'SQL Server']} />
              <SimpleList subtitle='OS' contents={['Windows 10', 'Ubuntu Server']} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
