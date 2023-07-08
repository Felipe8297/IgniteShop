import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import logoImg from '@/assets/logo.svg'
import { Conteiner, Header } from '@/styles/pages/app'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Conteiner>
      <Header>
        <Image src={logoImg} alt="" priority={true} />
      </Header>
      <Component {...pageProps} />
    </Conteiner>
  )
}
