import { ReactNode } from 'react'
import Button from '@material-ui/core/Button'

interface IButtonLink {
  href: string
  text: string
  icon: ReactNode
}

function ButtonLink({ href, text, icon }: IButtonLink) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <Button color="primary" startIcon={icon}>{text}</Button>
      </a>
    </div>
  )
}

export default ButtonLink
