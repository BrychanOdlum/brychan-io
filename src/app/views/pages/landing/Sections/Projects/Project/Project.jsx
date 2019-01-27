import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import classes from './Project.scss';
import Window from '../../../../../components/Window/Window';

function Project(props) {
  const { project } = props;

  let windowTitle = project.url || `${project.name}`;
  if (project.defunct) {
    windowTitle += ' | Discontinued';
  }

  return (
    <div className={cx(classes.project, { [classes.inverseAlign]: props.inverseAlignment })}>
      <div className={classes.windowContainer}>
        <Window title={windowTitle}>
          <img
            src={project.preview}
            alt={`${project.name} preview`}
            className={classes.windowPreview}
          />
        </Window>
      </div>
      <div className={classes.detailsContainer}>
        <div>
          <div className={classes.nameContainer}>
            <h1>{project.name}</h1>
          </div>
          {project.url && (
            <div className={classes.linkContainer}>
              <a href={project.url}>{project.url}</a>
            </div>
          )}
          <div className={classes.descriptionContainer}>
            <p>{project.description}</p>
          </div>
          <div className={classes.skills}>
            {project.skills.map(skill => (
              <span>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  inverseAlignment: PropTypes.bool,
};

Project.defaultProps = {
  inverseAlignment: false,
};

export default Project;
