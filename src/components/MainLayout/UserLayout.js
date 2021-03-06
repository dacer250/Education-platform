import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'dva/router';
import { Icon } from 'antd';
import GlobalFooter from './GlobalFooter';
import styles from './UserLayout.less';

	const links = [{
  		title: '帮助',
  		href: '',
	}, {
  		title: '隐私',
  		href: '',
	}, {
  		title: '条款',
  		href: '',
	}];

	const copyright = <div>Copyright <Icon type="copyright" /> 15500409521@163.com</div>;

class UserLayout extends React.PureComponent {
  	static childContextTypes = {
    	location: PropTypes.object,
  	}
  	getChildContext() {
    	const { location } = this.props;
    	return { location };
 	 }
  	getPageTitle() {
    	const { getRouteData, location } = this.props;
    	const { pathname } = location;
    	let title = '在线教育平台';
    	// getRouteData('UserLayout').forEach((item) => {
     	//	  if (item.path === pathname) {
     	//      title = `${item.name} - Ant Design Pro`;
     	//   }
    	// });
    return title;
  }
  render() {

    return (
        	<div className={styles.container}>
          		<div className={styles.top}>
            		<div className={styles.header}>
              			<Link to="/">
                			<img alt="" className={styles.logo} src="https://gw.alipayobjects.com/zos/rmsportal/NGCCBOENpgTXpBWUIPnI.svg" />
                			<span className={styles.title}>Education</span>
              			</Link>
            		</div>
            	<div className={styles.desc}>在线教育平台--登录界面</div>
          	</div>
         		{this.props.children}
          	<GlobalFooter className={styles.footer} links={links} copyright={copyright} />
        </div>
    );
  }
}

export default UserLayout;
