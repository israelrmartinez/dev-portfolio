import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import GalleryCard from './cards/GalleryCard';
import '../css/gallery.css';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

function Gallery(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('HORIZONTAL');
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.gallery, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);

    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  const numberOfItems = showMore && data ? data.length : 6;

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Chrono
                allowDynamicUpdate
                // useReadMore={true}
                items={data.gallery}
                cardHeight={250}
                mode={mode}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                <div className="chrono-icons">
                  {data.gallery.map((shoot) => (shoot.icon ? (
                    <img
                      key={shoot.icon.src}
                      src={shoot.icon.src}
                      alt={shoot.icon.alt}
                    />
                  ) : null))}
                </div>
              </Chrono>

              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.gallery?.slice(0, numberOfItems).map((gallery) => (
                  <Fade key={gallery.subTitle}>
                    <GalleryCard gallery={gallery} />
                  </Fade>
                ))}
              </Row>

              {!showMore
                && (
                <Button
                  style={styles.showMoreStyle}
                  variant={theme.bsSecondaryVariant}
                  onClick={() => setShowMore(true)}
                >
                  show more
                </Button>
                )}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Gallery;
