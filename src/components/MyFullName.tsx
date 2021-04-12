// import Divider from '@material-ui/core/Divider'
import { useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function MyFullName({ showMobile = false }: { showMobile?: boolean }) {
  const theme = useTheme()
  const desktopSize = useMediaQuery(theme.breakpoints.up('md'))
  const fullName = <Typography variant="h5" align='center' gutterBottom>Luis Enrique Marroquín González</Typography>
  return (
    showMobile
      ? desktopSize ? null : fullName
      : !desktopSize ? null : <span>
        {fullName}
        {/* <Divider /> */}
      </span>
  )
}

export default MyFullName
