import { Inter } from 'next/font/google'
import SharedNavbar from './SharedNavbar'
import SharedSideNav from './SharedSideNav'

const inter = Inter({ subsets: ['latin'] })

export default function SideNavLayout({ children }) {
  return (
    <><body className="d-flex flex-column">
      {/* Header with main bar */}
      <header>
        <SharedNavbar ></SharedNavbar>
      </header>
      {/* Main section */}
      <main>
        <div className="container-fluid">
          <div className="row">
            {/* Left side menu */}
            <div className="col-md-3 col-lg-2">
              <SharedSideNav ></SharedSideNav>
            </div>
            {/* Main content */}
            {/* This is wrapped by the layout */}
            <div className="ms-sm-auto col-md-9 col-lg-10">
              <section id="main-section" className="container flex-grow-1 py-2">
                {children}
              </section>
            </div>
          </div>
        </div>
      </main >
    </body >
    </>
  )
}
