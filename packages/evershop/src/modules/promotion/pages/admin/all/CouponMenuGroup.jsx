import PropTypes from 'prop-types';
import React from 'react';
import Icon from '@heroicons/react/solid/esm/GiftIcon';
import NavigationItemGroup from '@components/admin/cms/NavigationItemGroup';

export default function CatalogMenuGroup({ couponGrid }) {
  // return (
  //   <NavigationItemGroup
  //     id="couponMenuGroup"
  //     name="Promotion"
  //     style={{ display: 'none' }}
  //     items={[
  //       {
  //         Icon,
  //         url: couponGrid,
  //         title: 'Coupons'
  //       }
  //     ]}
  //   />
  // );
  return null;
}

CatalogMenuGroup.propTypes = {
  couponGrid: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'adminMenu',
  sortOrder: 50
};

export const query = `
  query Query {
    couponGrid: url(routeId:"couponGrid")
  }
`;
