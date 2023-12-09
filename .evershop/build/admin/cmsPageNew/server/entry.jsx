import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Area from '@evershop/evershop/src/components/common/Area';
Area.defaultProps.components = {
  header: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2F1dGgvcGFnZXMvYWRtaW4vYWxsL0FkbWluVXNlci5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2F1dGgvcGFnZXMvYWRtaW4vYWxsL0FkbWluVXNlci5qc3g=',
      sortOrder: 50,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/auth/pages/admin/all/AdminUser.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTG9nby5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTG9nby5qc3g=',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/Logo.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvU2VhcmNoQm94LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvU2VhcmNoQm94LmpzeA==',
      sortOrder: 20,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/SearchBox.jsx')
    }
  },
  adminMenu: {
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NhdGFsb2cvcGFnZXMvYWRtaW4vYWxsL0NhdGFsb2dNZW51R3JvdXAuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NhdGFsb2cvcGFnZXMvYWRtaW4vYWxsL0NhdGFsb2dNZW51R3JvdXAuanN4',
      sortOrder: 20,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/catalog/pages/admin/all/CatalogMenuGroup.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvQ21zTWVudUdyb3VwLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvQ21zTWVudUdyb3VwLmpzeA==',
      sortOrder: 60,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/CmsMenuGroup.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvUXVpY2tMaW5rcy5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvUXVpY2tMaW5rcy5qc3g=',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/QuickLinks.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2N1c3RvbWVyL3BhZ2VzL2FkbWluL2FsbC9DdXN0b21lck1lbnVHcm91cC5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2N1c3RvbWVyL3BhZ2VzL2FkbWluL2FsbC9DdXN0b21lck1lbnVHcm91cC5qc3g=',
      sortOrder: 40,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/customer/pages/admin/all/CustomerMenuGroup.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL29tcy9wYWdlcy9hZG1pbi9hbGwvT21zTWVudUdyb3VwLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL29tcy9wYWdlcy9hZG1pbi9hbGwvT21zTWVudUdyb3VwLmpzeA==',
      sortOrder: 30,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/oms/pages/admin/all/OmsMenuGroup.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3Byb21vdGlvbi9wYWdlcy9hZG1pbi9hbGwvQ291cG9uTWVudUdyb3VwLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3Byb21vdGlvbi9wYWdlcy9hZG1pbi9hbGwvQ291cG9uTWVudUdyb3VwLmpzeA==',
      sortOrder: 50,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/promotion/pages/admin/all/CouponMenuGroup.jsx')
    },
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3NldHRpbmcvcGFnZXMvYWRtaW4vYWxsL1NldHRpbmdNZW51R3JvdXAuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3NldHRpbmcvcGFnZXMvYWRtaW4vYWxsL1NldHRpbmdNZW51R3JvdXAuanN4',
      sortOrder: 500,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/setting/pages/admin/all/SettingMenuGroup.jsx')
    }
  },
  quickLinks: {
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NhdGFsb2cvcGFnZXMvYWRtaW4vYWxsL05ld1Byb2R1Y3RRdWlja0xpbmsuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2NhdGFsb2cvcGFnZXMvYWRtaW4vYWxsL05ld1Byb2R1Y3RRdWlja0xpbmsuanN4',
      sortOrder: 20,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/catalog/pages/admin/all/NewProductQuickLink.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3Byb21vdGlvbi9wYWdlcy9hZG1pbi9hbGwvTmV3Q291cG9uUXVpY2tMaW5rLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3Byb21vdGlvbi9wYWdlcy9hZG1pbi9hbGwvTmV3Q291cG9uUXVpY2tMaW5rLmpzeA==',
      sortOrder: 30,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/promotion/pages/admin/all/NewCouponQuickLink.jsx')
    }
  },
  body: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTGF5b3V0LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTGF5b3V0LmpzeA==',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/Layout.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTm90aWZpY2F0aW9uLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTm90aWZpY2F0aW9uLmpzeA==',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/Notification.jsx')
    }
  },
  head: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTWV0YS5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTWV0YS5qc3g=',
      sortOrder: 5,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/Meta.jsx')
    }
  },
  adminNavigation: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTmF2aWdhdGlvbi5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9hbGwvTmF2aWdhdGlvbi5qc3g=',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/all/Navigation.jsx')
    }
  },
  cmsPageForm: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L0Zvcm1Db250ZW50LmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L0Zvcm1Db250ZW50LmpzeA==',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/FormContent.jsx')
    }
  },
  leftSide: {
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L0dlbmVyYWwuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L0dlbmVyYWwuanN4',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/General.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L1Nlby5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L1Nlby5qc3g=',
      sortOrder: 30,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/Seo.jsx')
    }
  },
  content: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L1BhZ2VIZWFkaW5nLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L1BhZ2VIZWFkaW5nLmpzeA==',
      sortOrder: 5,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/PageHeading.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlTmV3L1BhZ2VOZXdGb3JtLmpzeA==': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlTmV3L1BhZ2VOZXdGb3JtLmpzeA==',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/cmsPageNew/PageNewForm.jsx')
    }
  },
  rightSide: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L1N0YXR1c0FuZExheW91dC5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL2Ntcy9wYWdlcy9hZG1pbi9jbXNQYWdlRWRpdCtjbXNQYWdlTmV3L1N0YXR1c0FuZExheW91dC5qc3g=',
      sortOrder: 15,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/cms/pages/admin/cmsPageEdit+cmsPageNew/StatusAndLayout.jsx')
    }
  },
  settingPageMenu: {
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL29tcy9wYWdlcy9hZG1pbi9hbGwvU2hpcHBpbmdTZXR0aW5nTWVudS5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL29tcy9wYWdlcy9hZG1pbi9hbGwvU2hpcHBpbmdTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 15,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/oms/pages/admin/all/ShippingSettingMenu.jsx')
    },
    'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3NldHRpbmcvcGFnZXMvYWRtaW4vYWxsL1BheW1lbnRTZXR0aW5nTWVudS5qc3g=': {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3NldHRpbmcvcGFnZXMvYWRtaW4vYWxsL1BheW1lbnRTZXR0aW5nTWVudS5qc3g=',
      sortOrder: 10,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/setting/pages/admin/all/PaymentSettingMenu.jsx')
    },
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3NldHRpbmcvcGFnZXMvYWRtaW4vYWxsL1N0b3JlU2V0dGluZ01lbnUuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3NldHRpbmcvcGFnZXMvYWRtaW4vYWxsL1N0b3JlU2V0dGluZ01lbnUuanN4',
      sortOrder: 5,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/setting/pages/admin/all/StoreSettingMenu.jsx')
    },
    L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3RheC9wYWdlcy9hZG1pbi9hbGwvVGF4U2V0dGluZ01lbnUuanN4: {
      id: 'L3BhY2thZ2VzL2V2ZXJzaG9wL3NyYy9tb2R1bGVzL3RheC9wYWdlcy9hZG1pbi9hbGwvVGF4U2V0dGluZ01lbnUuanN4',
      sortOrder: 20,
      component: require('/Users/vincent/Documents/yuansai/ever/evershop/packages/evershop/src/modules/tax/pages/admin/all/TaxSettingMenu.jsx')
    }
  }
} 