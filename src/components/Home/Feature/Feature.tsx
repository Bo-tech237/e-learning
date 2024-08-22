import React from 'react';
import FeatureImage from './FeatureImage';
import FeatureContent from './FeatureContent';

export default function Feature() {
    return (
        <div className="py-16">
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-4/5 mx-auto">
                <FeatureImage />
                <FeatureContent />
            </div>
        </div>
    );
}
