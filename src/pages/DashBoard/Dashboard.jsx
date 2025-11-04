import React from 'react';
import Sales from './widgets/Sales';
import BarChart from './widgets/BarChart';
import PieChart from './widgets/PieChart';

const Dashboard = () => {
    return (
      <>
        <main className="main-dashboard">
          <div className="container">
            <ul className="list-unstyled d-flex gap-4">
              <li>Day</li>
              <li>Week</li>
              <li>Month</li>
              <li>Year</li>
            </ul>
            <Sales />
            <div className="row mt-5">
              <div className="col-8">
                <BarChart />
              </div>
              <div className="col-4">
                <PieChart />
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Dashboard;
