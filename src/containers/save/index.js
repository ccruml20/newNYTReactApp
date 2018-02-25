import React, { Component } from 'react';


class Saved extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{height: "309px", overflow: 'scroll'}} className='col-md-7'>

          {this.props.saved_records.map((saved_record, i)=>{
            console.log('saved_records', saved_record);
            return (
              <div key={`${saved_record}-${i}`}>
                <div style={{textAlign: "center", backgroundColor: 'rgb(251, 250, 246)', height: '60px'}}>
                  <div style={{fontWeight: '700', fontSize: '16px', color: '#337ab7'}} className="col-md-6">
                    {saved_record.title}
                  </div>
                  <div className="col-md-4">
                    {saved_record.date}
                  </div>
                  <div className="col-md-2">
                    <a href="" className="">Delete Article</a>
                  </div>
                </div>
                <br></br>
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default Saved;
