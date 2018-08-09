import React from 'react';
import PropTypes from 'prop-types';

// Footer.jsのリンク部分のコンポーネント。 FilterLink.jsでreact-reduxを使って拡張されている。s
const Link = ({ active, children, onClick }) => (
  <button onClick={onClick} disabled={active} style={{marginLeft: '4px',}} >
    {children}
  </button>
)
// ここでの children は Footer.js の ALL, Active, Completed のこと.
// Linkを抽象化しておくことで３つも同じようなものを作らずに済む.

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link