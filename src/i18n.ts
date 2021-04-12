const edad = new Date(Date.now() - new Date('1999-10-16').getTime()).getUTCFullYear() - 1970
const cdlg = '01/2018 - 06/2018'
const tecm = '08/2018 - present'
const sftk = '06/2018 - present'

export const en = {
  inteMain: 'Interest areas',
  inteOpts: ['Process automation', 'Server management', 'Full stack development', 'Application deployments', 'Algorithms and optimization'],
  i18nMain: 'Languages',
  i18nOpts: ['Spanish (native)', 'English (advanced)'],
  webSites: 'Web sites',
  abmeMain: 'About me',
  abmeText: `My name is Luis Enrique, I am ${edad} and I am a proactive, enthusiastic and self-taught full stack developer. I really like learning new technologies and setting myself new challenges. I know how to plan projects from start to finish, work as a team and make the right decisions`,
  cdlgMain: `Codellege academy, Softtek (${cdlg})`,
  cdlgText: 'It is a 6 month course that Softtek offers to people interested in entering the world of programming, there I learned HTML, CSS, JS, JQuery, Bootstrap and NodeJS. In addition there are also classes in design, entrepreneurship and English',
  sftkMain: `Full stack developer, Softtek (${sftk})`,
  sftkText: 'I have had the opportunity to work on various internal projects and support other teams building and maintaining web applications with React, Vue, JQuery, Bootstrap, MongoDB, NodeJS, ExpressJS, SPFX, SQL Server, and TypeScript. I have also supported the creation of servers in Azure with Nginx in Docker containers with auto deploy from GitLab CI',
  estudios: 'Education',
  tecmMain: `Computer Engineering and Administration, TecMilenio University (${tecm})`,
  tecmText: 'I obtained the certificates of "Advanced management of information technologies" and "Productivity based on technological tools" during my classes',
  workExpe: 'Work experience',
  techMain: 'Technical expertise',
}

export const es = {
  inteMain: 'Áreas de interés',
  inteOpts: ['Automatización de procesos', 'Administración de servidores', 'Desarrollo full stack', 'Despliegue de aplicaciones', 'Algoritmos y optimización'],
  i18nMain: 'Idiomas',
  i18nOpts: ['Español (nativo)', 'Inglés (avanzado)'],
  webSites: 'Sitios web',
  abmeMain: 'Sobre mi',
  abmeText: `Me llamo Luis Enrique, tengo ${edad} y soy un desarrollador full stack proactivo, entusiasta y autodidacta. Me gusta mucho aprender nuevas tecnologías y proponerme nuevos retos. Se como planificar proyectos de inicio a fin, trabajar en equipo y tomar decisiones acertadas`,
  cdlgMain: `Curso de Codellege, Softtek (${cdlg})`,
  cdlgText: 'Es un curso de 6 meses que ofrece Softtek a personas interesadas en entrar al mundo de la programación, ahí aprendí HTML, CSS, JS, JQuery, Bootstrap y NodeJS. Además también hay clases de diseño, emprendimiento e Inglés',
  sftkMain: `Desarrollador full stack, Softtek (${sftk}e)`,
  sftkText: 'He tenido la oportunidad de trabajar en varios proyectos internos y apoyar a otros equipos a crear y dar mantenimiento a aplicaciones web con React, Vue, JQuery, Bootstrap, MongoDB, NodeJS, ExpressJS, SPFX, SQL Server y TypeScript. También he apoyado en la creación de servidores en Azure con Nginx en contenedores de Docker con auto deploy desde GitLab CI',
  estudios: 'Estudios',
  tecmMain: `Ingeniería en Computación Administrativa, Universidad TecMilenio (${tecm}e)`,
  tecmText: 'Obtuve los certificados de "Gestión avanzada de tecnologías de la información" y "Productividad basada en herramientas tecnológicas" durante mis clases',
  workExpe: 'Experiencia laboral',
  techMain: 'Conocimientos técnicos'
}