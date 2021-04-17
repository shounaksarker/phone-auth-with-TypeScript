import React, { useState } from 'react';

import Tabs from "./Tabs";
// Tabs Components
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree"


import '../common.css';

const Colps = () => {


    type TabsType = {
        label: string;
        index: number;
        Component: React.FC<{}>;
    }[];

    // Tabs Array
    const tabs: TabsType = [
        {
            label: "Feature",
            index: 1,
            Component: TabOne
        },
        {
            label: "Private",
            index: 2,
            Component: TabTwo
        },
        {
            label: "Urgent",
            index: 3,
            Component: TabThree
        }
    ];

    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

    return (
        <div className="colps constainer-fluid">
            <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
        </div>
    );
};

export default Colps;