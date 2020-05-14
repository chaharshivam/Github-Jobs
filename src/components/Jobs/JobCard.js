import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import CustomSkeleton from '../shared/CustomSkeleton';

function JobCard({ job, dark }) {
  console.log(job)
  let date = job && + new Date(job.created_at);
  return (
    <div className={`${dark ? 'bg-blue-800' : 'bg-white'} shadow flex flex-wrap py-4 px-3 rounded shadow-sm mb-2 lg:mb-4`}>
      <header className="w-full flex flex-wrap justify-between items-baseline lg:mb-2">
        <h2 className={`${dark ? 'text-white' : 'text-gray-900'} w-full lg:w-4/5 text-md font-bold`}>
          {job ? job.title : <CustomSkeleton width={300} />}
        </h2>
        <span className={`${dark ? 'text-gray-200' : 'text-gray-600'} text-xs`}>{date ? moment(date).startOf('hour').fromNow() : <CustomSkeleton width={90} />}</span>
      </header>
      <footer className="w-full flex justify-between mt-2">
        <div className={`flex flex-wrap items-center w-1/2 flex-between text-xs ${dark ? 'text-gray-200' : 'text-gray-600'}`}>
          {
            job ?
              (<><span>{job.company}</span>
                <span className="mx-1">—</span>
                <span
                  className={
                    `${dark ? `${job.type === "Full Time" ? 'text-green-400' : 'text-orange-400'}`
                      :
                      `${job.type === "Full Time" ? 'text-green-600' : 'text-orange-600'}`} font-bold`
                  }
                >
                  {job.type}
                </span></>) : <CustomSkeleton width={160}/>
          }
        </div>
        <div className={`${dark ? 'text-gray-200' : 'text-gray-600'} text-xs`}>
          {job && <i className="fas fa-globe-asia mr-1"></i>}
          <span>{job ? job.location : <CustomSkeleton width={60} />}</span>
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(JobCard);
