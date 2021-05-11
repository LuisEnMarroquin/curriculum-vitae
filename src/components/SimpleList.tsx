import { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Typography } from '@material-ui/core'

interface ISimpleList {
  title?: string | undefined
  subtitle?: string | undefined
  contents?: string[] | undefined
  hr?: boolean | undefined
}

const useStyles = makeStyles({
  check: {
    color: '#E31C58'
  }
})

function SimpleList({ title = '', subtitle = '', contents = [], hr = false }: ISimpleList): ReactElement {
  const classes = useStyles()
  return (
    <div>
      {
        title === '' ? null : <Typography variant='h6' align='center'>{title}</Typography>
      }
      {
        subtitle === '' ? null : <Typography variant='body1' align='justify'>{subtitle}</Typography>
      }
      {
        contents === [] ? null
          : contents.map((item, index) => {
            const isLast = contents.length === (index + 1)
            return (
              <Typography key={`${title}-${index}`} variant='body2' gutterBottom={isLast}>
                <span className={classes.check}>✔ </span>
                {item}
              </Typography>
            )
          })
      }
      {
        !hr ? null : <Divider />
      }
    </div>
  )
}

export default SimpleList
