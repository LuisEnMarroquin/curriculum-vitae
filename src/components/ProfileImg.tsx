import { ReactElement } from "react"
import profile from "assets/profile.jpg"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    padding: "15px 30px 15px 30px",
    textAlign: "center",
    "& img": {
      borderRadius: "20px",
    },
  },
  bg: {
    width: "90%",
  },
  md: {
    width: "50%",
  },
  sm: {
    width: "75%",
  },
})

function ProfileImg(): ReactElement {
  const theme = useTheme()
  const classes = useStyles()
  const isBG = useMediaQuery(theme.breakpoints.up("md"))
  const isMD = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <div className={classes.root}>
      <img className={isBG ? classes.bg : isMD ? classes.md : classes.sm} src={profile} alt="profile-img-not-found" />
    </div>
  )
}

export default ProfileImg
