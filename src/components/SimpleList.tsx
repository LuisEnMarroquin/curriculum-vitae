import Typography from '@material-ui/core/Typography'

interface ISimpleList {
  title?: string | null
  subtitle?: string | null
  contents?: string | Array<string> | null
}

function SimpleList({ title = null, subtitle = null, contents = null }: ISimpleList) {
  return (
    <div>
      {
        !title ? null : <Typography variant='h6' align='center'>{title}</Typography>
      } {
        !subtitle ? null : <Typography variant='body1' align='justify'>{subtitle}</Typography>
      } {
        !contents ? null
          : typeof contents === 'string'
            ? <Typography variant='body2' align='justify' gutterBottom={true}>{contents}</Typography>
            : contents.map((item, index) => {
              let isLast = contents.length === (index + 1) ? true : false
              return <Typography key={`${title}-${index}`} variant='body2' align='left' gutterBottom={isLast}>* {item}</Typography>
            })
      }
    </div>
  )
}

export default SimpleList
