import React from 'react';
import PropTypes from 'prop-types';

const Socials = ({ socials }) =>
  socials && socials.map(social => (
    <a style={{ marginRight: '1em', padding: '.50em 0.50em' }}
      key={social.id}
      href={'/users/' + social.id}
      target="_blank"
      rel="noopener noreferrer" className="badge badge-warning">

      {social.name}
      {/* <span className="float-right"><i className="fa fa-circle" aria-hidden="true"></i> online</span> */}
    </a>
  ));

Socials.propTypes = {
  socials: PropTypes.array.isRequired
};

export default Socials;
