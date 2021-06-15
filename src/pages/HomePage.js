import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import Header from "../componenets/Header/Header"

const HomePage = () => {
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : null} */}
      {/* <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          )
        })}
      </Row> */}
      <Header />
    </>
  )
}

export default HomePage
