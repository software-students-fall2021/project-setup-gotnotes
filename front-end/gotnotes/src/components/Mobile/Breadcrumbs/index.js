/*export default Breadcrumb;

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  console.info('event:', {event});
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumbs">
        <Link underline="hover" color="inherit" href="/">
          Unis
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Uni
        </Link>
        <Typography color="text.primary">Course</Typography>
      </Breadcrumbs>
    </div>
  );
}*/

import * as React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, Route, MemoryRouter } from 'react-router-dom';

const breadcrumbNameMap = {
  '/Unis': 'Uni',
  '/Unis/Uni': 'Uni',
  '/Unis/Uni/Course': 'Course',
};

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function RouterBreadcrumbs() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MemoryRouter initialEntries={['/unis']} initialIndex={0}>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter((x) => x);

            return (
              <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter underline="hover" color="inherit" to="/">
                  Unis
                </LinkRouter>

                {/*Take out this part and link below code to specific routes*/}
                <LinkRouter underline="hover" color="inherit" to="/">
                  Uni
                </LinkRouter>
                <LinkRouter underline="hover" color="inherit" to="/">
                  Course
                </LinkRouter>

                
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="text.primary" key={to}>
                      {breadcrumbNameMap[to]}
                      console.info('route to uni');
                    </Typography>
                  ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                      {breadcrumbNameMap[to]}
                      console.info('route to course');
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
    </MemoryRouter>
  );
}