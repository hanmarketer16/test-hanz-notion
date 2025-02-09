import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Notion Page Not Found'

  const errorText =
    error?.message ||
    (pageId
      ? `Make sure that Notion page "${pageId}" is publicly accessible`
      : "We can't seem to find the page you're looking for")

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={`${styles.container} notion-h-title`}>
        <main className={styles.main}>
          <div className={styles.page404}>
            <div>
              <h1>Sorry!</h1>
              <p>{errorText}</p>
             
             
            </div>
            <div>
              <h1>404</h1>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
