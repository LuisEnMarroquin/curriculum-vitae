import { get } from "lodash"
import { useRouteError } from "react-router-dom"
import Card from "../components/Card"

function ErrorPage() {
  const error = useRouteError()

  console.error(error)
  const statusText = get(error, "statusText")
  const errorMessage = get(error, "message")

  return (
    <Card>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || errorMessage}</i>
      </p>
    </Card>
  )
}

export default ErrorPage
