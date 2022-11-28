import React from 'react';
import '../Footer/Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className ='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            {/* <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Trip Tip
              </h6>
              <p>
              צור קשר דרושים חנויות למטייל חנות אינטרנטית פרסום באתר
אטרקציות מסלולי טיול נקודות חן אירועים מסעדות קמפינג
צפון מרכז ירושלים והסביבה דרום
              </p>
            </MDBCol> */}

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h6 className='text-uppercase fw-bold mb-4'>? מתכננים טיול</h6>
              <p>
                <a href='#!' className='text-reset'>
                טקסים ופעילויות
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                טיולי פריחה
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                מסלולים עם מים
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  טיולי זריחה
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>שומרים על הטבע</h6>
              <p>
                <a href='#!' className='text-reset'>
                שומרים על חיות הבר בערים             
                   </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                שומרים על בתי הגידול
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                שומרים על הים – הסביבה החופית
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                צמחים בסכנת הכחדה
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>צור קשר</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                בת שבע ,לוד
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                TripTip@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 08-832-28292
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 08-832-28293
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}