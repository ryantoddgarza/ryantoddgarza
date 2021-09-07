import React, { FunctionComponent } from 'react';
import type { Feature, FeatureGridProps } from './types';

const FeatureGrid: FunctionComponent<FeatureGridProps> = ({
  features,
}: FeatureGridProps) => (
  <div className="feature-grid">
    {features.map(({ heading, body }: Feature) => (
      <div className="feature-card" key={heading}>
        <div className="heading">{heading}</div>
        <div className="body">{body}</div>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
