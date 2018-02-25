import React from 'react';


export default class Results extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e, article, props){
    console.log(this.props.handleSavedArticles)
    e.preventDefault();
    const articleToSave = {
      title: article.headline.main,
      date: article.pub_date,
      url: article.uri
    }
    console.log(articleToSave)
    fetch ("/api/saved", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(articleToSave)
    })
    .then((result)=>{
      console.log(result, "Im the mother lovin' result");
      return result.json()
    })
    .then((response)=>{
      console.log(response, "==========================================");
    }).then((err)=>{
      return err
    })


  };

  componentDidMount(props) {
    console.log(this.props.handleSavedArticles, "=+=++=++++===++==+++++++++++++==");
    console.log("this is the props <<<<<<<<<<<")
    console.log(this.props)
    fetch('/api/saved').then((results)=>{
      return results.json()
    })
    .then((response)=>{
      const saved_records = response;
      this.props.handleSavedArticles(saved_records);
      console.log('my sick ass results=============', saved_records);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  render() {

    return (
      <div>
        {/* <div className="row"> */}
          <div style={{backgroundColor: 'rgba(119, 119, 119, 1)'}} className="col-md-12">
            <h3 style={{color: '#f5f4f2', textAlign: 'center'}}>Results</h3>

            {this.props.articles.map((article,i)=>{
              let imageSrc = "https://static01.nyt.com/" + article.multimedia[1].url

              let headlineStyle = {
                backgroundColor: '#eee',
                padding: '10px',
                border: "1px solid #9d9d9d"
              }
              let headlineImageRow = {
                paddingTop: '12px'
              }
              let headlineImage = {
                border: "3px solid #9d9d9d",
                width: "300px",
              }

              // console.log(JSON.stringify(article.multimedia[2].url))

              return (
                <div key={`${article.headline.main}-${i}`}>
                  <div  style={headlineStyle} className="row" >
                    <div>
                      <div style={headlineImageRow} className='col-md-4'>
                        <img  style={headlineImage}  className="" src={imageSrc} alt="" />

                      </div>
                      <div className='col-md-6'>
                        <h4 style={{fontSize: '22px', color: '#337ab7', textAlign: 'left', fontWeight: "500"}} className='col-md-10-offset-1'>
                          {article.headline.main}
                        </h4>
                        <p className="col-md-12">
                          {article.snippet}
                        </p>
                        <p style={{fontSize: '10px', marginTop: '16px'}} className='col-md-6'>
                          <small>
                            {article.byline.original}
                          </small>
                        </p>
                        <div className='col-md-6' style={{textAlign: 'right', marginTop: '16px'}}>
                          <a style={{color: '#337ab7',width: '120px',height: "35px",fontSize: "16px"}}
                             onClick={(e)=>this.handleSubmit(e,article)}  value={article}
                              >Save Article</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br ></br>
                  <div style={{borderBottom: "2px solid #EEE"}}></div>
                </div>
              )
            })}
          </div>
          <div>
            <div>
              <div>
              </div>
            </div>
          </div>
        {/* </div> */}

      </div>);
    }
  }
