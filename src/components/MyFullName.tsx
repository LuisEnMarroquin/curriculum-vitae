import { ReactElement } from "react"
import { useTheme } from "@material-ui/core/styles"
import { Divider, Typography, useMediaQuery } from "@material-ui/core"

function MyFullName({ about, showMobile = false }: { about: string; showMobile?: boolean }): ReactElement | null {
  const theme = useTheme()
  const desktopSize = useMediaQuery(theme.breakpoints.up("md"))
  const fullName = (
    <section>
      <Typography variant="h5" align="center" gutterBottom>
        Luis Enrique Marroquín González
      </Typography>
      <Typography variant="body2" align="justify" gutterBottom>
        {about}
      </Typography>
      <Divider />
    </section>
  )
  return showMobile ? (desktopSize ? null : fullName) : !desktopSize ? null : fullName
}

export default MyFullName
