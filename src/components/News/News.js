import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    //receiving data from props.news and destructuring
    const {title, description, urlToImage, author, publishedAt, url} = props.news;

    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title> <a href={url}>{title}</a></Card.Title>
            <p>by: {author}</p>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
        <Card.Footer>
            <small className="text-muted">Published at: {publishedAt}</small>
        </Card.Footer>
        </Card>
      </Col>
    );
};

export default News;