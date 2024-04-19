import * as React from 'react'

import { LoadingIcon } from './LoadingIcon'
import styles from './styles.module.css'

export const Loading: React.FC = () => (
  <div className={styles.container}>
    <p id='loading-message'>
      Fetching the latest contents ;
    </p>
    &nbsp;
    <LoadingIcon />
  </div>
)
