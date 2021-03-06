import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { FaHome, FaIdBadge, FaTasks, FaFolderOpen } from 'react-icons/fa';

function Links({handler}) {
  const routes = [
    '/',
    'profile',
    'skills',
    'work',
  ];
  const li = [
    <FaHome style={{ verticalAlign: 'top' }} />,
    <FaIdBadge style={{ verticalAlign: 'top' }} />,
    <FaTasks style={{ verticalAlign: 'top' }} />,
    <FaFolderOpen style={{ verticalAlign: 'top' }} />,
  ];
  const iconColor = ['violet', 'lightgreen', 'skyblue', 'yellow'];
  return (
    <List  >
      {['Home', 'Profile', 'Skills', 'Work'].map((text, index) => (
        <Link
          key={index}
          to={routes[index]}
          style={{ display: 'block', textDecoration: 'none' }}
          onClick={handler}
        >
          <ListItem button key={text}>
            <ListItemIcon>
              <Icon style={{ color: iconColor[index] }} key={text}>
                {li[index]}
              </Icon>
            </ListItemIcon>
            <ListItemText primary={text} style={{ color: 'white' }} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

Links.propTypes = {};

export default Links;
