import React from 'react';

const Form = (props) => {
  return (
    <div style={{backgroundColor: 'rgb(251, 250, 246)'}} className="col-md-4">
      <div >
        <div >
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label html="exampleInputEmail1">Search Term</label>
              <input
                type="text"
                className="form-control"
                id="Search Term"
                placeholder="search"
                onChange={props.handleSearchChange}
                value={props.searchTerm}
              />

            </div>
            <div className="form-group">
              <label html="Records">Numer of Records</label>
              <input
                type="text"
                className="form-control"
                id="NumberOfRecords"
                placeholder="records"
                onChange={props.handleRecordChange}
                value={props.records}
              />
            </div>
            <div className="form-group">
              <label html="exampleInputEmail1">Start Year (optional)</label>
              <input
                type="text"
                className="form-control"
                id="StartYear"
                placeholder="year"
                onChange={props.handleStartYearChange}
                value={props.startYear}
              />
            </div>
            <div className="form-group">
              <label html="exampleInputEmail1">End Year (optional)</label>
              <input
                type="text"
                className="form-control"
                id="EndYear"
                placeholder="year"
                onChange={props.handleEndYearChange}
                value={props.endYear}

              />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>

  );
};

export default Form;
