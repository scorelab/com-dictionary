import algoliasearch from "algoliasearch/lite";
import React from "react";
import {
  InstantSearch,
  connectHits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  HitsPerPage,
} from "react-instantsearch-dom";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import WordSimple from "../WordHome/wordSimple";
import Word from "../WordHome/word";
const searchClient = algoliasearch(
  "B1G2GM9NG0",
  "aadef574be1f9252bb48d4ea09b5cfe5"
);
export default function FullTextSearch() {
  return (
    <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
      <Row>
        <Col span={12} offset={6}>
          Searching results for ...
        </Col>
      </Row>
      <Row gutter={2}>
        <Col span={4}>
          <HitsPerPage
            defaultRefinement={1}
            items={[
              { value: 5, label: "Show 5 hits" },
              { value: 10, label: "Show 10 hits" },
            ]}
          />
        </Col>
        <Col span={4}>
          <ClearRefinements />
        </Col>
        <Col span={8} offset={8}>
          <SearchBox defaultRefinement={"string"} />

          {/* <div className="left-panel">
          <ClearRefinements />
          <h2>Brands</h2>
          <RefinementList attribute="brand" />
          
        </div>
        <div className="right-panel">
         
        </div> */}
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <CustomHits />
      </Row>
      <Row align="middle" justify="center">
        <Col span={12}>
          <Pagination />
          <Configure hitsPerPage={4} />
        </Col>
      </Row>
    </InstantSearch>
  );
}

const Hits = ({ hits }) => {
  console.log(hits);
  return (
    <ol>
      {hits.map((hit) => (
        <Word key={hit.objectID} data={hit.name} />
      ))}
    </ol>

    // <div>
    //   <img src={props.hit.image} align="left" alt={props.hit.name} />
    //   <div className="hit-name">
    //     <Highlight attribute="name" hit={props.hit} />
    //   </div>
    //   <div className="hit-description">
    //     <Highlight attribute="description" hit={props.hit} />
    //   </div>
    //   <div className="hit-price">${props.hit.price}</div>
    // </div>
  );
};

const CustomHits = connectHits(Hits);

Hits.propTypes = {
  hit: PropTypes.object.isRequired,
};
