import { FC } from 'react';
import BreadcrumbsItem from '@entities/breadcumb-item';
import useBreadcrumbs from '@/features/bradcrumbs/hooks/useBreadcrumbs.tsx';
import { Breadcrumbs as MaterialBreadcrumbs, Icon, Typography } from '@mui/material';
import RouterPaths from '@app/router/routerPathsConfig';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { generateAbsoluteRouterPath } from '@shared/lib/functions.ts';
import { Link } from 'react-router-dom';

const Breadcrumbs: FC = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <MaterialBreadcrumbs>
      <Link
        style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }}
        to={generateAbsoluteRouterPath(RouterPaths.clusters.absolutePath).pathname}>
        <Icon>
          <HomeOutlinedIcon />
        </Icon>
      </Link>
      {breadcrumbs.map((breadcrumb, index) =>
        index === breadcrumbs.length - 1 ? (
          <Typography key={breadcrumb.path} color="text.primary">
            {breadcrumb.label}
          </Typography>
        ) : (
          <BreadcrumbsItem key={breadcrumb.path} {...breadcrumb} />
        ),
      )}
    </MaterialBreadcrumbs>
  );
};

export default Breadcrumbs;
