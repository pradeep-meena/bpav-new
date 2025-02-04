import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductPricing from './ProductPricing ';

import ProductPage from './ProductPage';
import ProductSettings from './ProductSettings';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from './ProductDetails';
import ProductHistory from './History';
import { BsWindowDock } from "react-icons/bs";

const InventoryItemCard = () => (
  <div>
   {/* Header */}
   <div className='page-wrapper'>
   <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h4 className="fw-bold">
          Products &gt; <span className="text-dark">Cp3</span>
        </h4>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <i className="bi bi-files"></i> Duplicate product
          </button>
          <button className="btn btn-outline-secondary">
          <BsWindowDock />
          </button>
        </div>
      </div>

      
  <Tabs>
    <TabList>
      <Tab>Inventory</Tab>
      <Tab> Variations</Tab>
      <Tab> Pricing</Tab>
      <Tab>Settings</Tab>
      <Tab> History</Tab>
    </TabList>

    <TabPanel>
        <ProductDetails/>
    </TabPanel>
    <TabPanel>

      <ProductPage />
    </TabPanel>
    <TabPanel>

      <ProductPricing />
    </TabPanel>
    <TabPanel>
      <ProductSettings />
    </TabPanel>
    <TabPanel>
    <ProductHistory />
    </TabPanel>
   
  </Tabs>

  </div>
  </div>
);
export default InventoryItemCard;