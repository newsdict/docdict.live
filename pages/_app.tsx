import { FC } from 'react'
import { AppProps } from 'next/app'
import 'bulma/css/bulma.css'
import '../styles/main.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp