import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    apiKey: "6e85a327ac074e98b97052821c5516e6",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
  };
  constructor() {
    super();
    this.state = { articles: [], loading: false, page: 1 };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${
      this.props.apiKey
    }&page=1&pageSize=${[this.props.pageSize]}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevious = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${[this.props.pageSize]}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${[this.props.pageSize]}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>
        <div style={{ height: "50px" }}>
          {this.state.loading && <Spinner />}
        </div>

        <div className="row">
          <div className="container d-flex justify-content-between my-2">
            <button
              className="btn btn-dark"
              onClick={this.handlePrevious}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-dark"
              onClick={this.handleNext}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        {!this.state.loading && (
          <div className="container d-flex justify-content-between">
            <button
              className="btn btn-dark"
              onClick={this.handlePrevious}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-dark"
              onClick={this.handleNext}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
