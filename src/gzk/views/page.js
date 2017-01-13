import React from 'react';
import { Page } from 'olymp/cms';

const isReadOnly = props => !props.auth || !props.auth.user || !!props.auth.user.einrichtung;
export default props => <Page {...props} getReadOnly={isReadOnly} />;
