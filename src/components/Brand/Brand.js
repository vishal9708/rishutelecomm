import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    > 
    <span className="logo-heading text-xl truncate w-full" style={{textDecorationStyle: 'solid'}}>
            Rishu Telecom
          </span>
         
   </div>
  );
};

export default Brand;
