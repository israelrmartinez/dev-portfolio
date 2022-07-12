import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/articles.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
};

function Articles(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.articles, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.articles))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <VerticalTimeline
                lineColor={theme.timelineLineColor}
                >
                  {data.map((item) => (
                  <Fade className="fade">
                    <VerticalTimelineElement className="vertical-timeline-element"
                      style={styles.itemStyle}
                      contentStyle={{ background: theme.background }}
                      date={item.date}
                    >
                    <img src={item.img} alt={item.alt} style={styles.imageStyle}/>
                    <h2 className="item-title">
                        {item.title}
                      </h2>
                      <div style={styles.subtitleContainerStyle}>
                      <a className="link" href={item.href} target="_blank" rel="noreferrer">
                        <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                          Yakima Herald-Republic
                        </h4>
                        </a>
                        <h5 style={styles.inlineChild}>
                    &nbsp;·
                          {' '}
                          Unleashed
                        </h5>
                      </div>
                      <ul style={styles.ulStyle}>
                        {item.workDescription.map((point) => (
                          <div key={point}>
                            <li>
                              <ReactMarkdown
                                children={point}
                                components={{
                                  p: 'span',
                                }}
                              />
                            </li>
                            <br />
                          </div>
                        ))}
                      </ul>
                    </VerticalTimelineElement>
                  </Fade>
                ))}
              </VerticalTimeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
}

Articles.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Articles;
