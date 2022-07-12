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
        <Carousel>
          {gallery.images.map((image) => {
            <Carousel.Item>
              <img src={image}/>
              <Carousel.Caption>
                heyy
              </Carousel.Caption>
            </Carousel.Item>
          })}
          {/* <Carousel.Item>
            <h3>heyy</h3>
          </Carousel.Item> */}
        </Carousel>
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{gallery.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(gallery.cardSubtitle)}
          </Card.Text>
          <Button
            key={gallery.href}
            style={styles.buttonStyle}
            variant={'outline-' + theme.bsSecondaryVariant}
            onClick={() => window.open(gallery.href, '_blank')}
          >
            View more
          </Button>
        </Card.Body>

        <Card.Body>
          {/* {gallery?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))} */}
          {/* {gallery.images && (
          <Carousel>
            
          </Carousel>
        )} */}
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
