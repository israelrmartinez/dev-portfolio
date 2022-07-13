import React, { useContext } from 'react';
import { Button, Card, CarouselItem, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import ImageGallery from 'react-image-gallery'
import Carousel from 'react-bootstrap/Carousel';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'center',
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  buttonStyle: {
    margin: 5,
  },
};

const GalleryCard = (props) => {
  const theme = useContext(ThemeContext);
  const parseBodyText = (text) => <ReactMarkdown children={text} />;

  const { gallery } = props;

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme.cardBackground,
          borderColor: theme.cardBorderColor,
        }}
        text={theme.bsSecondaryVariant}
      >
        {/* <Card.Img variant="top" src={gallery?.image} /> */}
        {/* <ImageGallery items={gallery.images} /> */}
        <Card.Body>
          <Carousel fade interval={null}>
            {gallery.images.map((image) => 
              (<Carousel.Item>
                <img src={image} style={styles.imageStyle}/>
                <Carousel.Caption>
                  {gallery.cardSubtitle}
                </Carousel.Caption>
              </Carousel.Item>)
            )}
          </Carousel>
        </Card.Body>
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{gallery.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(gallery.cardTitle)}
          </Card.Text>
          <Button
            key={gallery.href}
            style={styles.buttonStyle}
            variant={'outline-' + theme.bsSecondaryVariant}
            onClick={() => window.open(gallery.href, '_blank')}
          >
            Collection
          </Button>
        </Card.Body>
        {/* {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )} */}
      </Card>
    </Col>
  );
};

GalleryCard.propTypes = {
  gallery: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardSubtitle: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default GalleryCard;
