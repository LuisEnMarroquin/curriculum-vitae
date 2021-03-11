import { useState } from 'react'

import en from 'i18n/en'
import es from 'i18n/es'

import ButtonLink from 'components/ButtonLink'
import MyFullName from 'components/MyFullName'
import ProfileImg from 'components/ProfileImg'
import SelectLang from 'components/SelectLang'
import SimpleList from 'components/SimpleList'

import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import Container from '@material-ui/core/Container'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

function Main() {
  const [lang, setLang] = useState(en)
  const [langID, setLangID] = useState(1)

  const changeLanguage = (id: number) => {
    setLangID(id)
    if (id === 1) setLang(en)
    if (id === 2) setLang(es)
  }

  const email = 'luis@marroquin.dev', phone = '154109681825'.split('').reverse().join('')

  return (
    <Container className="mainContainer">
      <section>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <ProfileImg />
            <MyFullName showMobile={true} />
            <ButtonLink href={"https://wa.me/" + phone} text={"+" + phone} icon={<WhatsAppIcon />} />
            <ButtonLink href="https://www.google.com.mx/maps/place/Monterrey,+Nuevo+Leon" text="Monterrey, México" icon={<HomeIcon />} />
            <ButtonLink href={"mailto:" + email} text={email} icon={<EmailIcon />} />
            <SimpleList title={lang.inteMain} contents={lang.inteOpts} />
            <SimpleList title={lang.i18nMain} contents={lang.i18nOpts} />
            <SimpleList title={lang.webSites} />
            <ButtonLink href="https://github.com/LuisEnMarroquin" text="LuisEnMarroquin" icon={<GitHubIcon />} />
            <ButtonLink href="https://www.linkedin.com/in/luisenmarroquin" text="LuisEnMarroquin" icon={<LinkedInIcon />} />
            <SelectLang language={langID} change={changeLanguage} />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <MyFullName />
            <SimpleList title={lang.abmeMain} contents={lang.abmeText} hr={true} />
            <SimpleList title={lang.estudios} />
            <SimpleList subtitle={lang.tecmMain} contents={lang.tecmText} />
            <SimpleList subtitle={lang.cdlgMain} contents={lang.cdlgText} hr={true} />
            <SimpleList title={lang.workExpe} />
            <SimpleList subtitle={lang.sftkMain} contents={lang.sftkText} hr={true} />
            <SimpleList title={lang.techMain} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <SimpleList subtitle='Operating systems' contents={['Debian', 'Windows 10', 'Ubuntu Server']} />
                <SimpleList subtitle='Programming languages' contents={['Java', 'Shell', 'Python', 'JavaScript', 'TypeScript']} />
                <SimpleList subtitle='Currently learning' contents={['Rust', 'Golang']} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <SimpleList subtitle='Web frameworks' contents={['Vue', 'React', 'JQuery', 'Quasar', 'NodeJS', 'Bootstrap', 'ExpressJS', 'SPFx web part']} />
                <SimpleList subtitle='Testing tools' contents={['Cypress', 'Puppeteer', 'SeleniumJS']} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <SimpleList subtitle='CI/CD' contents={['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure Pipelines']} />
                <SimpleList subtitle='Containers' contents={['Docker', 'Compose']} />
                <SimpleList subtitle='Databases' contents={['MongoDB', 'SQL Server']} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </Container>
  )
}

export default Main
