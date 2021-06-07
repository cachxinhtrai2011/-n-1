import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý Vốn']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Vốn cố định',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Vốn lưu động',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Thao Tác']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Thông Tin Vốn',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách tài sản',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Chi tiết tài sản',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Chủ sở hữu',
        to: '/base/carousels',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Forms',
      //   to: '/base/forms',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Jumbotron',
      //   to: '/base/jumbotrons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navs',
      //   to: '/base/navs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navbars',
      //   to: '/base/navbars',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Progress',
      //   to: '/base/progress-bar',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Switches',
      //   to: '/base/switches',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tabs',
      //   to: '/base/tabs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Lọc nguồn vốn',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Theo loại vốn',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Theo chủ sỡ hữu',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Theo giá trị',
        to: '/buttons/button-groups',
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Dropdowns',
      //   to: '/buttons/button-dropdowns',
      // }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Quản lý chi tiêu',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Đã chi',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'CoreUI Flags',
      //   to: '/icons/flags',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'CoreUI Brands',
      //   to: '/icons/brands',
      // },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Kiểm duyệt thông tin',
    route: '/notifications',
    icon: 'cil-bell',
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Alerts',
    //     to: '/notifications/alerts',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Badges',
    //     to: '/notifications/badges',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Modal',
    //     to: '/notifications/modals',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Toaster',
    //     to: '/notifications/toaster'
    //   }
    // ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cập nhật/Xóa Thông Tin Vốn',
    to: '/widgets',
    icon: 'cil-calculator',
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   _tag: 'CSidebarNavDivider'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Extras'],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Disabled',
  //   icon: 'cil-ban',
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Labels']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label danger',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label info',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Label warning',
  //   to: '',
  //   icon: {
  //     name: 'cil-star',
  //     className: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _tag: 'CSidebarNavDivider',
  //   className: 'm-2'
  // }
]

export default _nav
