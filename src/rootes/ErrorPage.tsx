import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  return (
    isRouteErrorResponse(error) ?
        <i>{error.statusText || error.data}</i>
      : <div>Oops unknown error</div>
  )
}

