import React from 'react'
import '../styles/home.css'

import { Container, Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonial';
import NewsLetter from '../shared/Newsletter';

const Home = () => {
  return <>
  
  {/* hero section start */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle Subtitle={'Butuh Healing? Berwisata Saja'}/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Berwisata membuka pintu untuk menciptakan <span className="highlight"> kenangan</span></h1>
            <p>Website ini menawarkan pengalaman unik dalam menjelajahi destinasi sosial budaya di indonesia.Temukan destinasi yang menyenangkan.
            </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} alt="" controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>

      </Row>
    </Container>
  </section>
  {/* hero section end*/}
  <section>
    <Container>
      <Row>
        <Col lg="3">
          <h5 className="services__subtitle">Apa yang kami layani</h5>
          <h2 className="services__title">Kami menawarkan layanan terbaik kami</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  

  { /* =================featured tour section start  ======== */}
  <section>
    <Container>
      <Row>
        <Col lg="12" className="mb-5">
          <Subtitle Subtitle={"Explore"} />
          <h2 className="featured__tour-title">Rekomendasi Tour</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>
  { /* =================featured tour section end  ======== */}

  {/* ========== EXPERIENCE SECTION START ============ */}
  <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle Subtitle={'Pengalaman'} />

                     <h2>Dengan semua pengalaman kami <br /> kami akan melayani Anda</h2>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        <br /> Quas aliquam, hic tempora inventore suscipit unde. </p>
                  </div>

                  <div className="counter__wrapper d-flex align-items-center gap-5">
                     <div className="counter__box">
                        <span>12k+</span>
                        <h6>Trip Berhasil</h6>
                     </div>
                     <div className="counter__box">
                        <span>2k+</span>
                        <h6>Klien Regular</h6>
                     </div>
                     <div className="counter__box">
                        <span>15</span>
                        <h6>Tahun Pengalaman</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
  {/* ========== EXPERIENCE SECTION END ============== */}

  {/* ========== GALLERY SECTION START ============== */}
  <section>
    <Container>
      <Row>
          <Col lg='12'>
            <Subtitle Subtitle={'Galeri'} />
            <h2 className="gallery__title">Kunjungi galeri tour pelanggan kami</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
      </Row>
    </Container>
  </section>
  {/* ========== GALLERY SECTION END ================ */}

  {/* ========== TESTIMONIAL SECTION START ================ */}
  <section>
      <Container>
        <Row>
            <Col lg='12'>
              <Subtitle Subtitle={'Fans Love'} />
              <h2 className="testimonial__title">Apa yang fans kami katakan tentang kami</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
        </Row>
      </Container>
  </section>
  {/* ========== TESTIMONIAL SECTION END ================== */}
  <NewsLetter />
</>
}

export default Home
