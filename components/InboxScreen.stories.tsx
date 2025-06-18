import React from 'react';
import { InboxScreen } from './InboxScreen';

export default {
  title: 'InboxScreen',
  component: InboxScreen,
};

export const Default = () => <InboxScreen />;

export const Loading = () => <InboxScreen loading />;
