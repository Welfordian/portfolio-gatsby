import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../state/createStore'
import { ThemeProvider } from '../context/Layout'
import Layout from '../components/Layout'

export default function AppShell({ children, urlPathname }) {
  const store = React.useMemo(() => createStore(), [])
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout location={{ pathname: urlPathname }}>
          {children}
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
