import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()
  return (
    isRouteErrorResponse(error) ?
        <div>Error: <i>{error.statusText || error.data}</i></div>
      : <div>Oops unknown error</div>
  )
}

