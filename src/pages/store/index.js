import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Puli-cart</h1>
                    <p>This is an E-cart site.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;