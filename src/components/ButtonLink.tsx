import Button from "@material-ui/core/Button"
import { ReactNode, ReactElement } from "react"

interface IButtonLink {
  href: string
  text: string
  icon: ReactNode
}

function ButtonLink({ href, text, icon }: IButtonLink): ReactElement {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer nofollow">
        <Button color="primary" startIcon={icon}>
          {text}
        </Button>
      </a>
    </div>
  )
}

export default ButtonLink
