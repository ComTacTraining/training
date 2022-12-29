import { Authenticator } from '@aws-amplify/ui-react'
import type { PropsWithChildren, ReactNode } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Head from 'next/head'

interface IPageHead {
  title: string
  description: string
}

const PageHead = ({ title, description }: IPageHead) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <section className='mb-16 text-gray-800'>
      <div
        id='header-section'
        className='background-radial-gradient text-center text-white'>
        <h2 className='text-3xl font-bold text-center mb-12'>{children}</h2>
      </div>
    </section>
  )
}

interface IContent {
  heading: string
  noSpacing: boolean
}

const Content = ({
  heading,
  noSpacing,
  children
}: PropsWithChildren<IContent>) => {
  return (
    <>
      <Nav />
      <main>
        {noSpacing ? (
          children
        ) : (
          <>
            {heading ? <Heading>{heading}</Heading> : null}
            <div className='container mx-auto mb-16 flex flex-col items-center justify-center p-4'>
              {children}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

interface ILayout {
  heading?: string
  withAuth?: boolean
  title?: string
  description?: string
  noSpacing?: boolean
}

const Layout = ({
  heading,
  withAuth = false,
  noSpacing = false,
  title,
  description,
  children
}: PropsWithChildren<ILayout>) => {
  const headTitle = title
    ? title
    : heading
    ? `${heading} - Command Tactical Training`
    : 'Command Tactical Training'
  const headDescription = description
    ? description
    : "Command Tactical Training's focus is on Firefighter Survival and building strong Incident Commanders."
  const bodyTitle = heading ? heading : title ? title : ''

  return (
    <>
      <PageHead title={headTitle} description={headDescription} />
      <div className='flex flex-col min-h-screen'>
        {withAuth ? (
          <Authenticator>
            <Content heading={bodyTitle} noSpacing={noSpacing}>
              {children}
            </Content>
          </Authenticator>
        ) : (
          <Content heading={bodyTitle} noSpacing={noSpacing}>
            {children}
          </Content>
        )}
      </div>
    </>
  )
}

export default Layout
