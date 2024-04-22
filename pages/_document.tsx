import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {

  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false, // Menyimpan status apakah ada halaman sebelumnya
      canGoForward: false, // Menyimpan status apakah ada halaman selanjutnya
    };
  }

  componentDidMount() {
    // Mengecek apakah ada halaman sebelumnya yang dapat diakses
    this.setState({ canGoBack: window.history.length > 1 });

    // Event listener untuk menangani perubahan riwayat
    window.addEventListener('popstate', this.handleHistoryChange);
  }

  componentWillUnmount() {
    // Membersihkan event listener saat komponen di-unmount
    window.removeEventListener('popstate', this.handleHistoryChange);
  }

  // Method untuk menangani perubahan riwayat
  handleHistoryChange = () => {
    // Update status ketersediaan navigasi ke halaman sebelumnya dan halaman selanjutnya
    this.setState({
      canGoBack: window.history.length > 1,
      canGoForward: window.history.length !== window.history.state.index + 1,
    });
  };

  // Method untuk kembali ke halaman sebelumnya
  goBack = () => {
    if (this.state.canGoBack) {
      window.history.back();
    }
  };

  // Method untuk menuju halaman selanjutnya
  goForward = () => {
    if (this.state.canGoForward) {
      window.history.forward();
    }
  };

  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />

            <link rel='manifest' href='/manifest.json' />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

          </Head>
          <body>

            <section className="menu-bottom">
              <div className="menav-card-container">
                <div className="mebot-card">
                  <div className="mev1">
                    <div className="mev2">
                      <div className="mev-container">
                        <a style={{ cursor: 'pointer' }} onClick={this.goBack}>
                          <div className="text-center">
                            <div className="navicon-bottom">
                              <span className="navconbot">
                                <i aria-hidden="true" className="fas fa-arrow-circle-left"></i>
                              </span>
                            </div>
                            <div className="navtext-bottom">
                              <h3 className="navtitlebot">
                                <span>Back</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mebot-card">
                  <div className="mev1">
                    <div className="mev2">
                      <div className="mev-container">
                        <a href="/" style={{ cursor: 'pointer' }}>
                          <div className="text-center">
                            <div className="navicon-bottom">
                              <span className="navconbot">
                                <i aria-hidden="true" className="fas fa-home"></i>
                              </span>
                            </div>
                            <div className="navtext-bottom">
                              <h3 className="navtitlebot">
                                <span>Beranda</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mebot-card">
                  <div className="mev1">
                    <div className="mev2">
                      <div className="mev-container">
                        <a style={{ cursor: 'pointer' }} onClick={this.goForward}>
                          <div className="text-center">
                            <div className="navicon-bottom">
                              <span className="navconbot">
                                <i aria-hidden="true" className="fas fa-arrow-circle-right"></i>
                              </span>
                            </div>
                            <div className="navtext-bottom">
                              <h3 className="navtitlebot">
                                <span>Forward</span>
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />
            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
