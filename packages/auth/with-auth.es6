import { observer, inject } from 'mobx-react';

export default Wrapped => inject(({ $auth }) => ({ $auth, auth: $auth }))(observer(Wrapped));
