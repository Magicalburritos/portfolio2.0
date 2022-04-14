import React from 'react';
import Project from './data';
function Projects(active) {
  if (!active === 'projects') return null;
  let col1 = [];
  let col2 = [];

  const seperateProjects = () => {
    Project.forEach((item, i) => {
      if (i % 2 === 0) {
        col1.push(item);
      } else {
        col2.push(item);
      }
    });
  };

  seperateProjects();

  console.log(col1);

  return (
    <div className="row">
      {col1.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6 col-9">
            <h1>{item.name}</h1>
            <img src={item.image} style={{ height: 500, width: 500 }} alt="" />
            <p>{item.description}</p>
            <a href={`${item.github}`}>github</a>
            <br></br>
            <a href={`${item.deployed}`}>deployed</a>
          </div>
        );
      })}
      {col2.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6 col-9">
            <h1>{item.name}</h1>
            <img src={item.image} style={{ height: 500, width: 500 }} alt="" />
            <p>{item.description}</p>
            <a href={`${item.github}`}>github</a>
            <br></br>
            <a href={`${item.deployed}`}>deployed</a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
